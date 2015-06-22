<?php

//if ( isset( $_POST['contact-message'] ) ) {

	$email_to = 'sofia.ringstrom@live.se';

	$email_subject = 'sofiaringstrom.se Contact Form';


	$name = $_POST['contact-name'];

	$email = $_POST['contact-email'];

	$message = $_POST['contact-message'];


	$email_message = 'Contact Form details below.\n\n';


	function clean_string( $string ) {
 
    	$bad = array('content-type', 'bcc:', 'to:', 'cc:', 'href');

    	return str_replace( $bad, '', $string );
 
    }

    $email_message .= 'Name: ' . clean_string( $name ) . '\n';

    $email_message .= 'Email: ' . clean_string( $email ) . '\n';

    $email_message .= 'Message: ' . clean_string( $message ) . '\n';


    $headers = 'From: ' . $email . '\r\n' . 'Reply-To:' . $email . '\r\n' . 'X-Mailer: PHP/' . phpversion();

    if (mail($email_to, $email_subject, $email_message, $headers)) {

    	echo 'email sent';

    } else {

    	echo 'no email sent..';

    }



/*} else {

	echo 'Sorry bro.';

}*/

?>