<?php
 namespace Core;

 class PageHelpers {

   public static function img_root($img_url) {
     if(preg_match('/..\//', $img_url) == 1) {
       $stripped_url = ltrim($img_url,'.');
       $returned_url = ltrim($stripped_url,'/');
       return SROOT.$returned_url;
     }
     return SROOT.$img_url
   }

 }
