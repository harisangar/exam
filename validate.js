function validating(){
  var email=document.frm.email.value;

if(email==""){
	alert("enter a email");
	email.focus();
	return false;
}

  if(!/^[a-zA-Z0-9]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(email)){
  	alert("invalid email");
  }
  else{
  	alert("valid email");
  }



}