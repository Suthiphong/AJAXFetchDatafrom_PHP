<?php
 header("Application/json");
 require('../conn.db.php');

 $sql = "SELECT * FROM member";
 $result = $conn->query($sql);
 $Res = $result->fetchAll();
 //echo json_encode("successfully");

 echo json_encode($Res);
?>  