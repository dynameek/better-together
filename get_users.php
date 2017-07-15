<!DOCTYPE html>
	<head>
		<title>Students</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
	</head>
	<body>
		<style>
			table:first-child{
				font-weight: bold;
			}
			table:nth-child(odd){
				background: #777;
			}
		</style>
		<!-- Code to get users -->
		<?php
			#
			include_once('../credentials.php');
			#
			$db_handle = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
			#
			if(!$db_handle){
				$returnValue = false;
			}else{
				$sql = "SELECT * FROM students";
				$query = mysqli_query($db_handle, $sql);
				if(!$query){
					$returnValue = false;
				}else{
					$num_rows = mysqli_num_rows($query);
					echo "<table><tr><td>Student Name</td><td>Student level</td><td> Student Course</td><td>Student Phone number</td></tr>";
					for($i = 0; $i < $num_rows; $i++){
						$records[$i] = mysqli_fetch_assoc($query);
						echo "<tr>"; 
						echo "<td>".$records[$i]['student_firstname']." ".$records[$i]['student_lastname']."</td><td> ".$records[$i]['student_level']." </td><td>".$records[$i]['student_course']."</td><td> ".$records[$i]['student_phone']."</td><br>";
						echo "</tr>";
						$returnValue = true;
					}
					echo "<table";
				}
			}
			#
			mysqli_close($db_handle);
		?>
	</body>