<?php 
if(isset($_POST['submit'])){
    $to = "info@jwadvisors.com.au"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $enquiry= $_POST['enquiry'];
    $first_name = $_POST['firstName'];
    $last_name = $_POST['lastName'];
    $phone = $_POST['phone'];
    $contact_method = $_POST['contactMethod'];
    $subject = "You have a message regarding ".$enquiry." from ".$first_name." ".$last_name;
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . "\n\n". $phone . "\n\n". $from . "\n\n". "Preferred contact: ". $contact_method  . "\n\n". " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
