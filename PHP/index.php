<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
</head>
<body>
<h1> This is a basic php contact form</h1>
<!-- action =who should get the packeage, method -how you want it to be delivered -->
<form action="data/contact.php" method="post">
   <h1> Let's get together</h1>
   <label  for="name-field"> Name</label>
   <input  id="name-field" name="name" type="text" placeholder="Name">

   <label for="email-field"> Email</label>
   <input id="email-field" name="email" type="email" placeholder="Email">

   <label for="subject-field"> Subject</label>
   <input id="subject-field" name="subject"type="text" placeholder="Subject">

   <label for="message-field"> Message</label>
   <textarea id="message-field" name="massage"></textarea>
 <button type="submit">Send</button>


</form>
</body>
</html>

