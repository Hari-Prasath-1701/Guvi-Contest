
<?php
$connection = mysqli_connect("localhost", "root", ""); 
 mysqli_select_db($connection,'client');

$name2=$_POST['name1'];
$email2=$_POST['email1'];
$password2=$_POST['password1'];

$s="insert into customer(username, pin, Mail) values ('$name2',  '$password2','$email2')";
$result =  mysqli_query($connection,$s);
echo "Form Submitted Succesfully";
mysqli_close($connection); 
?>
