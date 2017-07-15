<?php
	/*
	 *
	*/
	$db_name = "bootcamp";
	$db_handle = mysqli_connect("onathan.5gbfree.com", "nate", "nathaneil.1995");
	if(!$db_handle){
		echo "Could not connect.";
	}else{
		#create datbase
		$sql = "CREATE DATABASE IF NOT EXISTS ".$db_name;
		$query = mysqli_query($db_handle, $sql);
		if(!$query){
			echo "Could not create database.";
		}else{
			#select db
			mysqli_select_db($db_handle, $db_name);
			
			$sql = "CREATE TABLE IF NOT EXISTS students(
				student_id VARCHAR(50) NOT NULL UNIQUE,
				student_firstname VARCHAR(100) NOT NULL,
				student_lastname VARCHAR(100) NOT NULL,
				student_level TINYINT(3) NOT NULL,
				student_course VARCHAR(5) NOT NULL,
				student_phone BIGINT(12) NOT NULL UNIQUE,
				PRIMARY KEY(student_id)
			)";
			$query = mysqli_query($db_handle, $sql);
			if(!$query){
				echo  "Could not create students table.";
			}else{
				echo "Database created.";
			}
		}
	}
	
	mysqli_close($db_handle);
?>