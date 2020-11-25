<?php
  namespace App\Controller;
  use Core\{Controller,Tools,Session,Router};
  use App\Model\{Users,Brands,Logos};
  use App\Lib\Utilities\Uploads;

  class AdminBrandsController extends Controller {

    public function on_construct() {
      $this->view->set_layout('admin');
      $this->current_user = Users::current_user();
    }

    public function index_action() {
      $brands_model = new Brands();
      $brands = $brands_model->find_by_user_with_image($this->current_user->id);
      $this->view->brands = $brands;
      $this->view->render('adminbrands/index');
    }

    public function add_action() {
      $brand = new Brands();
      $logo = new Logos();
      if($this->request->is_post()) {
        $this->request->csrf_check();
        $files = $_FILES['logo_upload'];
        if($files['tmp_name'][0]=='') {
          $brand->add_error_msg('logo_upload','Brand must include a logo.');
        } else {
          $uploads = new Uploads($files);
          $uploads->run_validation();
          $image_errors =$uploads->is_valid();
          if(is_array($image_errors)) {
            $msg ="";
            foreach($image_errors as $error => $message) {
              $msg.= $message." ";
            }
            $msg = trim($msg);
            $product->add_error_msg('product_images',$msg);
          }
        }
        $brand->assign($this->request->get(),Brands::blacklist);
        $brand->user_id = $this->current_user->id;
        $brand->save();
        if($brand->is_valid()) {
          $logo->upload_brand_images($brand->id,$uploads);
          Session::add_msg('success',$brand->name.' added to brands.');
          Router::redirect('adminbrands/index');
        }
      }
      $this->view->brand = $brand;
      $this->view->display_errors = $brand->get_validation_errors();
      $this->view->form_action = SROOT.'adminbrands/add';
      $this->view->render('adminbrands/add');
    }

    public function edit_action($id) {
      $brand = Brands::find_by_user_and_id($this->current_user->id,$id);
      if(!$brand) {
        Session::add_msg('danger','You don\'t have permission to edit that brand.');
        Router::redirect('adminbrands/index');
      }
      if($this->request->is_post()) {
        $this->request->csrf_check();
        $files = $_FILES['logo_upload'];
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
            $brand->add_error_msg('logo_upload',$msg);
          }
        }
        $brand->assign($this->request->get(),Brands::blacklist);
        $brand->save();
        if($brand->is_valid()) {
          if($is_files) {
            Logos::upload_brand_images($brand->id,$uploads);
          }
          $sort_order = json_decode($_POST['sorted-img']);
          Logos::update_sort_by_id($brand->id, $sort_order);
          Session::add_msg('success',$brand->name." brand information has been updated.");
          Router::redirect('adminbrands/index');
        }
      }
      $images = Logos::find_by_brand_id($id);
      $this->view->brand = $brand;
      $this->view->images = $images;
      $this->view->display_errors = $brand->get_validation_errors();
      $this->view->render('adminbrands/edit');
    }

    public function get_brand_action() {
      if($this->request->is_post()) {
        $id = (int)$this->request->get('id');
        $brand = Brands::find_by_user_and_id($this->current_user->id,$id);
        $resp = [
          'success' => false
        ];
        if($brand) {
          $resp = [
            'success' => true,
            'brand' => $brand->data()
          ];
        }
        $this->json_response($resp);
      }
    }

    public function delete_action(){
      $resp = [
        'success' => false,
        'msg' => 'something went wrong.'
      ];
      if($this->request->is_post()) {
        $id = (int)$this->request->get('id');
        $brand = Brands::find_by_user_and_id($this->current_user->id,$id);
        if($brand) {
          $brand->delete();
          Logos::delete_images($brand->id);
          $resp = [
            'success' => true,
            'model_id' => $id,
            'name' => $brand->name
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
        $image = Logos::find_id($id);
        $brand = Brands::find_by_user_and_id($this->current_user->id, $image->brand_id);
        if($brand) {
          Logos::delete_id($id);
          $resp = [
            'success' => true,
            'model_id' => $image->id
          ];
        }
      }
      $this->json_response($resp);
  }
}
