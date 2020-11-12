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

    public function listed_action() {
      $resp = [
        'success' => false,
        'msg' => 'Something went wrong.'
      ];
      if($this->request->is_post()) {
        $id = $this->request->get('id');
        $product = Products::find_by_user_and_id($this->current_user->id,$id);
        if($product) {
          $product->listed = ($product->listed==1)? 0:1;
          $product->save();
          $msg = ($product->listed ==1)? $product->name." now featured on site.":$product->name." no longer featured.";
          $resp = [
            'success' => true,
            'msg' => $msg,
            'model_id' => $id,
            'listed' => $product->listed
          ];
        }
      }
      $this->json_response($resp);
    }

    public function edit_action($id) {
      $product = Products::find_by_user_and_id($this->current_user->id,$id);
      if(!$product) {
        Session::add_msg('danger','You don\'t have permission to edit that product');
        Router::redirect('adminproducts/index');
      }
      $images = ProductImages::find_by_product_id($id);
      $brands = Brands::get_brands_options();
      if($this->request->is_post()) {
        $this->request->csrf_check();
        $files = $_FILES['product_images'];
        $is_files = ($files['tmp_name'][0]!='');
        if($is_files) {
          $uploads = new Uploads($files);
          $uploads->run_validation();
          $image_errors = $uploads->is_valid();
          if(is_array($image_errors)) {
            $msg = "";
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
          if($is_files) {
            ProductImages::upload_product_images($product->id,$uploads);
          }
          $sort_order = json_decode($_POST['sorted-img']);
          ProductImages::update_sort_by_id($product->id,$sort_order);
          Session::add_msg('success',$product->name.' updated successfully.');
          Router::redirect('adminproducts/index');
        }
      }
      $this->view->product = $product;
      $this->view->images = $images;
      $this->view->brands = $brands;
      $this->view->display_errors = $product->get_validation_errors();
      $this->view->render('adminproducts/edit');
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

    public function delete_img_action() {
      $resp = [
        'success' => false,
        'msg' => 'Something went wrong.'
      ];
      if($this->request->is_post()) {
        $id = $this->request->get('image_id');
        $image = ProductImages::find_id($id);
        $product = Products::find_by_user_and_id($this->current_user->id,$image->product_id);
        if($product) {
          ProductImages::delete_id($id);
          $resp = [
            'success' => true,
            'model_id' => $image->id
          ];
        }
      }
      $this->json_response($resp);
    }

  }
