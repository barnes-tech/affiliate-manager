<?php
  namespace App\Controller;
  use Core\{Controller,Tools,Session,Router};
  use App\Model\{Reviews,ReviewImages,Users};
  use App\Lib\Utilitis\Uploads;

  class AdminReviewsController extends Controller {
    public function on_contruct() {
      $this->view->set_layout('admin');
      $this->current_user = Users::current_user();
    }

    public function edit_action($id) {
      $review = Reviews::find_product_id($id);
      Tools::dnd($review);
    }
  }
