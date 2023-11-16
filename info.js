function validatePassword() {
  var flag = 0;
  var bool = false;
  var password = document.getElementById("Password").value;

  // start with alphabet
  // include one digit
  // one uppercase
  // passwords must match

  // minimum 6 characters
  if (password.length >= 6) {
    flag = 1;
    var startAlphabet = /^[a-zA-Z]/g;
    if (password.match(startAlphabet)) {
      flag = 2;
      var lowerCaseLetters = /[a-z]/g;
      if (password.match(lowerCaseLetters)) {
        flag = 3;
        var upperCaseLetters = /[A-Z]/g;
        if (password.match(upperCaseLetters)) {
          flag = 4;
          var numbers = /[0-9]/g;
          if (password.match(numbers)) {
            flag = 5;
          }
        }
      }
    }
  }

  switch (flag) {
    case 1:
      document.getElementById("errorElement").innerHTML =
        "Include at least one Uppercase letter, one lowercase letter, and one digit.";
      document.getElementById("submit").disabled = true;
      document.getElementById("Password").style.border = "2px solid red";
      break;
    case 2:
      document.getElementById("errorElement").innerHTML =
        "Start with an alphabet, include at least one Uppercase letter and one digit.";
      document.getElementById("submit").disabled = true;
      document.getElementById("Password").style.border = "2px solid red";
      break;
    case 3:
      document.getElementById("errorElement").innerHTML =
        "Include at least one Uppercase letter and one digit.";
      document.getElementById("submit").disabled = true;
      document.getElementById("Password").style.border = "2px solid red";
      break;
    case 4:
      document.getElementById("errorElement").innerHTML = "Include one digit.";
      document.getElementById("submit").disabled = true;
      document.getElementById("Password").style.border = "2px solid red";
      break;
    case 5:
      document.getElementById("errorElement").innerHTML = "";
      document.getElementById("submit").disabled = false;
      document.getElementById("Password").style.border = "1px solid black";
      bool = true;
      break;
    default:
      document.getElementById("errorElement").innerHTML =
        "Include 8 to 16 characters long. Include at least one Uppercase letter, one lowercase letter, and one digit.";
      document.getElementById("submit").disabled = true;
      document.getElementById("Password").style.border = "2px solid red";
  }

  return bool;
}

function validateFirstName() {
  var firstName = document.getElementById("FirstName").value;
  var validFirstName = /^[A-Z]+[a-zA-Z]+$/g;
 //appendchild
  let node = document.createElement("p");

  if (!firstName.match(validFirstName)) {
    document.getElementById("errorElement").innerHTML =
      "Start with capital letter and include only alphabets";

      // let textnode = document.createTextNode( "Start with capital letter and include only alphabets");
      // node.appendChild(textnode);
      // document.getElementById("errorPanel").appendChild(node);

    document.getElementById("submit").disabled = true;
    document.getElementById("FirstName").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("errorElement").innerHTML = "";
    document.getElementById("submit").disabled = false;
    document.getElementById("FirstName").style.border = "1px solid black";
    return true;
  }
  //console.log(firstName);
}

function validateLastName() {
  var lastName = document.getElementById("LastName").value;
  var validLastName = /^[A-Z]+[a-zA-Z]+$/g;
  if (!lastName.match(validLastName)) {
    document.getElementById("errorElement").innerHTML =
      "Start with capital letter and include only alphabets";
    document.getElementById("submit").disabled = true;
    document.getElementById("LastName").style.border = "2px solid red";
    return false;
} else {
    document.getElementById("errorElement").innerHTML = "";
    document.getElementById("submit").disabled = false;
    document.getElementById("LastName").style.border = "1px solid black";
    return true;
}
  //console.log(lastName);
}

function validateUserName() {
  var userName = document.getElementById("UserName").value;
  var validUserName = /^[a-zA-Z].*/g; //   /^[a-zA-Z][a-zA-Z\s\-]*$/g;
  if (userName.length < 6 || !(userName.match(validUserName))) {
  //console.log("Inside if - error..!");

    document.getElementById("errorElement").innerHTML =
      "Start with an alphabet and include at least 6 characters";
    document.getElementById("submit").disabled = true;
    document.getElementById("UserName").style.border = "2px solid red";
    return false;
} else {
    //console.log("Inside else - working..!");

    document.getElementById("errorElement").innerHTML =
      "";
    document.getElementById("submit").disabled = false;
    document.getElementById("UserName").style.border = "1px solid black";
    return true;
  }
}

function checkPasswordMatch(){
  var password = document.getElementById("Password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var isMatch = password===confirmPassword; 
  if(!isMatch) {
    document.getElementById("errorElement").innerHTML =
      "Password doesn't match";
    document.getElementById("submit").disabled = true;
    document.getElementById("confirmPassword").style.border = "2px solid red";
    return false;
  } else{
    document.getElementById("errorElement").innerHTML =
      "";
    document.getElementById("submit").disabled = false;
    document.getElementById("confirmPassword").style.border = "1px solid black";
    return true;
  }
}


// Check functions - no validation but checking if user entered any input at all
function checkRadio() {
    var radios = document.getElementsByTagName('input');
    console.log("In radio check" + radios);
    
    var value = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;       
        }
    }
    if(value == 0){
        document.getElementById("errorElement").innerHTML = "Check one type of education status";
        return false;
    }
    else{
        document.getElementById("errorElement").innerHTML = "";
        return true;
    }
}


function checkEmail() {
    var emailEntered = document.getElementById("e-mail").value;
    if(emailEntered == "")  {
    document.getElementById("errorElement").innerHTML = "Please enter an e-mail address";
        return false;
    }
    else    {
        document.getElementById("errorElement").innerHTML = "";
        return true;
    }
}


function validateAge() {
    //var age = document.getElementById('Age').value;
    var age = document.querySelector('Age').value;
    if(age < 18 || age > 60){ // 
        document.getElementById("errorElement").innerHTML =
      "Enter an age between 18 and 60";
    document.getElementById("submit").disabled = true;
    document.getElementById("confirmPasswordError").style.border = "2px solid red";
        return false;
    }

    else {
        document.getElementById("errorElement").innerHTML =
      "";
    document.getElementById("submit").disabled = false;
    document.getElementById("confirmPasswordError").style.border = "1px solid black";
        return true;
    }
}


function validate() {
  //console.log("In validate");
  //event.preventDefault
  //checkRadio();
  let isValidForm = validateFirstName() && validateLastName() && validatePassword() && checkPasswordMatch() && 
  validateUserName() && checkRadio() && checkEmail() && validateAge();
  console.log(isValidForm);
    if(isValidForm)
    {
        //event.preventDefault();
        alert("Success");
        return true;
    }

  return false;
}
