document.getElementById("Validate").addEventListener("click", Validate);

function Validate(){
  var pass1 = document.getElementById("Password1").value;
  var pass2 = document.getElementById("Password2").value;
  if(pass1.length < 8 || pass2.length < 8){
    document.getElementById("message").innerHTML = "Password must be at least 8 characters";
  }
  else if (pass1 != pass2) {
    document.getElementById("message").innerHTML = "Passwords don't match";
  }
  else{
    document.getElementById("message").innerHTML = "Success!";
  }
}
