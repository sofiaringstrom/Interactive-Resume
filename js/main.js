$(document).ready(function() {

	for ( var i = 1; i < 5; i++ ) {

		projectMouseover(i);

	}


	$('#btn-show-contact-form').click( function() {
		
		showContactForm();

	});


	$('#contact-name').focusout( function() {

		var contactNameVal = $('#contact-name').val();
		validateContactForm('name', contactNameVal);

	});


	$('#contact-email').focusout( function() {

		var contactEmailVal = $('#contact-email').val();
		validateContactForm('email', contactEmailVal);

	});

	$('#contact-message').focusout( function() {

		var contactMessageVal = $('#contact-message').val();
		validateContactForm('message', contactMessageVal);

	});

	
	if ( $(window).width() <= 768 ) {

		$('#backup-validation').css('display', 'block');

		$('#primary-validation').css('display', 'none');

		$('#contact-backup-validation').focusout( function() {

			var userValidation = $('#contact-backup-validation').val();

			window.validatedUser = validateUserBackup(userValidation);

		});

	} else {

		$('#user-validation-circle').one('mouseover', function() {

			window.validatedUser = validateUser();

		});

	}

	$('#contact-validation').focusout( function() {

		$('#contact-validation').val(10);

		var userValidation = $('#contact-validation').val();

	});



	$('#btn-send-contact-form').click( function(event) {

		event.preventDefault();

		checkContactForm(window.validatedUser);

	});

});

