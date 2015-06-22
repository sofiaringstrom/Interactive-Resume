<?php

if ( !defined('DB_HOST') ) {

	define('DB_HOST', 'localhost');
	define('DB_USER', 'root');
	define('DB_PASSWORD', 'password');
	define('DB_NAME', 'interactive_resume');

}


//Connect to database
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

mysqli_set_charset($mysqli, 'utf8');

if ( $mysqli->connect_errno ) {

	echo 'Could not connect to database.<br />' . $mysqli->connect_error;

	$mysqli->close();

	exit();

} 


?>