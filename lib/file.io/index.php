<?php
$file = 'page.html';
$start = microtime(true);
$content = file_get_contents($file);
echo strlen($content). "\n";
$end = microtime(true);
echo ($end - $start) . "\n";
