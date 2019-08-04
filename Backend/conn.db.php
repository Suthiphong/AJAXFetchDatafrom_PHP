<?php
$db = "mysql:dbname=projectdata;host=localhost";
$username = "root";
$password = "123456";

try {
   $conn = new PDO($db, $username, $password);
   if($conn){
//       echo "Connected to the Database.";
   }
} catch (PDOException $e) {
    echo $e->getMessage();
    //throw $th;
}

?>