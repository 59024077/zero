<?php
include("connect.php");
include("function.php");

// print_r($conn);
$chk  = $_GET["en"];
if( $chk == "insert_em"){
  $em_user = $_POST["em_user"];
  $em_pass = $_POST["em_pass"];
  $em_id = $_POST["em_id"];
  $em_intro = $_POST["em_intro"];
  $em_fname = $_POST["em_fname"];
  $em_lname = $_POST["em_lname"];
  $em_nickname = $_POST["em_nickname"];
  $em_gp = $_POST["em_gp"];
  $em_depart = $_POST["em_depart"];
  $em_level = $_POST["em_level"];
  // $fileUpload = $_POST["fileUpload"];
  $em_dayoff = $_POST["em_dayoff"];
  add_em($em_user,$em_pass,$em_id,$em_intro,$em_fname,
  $em_lname,$em_nickname,$em_gp,$em_depart,$em_level,$em_dayoff,$conn);
}else if( $chk == "edit_em"){
  $em_user = $_POST["em_user"];
  $em_pass = $_POST["em_pass"];
  $em_id = $_POST["em_id"];
  $em_intro = $_POST["em_intro"];
  $em_fname = $_POST["em_fname"];
  $em_lname = $_POST["em_lname"];
  $em_nickname = $_POST["em_nickname"];
  $em_gp = $_POST["em_gp"];
  $em_depart = $_POST["em_depart"];
  $em_level = $_POST["em_level"];
  $em_dayoff = $_POST["em_dayoff"];
  update_em($em_user,$em_pass,$em_id,$em_intro,$em_fname,$em_lname,
$em_nickname,$em_gp,$em_depart,$em_level,$em_dayoff,$conn);
}else if($chk == "check_em"){
  $em_id = $_POST["em_id"];
  check_em($em_id,$conn);
}else if($chk == "show_em"){
  show_em($conn);
}

//FUNCTION Employee

function check_em($em_id,$conn){
  $data = num_rows("employee","WHERE `em_id` = '$em_id'",$conn);
  echo $data;
}

function add_em($em_user,$em_pass,$em_id,$em_intro,$em_fname,$em_lname,$em_nickname,$em_gp,$em_depart,$em_level,$em_dayoff,$conn){
    $data = insert("`em_id`, `em_intro`, `em_fn`, `em_ln`, `em_nickname`, `em_departID`, `em_level`, `em_gbjob`, `em_dayoff`, `em_username`, `em_password`", 
      "'$em_id', '$em_intro', '$em_fname', '$em_lname', '$em_nickname', '$em_depart', '$em_level', '$em_gp', '$em_dayoff', '$em_user', '$em_pass'","employee",$conn);
    if($data){
      echo 1;
    }else{
      echo 2;
    } 
}

function update_em($em_user,$em_pass,$em_id,$em_intro,$em_fname,$em_lname,$em_nickname,$em_gp,$em_depart,$em_level,$em_dayoff,$conn){
  $data = update("employee","`em_intro`='$em_intro',`em_fn`='$em_fname',`em_ln`='$em_lname',`em_nickname`='$em_nickname',
  `em_departID`='$em_depart',`em_level`='$em_level',`em_gbjob`='$em_gp',`em_dayoff`='$em_dayoff',`em_username`='$em_user',
  `em_password`='$em_pass'","WHERE `em_id` = '$em_id' ",$conn);
  if($data){
    echo 1;
  }else{
    echo 2;
  }
}

function show_em($conn){
  $data = selects("employee","",$conn);
  // return $data;
  if($data){
    echo json_encode($data);
  }else{
    echo 0;
  }
}