<?php
  namespace App\Model;
  use Core\{Model,Tools};

  class Logos extends Model {
    protected static $_table = 'logos',$_archived = true;
    public $id, $name, $img_url, $sort, $brand_id, $archived = 0;


  public static function upload_brand_images($brand_id, $uploads) {
    $last_img = self::find_first([
      'conditions' => "brand_id = ?",
      'bind' => [(int)$brand_id],
      'order' => 'sort DESC'
    ]);
    $last_sort = (!$last_img)? 0 : $last_img->sort;
    $path = 'uploads'.DS.'brand_logos'.DS.'brand_'.$brand_id.DS;
    foreach($uploads->get_files() as $file) {
      $parts = explode('.',$file['name']);
      $ext = end($parts);
      $hash = sha1(time().$brand_id.$file['tmp_name']);
      $upload_name = $hash.'.'.$ext;
      $image = new self();
      $image->img_url = 'uploads/brand_logos/brand_'.$brand_id.'/'.$upload_name;
      $image->name = $upload_name;
      $image->brand_id = $brand_id;
      $image->sort = $last_sort;
      if($image->save()) {
        $uploads->upload($path,$upload_name,$file['tmp_name']);
        $last_sort++;
      }
    }
  }


   public static function delete_images($brand_id, $unlink = false) {
    $images = self::find([
      'conditions' => "brand_id = ?",
      'bind' => [(int)$brand_id]
    ]);
    foreach($images as $image) {
      $image->delete();
      if($unlink) {
        $dir = 'uploads'.DS.'brand_logos'.DS.'brand_'.$brand_id;
        array_map('unlink', glob("$dir/*.*"));
        rmdir($dir);
      }
    }
  }

  public static function delete_id($image_id) {
    $image = self::find_id($image_id);
    $sort = $image->sort;
    $after_imgs = self::find([
      'conditions' => "brand_id = ? AND sort > ?",
      'bind' => [(int)$image->brand_id, (int)$sort]
    ]);
    foreach($after_imgs as $record) {
      $record->sort = $record->sort -1;
      $record->save();
    }
    unlink(ROOT.DS.'uploads'.DS.'brand_logos'.DS.'brand_'.$image->brand_id.DS.$image->name);
    return $image->delete();
  }

  public static function find_by_brand_id($brand_id) {
    return self::find([
      'conditions' => "brand_id = ?",
      'bind' => [(int)$brand_id],
      'order' => 'sort'
    ]);
  }

  public static function update_sort_by_id($brand_id,$sort_order=[]) {
    $images = self::find_by_brand_id($brand_id);
    $i = 0;
    foreach($images as $image) {
      $val = 'img_'.$image->id;
      $sort = (in_array($val,$sort_order))? array_search($val,$sort_order) : $i;
      $image->sort = $sort;
      $image->save();
      $i++;
    }
  }
}
