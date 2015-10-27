<?php
class Chars{
	public function __construct($str){
		$this->str = $str;
		$this->length = strlen($str);
		$this->pos = 0;
	}
	public function run(){
		while($this->pos++ < $this->length){
			$char = $this->str{$this->pos - 1};
		}
	}
}
$content = file_get_contents("page.html");
$start = microtime(true);
$instance = new Chars($content);
$instance->run();
$end = microtime(true);
echo ($end - $start) . "\n";