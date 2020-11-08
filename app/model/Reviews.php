<?php
  namespace App\Model;
  use Core\{Model,Tools,Session};
  use Core\Validators\{MaxValidator,HttpsValidator};

  class Reviews extends Model {
    public $id, $title, $overview_head, $overview ,$features_head, $features,
           $conclusion_head, $conclusion, $product_id, $archived=0;
    const blacklist = ['id','archived'];
    protected static $_table="reviews", $_archived=true;

    public function before_save() {
      $this->time_stamps();
    }

    public function after_save() {
      Session::add_msg('success','Empty review added new product');
    }

    public static function find_product_id($id) {
      $conditions = [
        'conditions' => "product_id",
        'bind' => [(int)$id]
      ];
      return self::find_first($conditions);
    }
  }
