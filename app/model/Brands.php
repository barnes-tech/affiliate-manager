<?php
  namespace App\Model;
  use Core\{Model,Tools};
  use Core\Validators\{RequiredValidator,UniqueValidator,HttpsValidator};

  class Brands extends Model {
    public $id, $name, $about, $url, $created_at, $updated_at, $user_id, $archived = 0;
    const blacklist = ['id','user_id','archived'];
    protected static $_table = 'brands',$_archived = true;

    public function before_save() {
      $this->time_stamps();
    }

    public function validator() {
      $this->run_validation(new RequiredValidator($this,['field'=>'name','msg'=>'Brand name is required.']));
      $this->run_validation(new UniqueValidator($this,['field'=>['name','user_id','archived'],'msg'=>'That brand already exists.']));
      $this->run_validation(new HttpsValidator($this,['field'=>'url','msg'=>'Brand website URL must start with https.']));
    }

    public static function find_by_user_and_id($user_id,$id) {
      return self::find_first([
        'conditions' => "user_id = ? AND id = ?",
        'bind' => [(int)$user_id,(int)$id]
      ]);
    }

    public static function get_brands_options() {
      $brands = self::find([
        'order' => 'name'
      ]);
      $brands_arr = [''=>'-select brand-'];
      foreach($brands as $brand) {
        $brands_arr[$brand->id] = $brand->name;
      }
      return $brands_arr;
    }

    public function find_by_user_with_image($user_id) {
      $sql = "SELECT brands.*, lo.img_url as img_url, lo.sort
              FROM brands
              JOIN logos lo
              ON brands.id = lo.brand_id
              WHERE brands.user_id = '$user_id' AND brands.archived = '0' AND lo.sort = '0'
              ";
      $brands = $this->query($sql);
      return $brands->result();
    }

    public function find_by_brand_with_image($brand_id) {
      $sql = "SELECT brands.*, lo.img_url as img_url, lo.sort
              FROM Brands
              JOIN logos lo
              ON brands.id  = lo.brand_id
              WHERE brands.id = '$brand_id' AND brands.archived = '0' AND lo.sort = '0'
              ";
      $brand = $this->query($sql);
      return $brand->result();
    }
  }
