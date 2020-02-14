
$(document).ready(function(){
$("#submit").click(function(){
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var phonenumber=$("contact").val();
var dataString = '&name1='+ name + '&email1='+ email + '&password1='+ password;
if(name==''||email==''||password==''||contact=='')
{
alert("Please Fill All Fields");
}
  var fnameRGEX=/^[A-Za-z]+$/;
  var fnResult = fnameRGEX.test(name);
  else if(fnResult== false)
  {
alert('Invalid UserName');
}
 var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
 var phoneResult = phoneRGEX.test(phonenumber);
else if(phoneResult==false)
{
	alert('Invalid Phno');
}
else
{
$.ajax({
type: "POST",
url: "G:/Guvi/Login/php/registration.php",
data: dataString,
cache: false,
success: function(result){
	alert('Successfully Registered..');
window.open("login.html")
}
});
}
return false;
});
});
