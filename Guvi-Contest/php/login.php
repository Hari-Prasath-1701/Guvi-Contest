<?php
$connection = mysqli_connect("localhost", "root", "root"); 
 mysqli_select_db($connection,'test');
$email=$_POST['email1']; 
$password= $_POST['password1']; 

	$s="SELECT * FROM cbeian WHERE Mail='$email' AND pin='$password'";
$result = mysqli_query($connection,$s);
$data = mysqli_num_rows($result);
if($data==1){
echo "Successfully Logged in...";

}else{
echo "Email or Password is wrong...!!!!";
}

mysqli_close ($connection);
?>


