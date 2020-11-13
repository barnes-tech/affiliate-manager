<?php
  namespace App\Controller;
  use Core\{Controller,Tools,Session,Router};
  use App\Model\{Products,Reviews,ReviewImages,Users};
  use App\Lib\Utilities\Uploads;

  class AdminReviewsController extends Controller {
    public function on_construct() {
      $this->view->set_layout('admin');
      $this->current_user = Users::current_user();
    }

    public function edit_action($id) {
      $product = Products::find_by_user_and_id($this->current_user->id,$id);
      if(!$product) {
        Session::add_msg('danger','You done have permission to edit this product.');
        Router::redirect('adminproducts/index');
      }
      $review = Reviews::find_product_id($id);
      $images = ReviewImages::find_review_id($review->id);
      $new_images = new ReviewImages();
      if($this->request->is_post()) {
        $this->request->csrf_check();
        $files = $_FILES['review_images'];
        $uploads = new Uploads($files);
        if($files['tmp_name'][0]!='') {
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
        $review->assign($this->request->get(),Reviews::blacklist);
        $review->save();
        if($review->is_valid()) {
          if($new_images) {
            $new_images->upload_review_images($review->id,$uploads);
          }
          $product->reviewed = 1;
          $product->save();
          Session::add_msg('success','Review for '.$product->name.' successfully updated.');
          Router::redirect('adminproducts/index');
        }
      }
      $this->view->product = $product;
      $this->view->review = $review;
      $this->view->images = $images;
      $this->view->display_errors = $review->get_validation_errors();
      $this->view->form_action = SROOT.'adminreviews/edit';
      $this->view->render('adminreviews/edit');
    }

    public function delete_img_action() {
      $resp = [
        'success' => false,
        'msg' => 'Something went Wrong.'
      ];
      if($this->request->is_post()) {
        $id = $this->request->get('image_id');
        $image = ReviewImages::find_id($id);
        $review = Reviews::find_id($image->review_id);
        $product = Products::find_by_user_and_id($this->current_user->id, $review->product_id);
        if($product) {
          ReviewImages::delete_id($id);
          $resp = [
            'success' => true,
            'model_id' => $image->id
          ];
        }
      }
      $this->json_response($resp);
    }
}
