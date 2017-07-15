<?php
	$db_handle = mysqli_connect("onathan.5gbfree.com", "nate", "nathaneil.1995", "bootcamp");
	if(!$db_handle){
		$returnValue = false;
	}else{
		$sql = "SELECT * FROM students";
		$query = mysqli_query($db_handle, $sql);
		if(!$query){
			$returnValue = false;
		}else{
			$num_rows = mysqli_num_rows($query);
			for($i = 0; $i < $num_rows; $i++){
			    $records[$i] = mysqli_fetch_assoc($query);
				echo $records[$i]['student_firstname']." ".$records[$i]['student_lastname']." ".$records[$i]['student_level']." ".$records[$i]['student_course']." ".$records[$i]['student_phone']."<br>";
				$returnValue = true;
			}
		}
	}
	echo $returnValue;
	mysqli_close($db_handle);
?>