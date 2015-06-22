<?php

$field = $_GET['field'];

$value = $_GET['value'];

if ( $field == 'name' ) {

	if ( strlen( $value ) < 4 ) {

		echo '<i class="form-warning">Must be 3+ letters</i>';

	} else {

		echo '<i class="fa fa-check form-success"></i>';

	}

}


if ( $field == 'email' ) {

	if ( !preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $value) ) {

		echo '<i class="form-warning">Invalid email</i>';

	} else {

		echo '<i class="fa fa-check form-success"></i>';

	}

}


if ( $field == 'message' ) {

	if ( '' == $value ) {

		echo '<i class="form-warning">Must contain a message</i>';

	} else {

		echo '<i class="fa fa-check form-success"></i>';

	}

}

?>