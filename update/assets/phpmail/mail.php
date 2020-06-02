<?php

// Replace this with your own email address
$to = 'md.a.k.shohag@gmail.com';


if($_POST) {

   $name = $_POST['name'];
   $email = $_POST['email'];
   $contact_message = $_POST['message'];
    $subject = "Contact Form Submission";

   // Set Message
   $message = '';
   $message .= "Email from: " . $name . "<br />";
   $message .= "Email address: " . $email . "<br />";
   $message .= "Message: <br />";
   $message .= nl2br($contact_message);

   // Email Headers
	$headers = "From: " . 'refure.eu' . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

   ini_set("sendmail_from", $to); // for windows server
   $mail = mail($to, $subject, $message, $headers);
	if ($mail) { echo "OK"; }
   else {
       echo "Something went wrong. Please try again."; 
   }
}

?>