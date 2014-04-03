<?php
function chars($content){
	$length = strlen($content);
	$pos = 0;
	while ($pos ++ < $length) {
		$char = $content{$pos - 1};
	}
}
$content = file_get_contents("page.html");
$start = microtime(true);
chars($content);
$end = microtime(true);
echo ($end - $start) . "\n";