<?php
  namespace App\Controller;
  use Core\controller;
  use App\Model\Users;

  class AdminDashboardController extends Controller {
    public function on_construct() {
      $this->view->set_layout('admin');
      $this->current_user = Users::current_user();
    }

    public function index_action() {
      $this->view->render('admindashboard/index');
    }
  }
