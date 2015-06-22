function projectMouseover(i) {

	var projectInfo = $('.project-info-' + i);

	var projectInfoImg = $('.project-img-' + i);

	var projectInfoText = $('.project-text-' + i);

	var projectInfoTextHr = $('.project-hr-' + i);

	projectInfo.mouseenter(function() {
		
		TweenMax.to( projectInfo, 0.5,
			{
				opacity: 1
			}
		);

	});

	projectInfo.mouseleave(function() {

		TweenMax.to( projectInfo, 0.5,
			{
				opacity: 0
			}
		);

	});

}


function showContactForm() {

	$('section#contact').animate({
		height: '+=480px'
	});

	$("html, body").animate({ scrollTop: $(document).height() }, 1000);


	TweenMax.fromTo( $('#btn-show-contact-form'), 0.5,
		{
			opacity: 1,
			top: 0
		},
		{
			opacity: 0,
			top: '480px'
		}
	),
	TweenMax.fromTo( $('#btn-send-contact-form'), 0.5,
		{
			opacity: 0,
			top: 0
		},
		{
			opacity: 1,
			display: 'block',
			top: '480px'
		}
	),
	$('#contact-form').delay( 800 ).fadeIn();

}


function hideContactForm() {

	$('#contact-form').fadeOut();

	TweenMax.fromTo( $('#btn-show-contact-form'), 0.5,
		{
			opacity: 0,
			top: '480px'
		},
		{
			opacity: 1,
			top: 0
		}
	),
	TweenMax.fromTo( $('#btn-send-contact-form'), 0.5,
		{
			top: '480px',
			display: 'block'
		},
		{
			top: 0,
			display: 'none'
		}
	);

	$('section#contact').delay( 700 ).animate({
		height: '-=480px'
	});

}



//Ajax code to validate form
function validateContactForm(field, value) {

	var xmlhttp;

	
	if ( window.XMLHttpRequest ) {

		//for IE7+, Firefox, Chrome, Opera, Safari

		xmlhttp = new XMLHttpRequest();

	} else {

		//for IE6, IE5

		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');

	}


	xmlhttp.onreadystatechange = function() {

		if ( xmlhttp.readyState != 4 && xmlhttp.status == 200 ) {

			$('#contact-' + field + '-info').empty();

			$('#contact-' + field + '-info').append('Validating..');

		} else if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {

			$('#contact-' + field + '-info').empty();

			$('#contact-' + field + '-info').append(xmlhttp.responseText);

		}

	}



	xmlhttp.open('GET', window.location.href + '/db/actions/form_validation.php?field=' + field + '&value=' + value, true);

	xmlhttp.send();

}


function checkContactForm(validatedUser) {

	var name = $('#contact-name').val();

	var email = $('#contact-email').val();

	var message = $('#contact-message').val();


	if ( name == '' || email == '' || message == '' ) {

		$('.form-error-msg').empty();

		$('.form-error-msg').append('Please fill all fields');

	} else {

		var validatedName = $('#contact-name-info').val();

		var validatedEmail = $('#contact-email-info').val();

		var validatedMessage = $('#contact-message-info').val();

		if ( validatedName == 'Must be 3+ letters' || validatedEmail == 'Invalid email' || validatedMessage == 'Must contain a message' ) {

			$('.form-error-msg').empty();

			$('.form-error-msg').append('Please fill valid information');

		} else if ( !validatedUser ) {

			$('.form-error-msg').empty();

			$('.form-error-msg').append("Please prove you're not a robot!");

		} else {

			sendContactForm();

			hideContactForm();

		}

	}

}

function validateUser() {

	var circle = new ProgressBar.Circle('#progress-container',
		{
			strokeWidth: 5,
			duration: 1500,
    		easing: 'easeInOut',

    		// Set default step function for all animate calls
		    step: function(state, circle) {
		        circle.path.setAttribute('stroke', state.color);
		    }
		}
	);

	var innerCircle = $('#user-validation-circle');

	circle.animate(1, {

		from: {color: '#FC5B3F'},
	    to: {color: '#6FD57F'},

	}, function() {

		TweenMax.fromTo(innerCircle, 1, 
			{
				width: '30px',
				height: '30px',
				background: '#ED4035',
				opacity: 1
			},
			{
				width: '100px',
				height: '100px',
				marginTop: '0px',
				opacity: 0,
				display: 'none',
				background: '#6FD57F'
			}
		);

	});

	return true;

}

function validateUserBackup(userValidation) {

	var number = userValidation;

	var err;

	try {

		if ( '' == number ) {

			throw 'Please type a number';

		}

		number = Number(number);

		if ( number <= 5 ) {

			throw 'Please type a higher number';

		}

		if ( number >= 10 ) {

			throw 'Please type a lower number';

		}

		if ( number < 10 && number > 5 ) {

			$('#contact-backup-validation-info').empty();

			$('#contact-backup-validation-info').append('<i class="fa fa-check form-success"></i>');

			return true;

		}

	} catch( err ) {

		$('#contact-backup-validation-info').empty();

		$('#contact-backup-validation-info').append('<i class="form-warning">' + err + '</i>');

		return false;

	}

}


function sendContactForm() {

	var name = $('#contact-name').val();

	var email = $('#contact-email').val();

	var message = $('#contact-message').val();


	var formData = '?contact-name=' + name + '&contact-email=' + email + '&contact-message=' + message;

	var formAction = window.location.href + '/db/actions/send_contact_form.php';

	$.ajax(
		{
			url: formAction,
			type: 'POST',
			data: formData,
			success: function(data, textStatus, jqXHR)
			{
				$('#contact-form-confirmation').append('Your message has been sent.');
			},
			error: function(jqXHR, textStatus, errorThrown)
			{
				$('#contact-form-confirmation').append('Unable to send your message :(');
			}
		}
	);

}