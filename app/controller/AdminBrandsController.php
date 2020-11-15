<?php
  namespace App\Controller;
  use Core\{Controller,Tools,Router};
  use App\Model\{Users,Brands};

  class AdminBrandsController extends Controller {

    public function on_construct() {
      $this->view->set_layout('admin');
      $this->current_user = Users::current_user();
    }

    public function index_action() {
      $brand = new Brands();
      $this->view->brand = $brand;
      $this->view->brands = Brands::find([
        'conditions' => "user_id = ?",
        'bind' => [$this->current_user->id],
        'order' => 'name'
      ]);
      $this->view->display_errors = $brand->get_validation_errors();
      $this->view->render('adminbrands/index');
    }

    public function save_action() {
      if($this->request->is_post()) {
        $resp = ['success' => false];
        $id = $this->request->get('brand_id');
        if($id=='new') {
          $brand = new Brands();
          $brand->user_id = $this->current_user->id;
        } else {
          $brand = Brands::find_by_user_and_id($this->current_user->id,$id);
        }
        $brand->name = $this->request->get('name');
        $brand->about = $this->request->get('about');
        $brand->save();
        if($brand->is_valid()) {
          $resp = [
            'success' => true,
            'brand' => $brand->data()
          ];
        } else {
          $resp = [
            'success' => false,
            'errors' => $brand->get_validation_errors()
          ];
        }
        $this->json_response($resp);
      }
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
      if($this->request->is_post()) {
        $id = (int)$this->request->get('id');
        $brand = Brands::find_by_user_and_id($this->current_user->id,$id);
        $resp = [
          'success' => false
        ];
        if($brand) {
          $brand->delete();
          $resp = [
            'success' => true,
            'model_id' => $id,
            'name' => $brand->name
          ];
        }
        $this->json_response($resp);
      }
    }
  }
