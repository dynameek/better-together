<?php
	/*
	 *
	 *
	*/
	$first_name = htmlspecialchars($_POST['fname']);
	$last_name = htmlspecialchars($_POST['lname']);
	$level = htmlspecialchars($_POST['level']);
	$course = htmlspecialchars($_POST['course']);
	$phone_number = htmlspecialchars($_POST['phone']);
	#
	$file_name = "./students.txt";
	/*
	 *	open file and write contents to it
	*/
	
	$db_host = "onathan.5gbfree.com";
	$db_user = "nate";
	$db_pass = "nathaneil.1995";
	$db_name = "bootcamp";
	
	$db_handle = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
	if(!$db_handle){
		$returnValue = false;
	}else{
		$sql = "INSERT INTO students VALUES('".md5($phone_number)."','".$first_name."', '".$last_name."', ".$level.", '".$course."',".$phone_number.")";
		$query = mysqli_query($db_handle, $sql);
		if(!$query){
			$returnValue = false;
		}else{
			$returnValue = true;
		}
	}
	#close db
	mysqli_close($db_handle);
	echo $returnValue;
?>