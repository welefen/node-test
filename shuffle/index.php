<?php
$arr = array();
ini_set("memory_limit", "4024M");
for($i=0;$i<10000000;$i++){
  $arr[] = $i;
}
$start = microtime(true);
$arr = shuffle($arr);
$end = microtime(true);
echo (($end - $start) * 1000) . "\n";