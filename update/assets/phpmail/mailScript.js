$(document).ready(function(){
    $('#contactForm buttom').on('click',function(e){
        e.preventDefault();
        alert();
    })

});

//var contactForm = function() {
//	if ($('#contactForm').length > 0 ) {
//        
			/* submit via ajax */
//			submitHandler: function(form) {		
//				var $submit = $('.submitting'),
//					waitText = 'Submitting...';
//
//				$.ajax({   	
//			      type: "POST",
//			      url: "mail.php",
//			      data: $(form).serialize(),
//
//			      beforeSend: function() { 
//			      	$submit.css('display', 'block').text(waitText);
//			      },
//			      success: function(msg) {
//	               if (msg == 'OK') {
//	               	$('#form-message-warning').hide();
//			            setTimeout(function(){
//	               		$('#contactForm').fadeOut();
//	               	}, 1000);
//			            setTimeout(function(){
//			               $('#form-message-success').fadeIn();   
//	               	}, 1400);
//		               
//		            } else {
//		               $('#form-message-warning').html(msg);
//			            $('#form-message-warning').fadeIn();
//			            $submit.css('display', 'none');
//		            }
//			      },
//			      error: function() {
//			      	$('#form-message-warning').html("Something went wrong. Please try again.");
//			         $('#form-message-warning').fadeIn();
//			         $submit.css('display', 'none');
//			      }
//		      });    		
//	  		}
        
//		$( "#contactForm" ).validate( {
//			rules: {
//				name: "required",
//				email: {
//					required: true,
//					email: true
//				},
//				message: {
//					required: true,
//					minlength: 5
//				}
//			},
//			messages: {
//				name: "Please enter your name",
//				email: "Please enter a valid email address",
//				message: "Please enter a message"
//			},
//			errorElement: 'span',
//			errorLabelContainer: '.form-error',
//			
//		} );
//	}
//};