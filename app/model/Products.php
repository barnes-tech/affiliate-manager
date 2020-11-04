<?php
  namespace App\Model;
  use Core\{Model,Tools};
  use Core\Validators\{RequiredValidator,MaxValidator,NumericValidator};
  use App\Model\productImages;

  class Products extends Model {
    public $id, $name, $tagline, $description, $rrp, $brand, $category, $created_at, $updated_at,
           $user_id, $listed=0, $archived=0;
    const blacklist = ['id','listed','archived'];
    protected static $_table="products", $_archived=true;

    public function validator() {
    //validation for item name
    $this->run_validation(new RequiredValidator($this,['field'=>'name','msg'=>'Product name is required.']));
    $this->run_validation(new MaxValidator($this,['field'=>'name','rule'=>150,'msg'=>'Product name must be less than 64 character.']));
    //validation for tagline
    $this->run_validation(new MaxValidator($this,['field'=>'tagline','rule'=>255,'msg'=>'Tagline must be less than 255 character.']));
    //validation for price
    $this->run_validation(new RequiredValidator($this,['field'=>'rrp','msg'=>'RRP is required.']));
    $this->run_validation(new NumericValidator($this,['field'=>'rrp','msg'=>'RRP must be numeric.']));

    //validation for lore
    $this->run_validation(new MaxValidator($this,['field'=>'description','rule'=>500,'msg'=>'Come on we\'re not writing a book, lore must be less than 255 charachters']));
  }

  public function before_save() {
    $this->time_stamps();
  }

    public static function find_by_user_id($user_id, $params=[]) {
      $conditions = [
        'conditions' => "user_id = ?",
        'bind' => [(int)$user_id]
      ];
      $params = array_merge($conditions,$params);
      return self::find($params);
    }
  }
