<?php

class A{
  public $name = 'A';
  public function init(){
    return $this->name;
  }
}
class B extends A{
  public $name = 'B';
  public function init(){
    $str = parent::init();
    return $str . $this->name;
  }
}

class C extends B{
  public $name = 'C';
  public function init(){
    $str = parent::init();
    return $str . $this->name;
  }
}
class D extends C{
  public $name = 'D';
  public function init(){
    $str = parent::init();
    return $str . $this->name;
  }
}

$instance = new D();
$str = $instance->init();
echo $str . "\n";