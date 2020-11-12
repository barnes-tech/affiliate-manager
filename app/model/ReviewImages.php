<?php
  namespace App\Model;
  use Core\{Model,Tools};


  class ReviewImages extends Model {
    protected static $_table = 'review_images',$_archived = true;
    public $id, $name, $url, $sort, $review_id, $archived = 0;


    public static function upload_review_images($review_id,$uploads) {
      $last_img = self::find_first([
        'conditions' => "review_id = ?",
        'bind' => [$review_id],
        'order' => 'sort DESC'
      ]);
      $last_sort = (!$last_img)? 0 : $last_img->sort;
      $path = 'uploads'.DS.'review_images'.DS.'review_'.$review_id.DS;
      foreach($uploads->get_files() as $file) {
        $parts = explode('.',$file['name']);
        $ext = end($parts);
        $hash = sha1(time().$review_id.$file['tmp_name']);
        $upload_name = $hash.'.'.$ext;
        $image = new self();
        $image->url = 'uploads/review_images/review_'.$review_id.'/'.$upload_name;
        $image->name = $upload_name;
        $image->review_id = $review_id;
        $image->sort = $last_sort;
        if($image->save()) {
          $uploads->upload($path,$upload_name,$file['tmp_name']);
          $last_sort++;
        }
      }
    }


     public static function delete_images($review_id, $unlink = false) {
      $images = self::find([
        'conditions' => "product_id = ?",
        'bind' => [$product_id]
      ]);
      foreach($images as $image) {
        $image->delete();
        if($unlink) {
          $dir = 'uploads'.DS.'review_images'.DS.'review_'.$review_id;
          array_map('unlink', glob("$dir/*.*"));
          rmdir($dir);
        }
      }
    }

    public static function delete_id($image_id) {
      $image = self::find_id($image_id);
      $sort = $image->sort;
      $after_imgs = self::find([
        'conditions' => "product_id = ? AND sort > ?",
        'bind' => [$image->product_id, $sort]
      ]);
      foreach($after_imgs as $record) {
        $record->sort = $record->sort -1;
        $record->save();
      }
      unlink(ROOT.DS.'uploads'.DS.'product_images'.DS.'product_'.$image->product_id.DS.$image->name);
      return $image->delete();
    }

    public static function find_review_id($review_id) {
      return self::find([
        'conditions' => "review_id = ?",
        'bind' => [$review_id],
        'order' => 'sort'
      ]);
    }

    public static function update_sort_by_id($product_id,$sort_order=[]) {
      $images = self::find_by_product_id($product_id);
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
