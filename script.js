let inputOk = [false, false, false, false, false, false];  

const formInputChange = (input) => {}
   if(input.id === "firstNameInput" || input.id === "lastNameInput"){ /*  || input.id === "adressInput")*/
       if(input.value.length >=1 && input.value.length <=15){
         input.classList .add("is-valid");
         input.classList .remove("is-invalid");
      if(input.id === "firstNameInput")
      {
        inputOk[0] = true;
      }
      else
      {
        inputOk[1] = true;
      }
     } else
     {
        input.classList .add("is-invalid");
        input.classList .remove("is-valid");
        document.getElementById("firstNameInvalidFeedback").innerText = 
        "First Name needs to be between 2 and 15 characters";
      }
    if(input.value.length >=1 && input.value.length <=15){
      if (input.value[0] === input.value[0].toUpperCase()) {
        input.classList .add("is-valid");
        input.classList .remove("is-invalid");
        if(input.id === "firstNameInput")
      {
        inputOk[0] = true;
      }
      else if
      {
        inputOk[1] = true;
      }
    } else
     {
       input.classList .add("is-invalid");
       input.classList .remove("is-valid");
       document.getElementById("firstNameInvalidFeedback").innerText = 
       "First Character needs to be uppercase"
     
    /* if(input.value.length >=1 && input.value.length <=50)
    {
      input.classList .add("is-valid");
      input.classList .remove("is-invalid");
      if(input.id === "firstNameInput")
      {
        inputOk[0] = true;
      }
      else if
      {
        inputOk[1] = true;
      }
      else
      {
        inputOk[2] = true;
      }
    } else
    {
      input.classList .add("is-invalid");
        input.classList .remove("is-valid");*/
    }
  }
}
  if(input.id === "emailInput"){
     if(validator.isEmail(input.value) === true) {
        input.classList .add("is-valid");
        input.classList .remove("is-invalid");
        inputOk[2] = true; 
     }
     else{
        input.classList .add("is-invalid");
        input.classList .remove("is-valid"); 
     }
  }
  if(input.id === "passwordInput"){
    if(validator.isStrongPassword(input.value)=== true)
    {
    input.classList .add("is-valid");
    input.classList .remove("is-invalid");
    inputOk[3] = true;
    }
    else
    {
        input.classList .add("is-invalid");
        input.classList .remove("is-valid");
    }
  }
  if(input.id === "checkInput") {
    if(input.checked === true){
    inputOk[4] = true;
    } else {
    }
  }
  
if(inputOk[0] === true && inputOk[1] === true && inputOk[2] === true && inputOk[3] === true && inputOk[4] === true);
{
  document.querySelector("#submitButton").disabled = false;
}
};





