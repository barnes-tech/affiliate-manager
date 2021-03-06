<?php

namespace Core;

//session parent class
class Session {

  public static function exists($name) {
    return (isset($_SESSION[$name])) ? true : false;
  }

  public static function get($name) {
    return $_SESSION[$name];
  }

  public static function set($name, $value) {
    return $_SESSION[$name] = $value;
  }

  public static function delete($name) {
    if(self::exists($name)){
      unset($_SESSION[$name]);
    }
  }

  public static function uagent_no_version() {
    $uagent_string = $_SERVER['HTTP_USER_AGENT'];
    $regx = '/\/[a-zA-Z0-9.]+/';
    $uagent = preg_replace($regx,'', $uagent_string);
    return $uagent;
  }
  /**
   * Adds a session alert message
   * @method add_msg
   * @param String $type can be info, success, warning or danger
   * @param String $message the message to display
   */
  public static function add_msg($type,$msg) {
    $session_name = 'alert-'.$type;
    self::set($session_name,$msg);
  }

  public static function session_msgs() {
    $alerts = ['alert-info','alert-success','alert-warning','alert-danger'];
    $html = '';
    foreach($alerts as $alert) {
      if(self::exists($alert)) {
        $html.='<div class="alert '.$alert.' alert-dissmissable" role="alert">';
        $html.='<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        $html.= self::get($alert);
        $html.= '</div>';
        self::delete($alert);
      }
    }
    return $html;
  }

}
