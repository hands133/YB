<?php
/**
 * Created by PhpStorm.
 * User: 23670
 * Date: 2019/5/19
 * Time: 14:12
 */

require "connect_to_mysql.php";

$sql_P = "select *  from transactedhistory natrual join secondhandbook by bookId";
$result1 = $conn->query($sql_L);
$result2 = $conn->query($sql_P);
$answer = array();

if ($result1->num_rows > 0){  
    while ($row = $result1->fetch_assoc()){
        array_push($answer, $row);
    }
}
if ($result2->num_rows > 0){  
    while ($row = $result2->fetch_assoc()){
        array_push($answer, $row);
    }
}
else {
    $answer = array('state'=>false);
}
$answer_json = json_encode($answer);
echo ($answer_json);