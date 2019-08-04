<?php
header('Application/json');
$data = file_get_contents('./data.json');
$json = json_decode($data,true);

echo json_encode($json);

?>