<?php
  namespace App\Controller;
  use Core\{Controller,Tools,Session,Router};
  use App\Model\{Products,ProductImages,Users,Reviews,Brands};
  use App\Lib\Utilities\Uploads;

  class AdminProductsController extends Controller {
    public function on_construct() {
      $this->view->set_layout('admin');
      $this->current_user = Users::current_user();
    }

    public function index_action() {
      $this->view->products = Products::find_by_user_id($this->current_user->id,['order'=>'name']);
      $this->view->render('adminproducts/index');
    }

    public function add_action() {
      $product = new Products();
      $images = new ProductImages();
      $review = new Reviews();
      $brands = Brands::get_brands_options();
      if($this->request->is_post()) {
        $this->request->csrf_check();
        $files = $_FILES['product_images'];
        if($files['tmp_name'][0]=='') {
          $product->add_error_msg('product_images','Products must include an image');
        } else {
          $uploads = new Uploads($files);
          $uploads->run_validation();
          $image_errors = $uploads->is_valid();
          if(is_array($image_errors)) {
            $msg ="";
            foreach($image_errors as $error => $message) {
              $msg.= $message." ";
            }
            $msg = trim($msg);
            $product->add_error_msg('product_images',$msg);
          }
        }
        $product->assign($this->request->get(),Products::blacklist);
        $product->user_id = $this->current_user->id;
        $product->save();
        if($product->is_valid()) {
          $images->upload_product_images($product->id,$uploads);
          $review->product_id = $product->id;
          $review->save();
          Session::add_msg('success','Product "'.$product->name.'" added successfully.');
          Router::redirect('adminproducts/index');
        }
      }
      $this->view->product = $product;
      $this->view->brands = $brands;
      $this->view->display_errors = $product->get_validation_errors();
      $this->view->form_action = SROOT.'adminproducts/add';
      $this->view->render('adminproducts/add');
    }

    public function delete_action() {
      $resp = [
        'success' => false,
        'msg' => 'Something went wrong.'
      ];
      if($this->request->is_post()) {
        $id = $this->request->get('id');
        $product = Products::find_by_user_and_id($this->current_user->id,$id);
        $review = Reviews::find_product_id($id);
        if($product && $review) {
          ProductImages::delete_images((int)$id,false);
          $product->delete();
          $review->delete();
          $resp = [
            'success' => true,
            'msg' => $product->name.' deleted.',
            'model_id' => $id
          ];
        }
      }
      $this->json_response($resp);
    }
  }
