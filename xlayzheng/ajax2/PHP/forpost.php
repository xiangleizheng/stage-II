<?php
  $name = $_POST["name"];
  $pwd = $_POST["pwd"];
  $sex = $_POST["sex"];

  if($name==="陆红提"&&$pwd==="1307250127"){
  	 $okk = $_POST["judge"];
  	 echo $name." ".$pwd." ".$sex." ".$okk;
  }
  
  
?>