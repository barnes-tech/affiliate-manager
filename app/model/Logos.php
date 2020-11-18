<?php
  namespace App\Model;
  use Core\Model;

  class Logos extends Model {
    public static $_table = 'logos', $_archived = false;
    public $id, $name, $url, $brand_id, $archived = 0;

    public static function upload_logo($brand_id,$uploads,$brand) {
      $current_logo = self::find_first([
        'conditions' => "brand_id = ?",
        'bind' => [(int)$brand_id]
      ]);
      $path = 'uploads'.DS.'brand_logos'.DS.$brand.DS;
      foreach($uploads->get_files() as $file) {
        $parts = explode('.',$file['name']);
        $ext = end($parts);
        $hash = sha1(time().$brand_id.$file['tmp_name']);
        $upload_name = $hash.'.'.$ext;
        if(!$current_logo) {
          var_dump('we got here');
          $logo = new self();
          $logo->name = $upload_name;
          $logo->url = 'uploads/brand_logos/'.$brand.'/'.$upload_name;
          $logo->brand_id = $brand_id;
          if($logo->save()) {
            $uploads->upload($path,$upload_name,$file['tmp_name']);

          } else {

          }
      }
    }
  }
}
