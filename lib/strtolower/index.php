<?php
$content = file_get_contents('page.html');
$start = microtime(true);
$content = strtolower($content);
$end = microtime(true);
echo ($end - $start) * 1000;