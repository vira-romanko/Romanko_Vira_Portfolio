<?php
// if (!empty($_POST)) {

//     echo 'oops...';
//     exit;
// }




$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'vira.romanko99@gmail.com';

//Some valicatons

if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
    $email = filter_var($email, FILTER_SANITIZE_STRING);
}

if(isset($_POST['subject'])){
   $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['message'])){
   $message = $_POST['message'];
 }

 $headers = [
    'Form' => 'noreply@test.ca',
    'Reply-To' =>$name. '<' .$email. '>'
 ];

 if(mail($recipient,$subject,$message,$headers)){
     echo'<p>Thank your for contacting me, '.$name.'.You will ge a reply whinin 24 hours</p>';

 }else{
     echo '<p>We are sorry but the email did not go throgh</p>';
 }

 
// var_dump($_POST['name']);
// var_dump($_GET);

?>