<?php
  namespace App\Model;
  use Core\Model;
  use Core\Validators\{RequiredValidator};

  class Keywords extends Model {
    public $id, $keywords, $product_id, $user_id, $archived = 0;
    const blacklist = ['id','user_id','archived'] ;
    protected static $_table = 'keywords', $_archived = false;

    public static function find_by_user_and_product($user_id, $product_id) {
      $conditions = [
        'conditions'=>"user_id =? AND product_id = ?",
        'bind'=>[(int)$user_id,(int)$product_id]
      ];
      return self::find_first($conditions);
    }
  }
