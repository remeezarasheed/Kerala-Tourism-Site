
form.addEventListener('submit', e => {
    if(!validateFn()){
      e.preventDefault();
    }
});




function validateFn()

{

let status = false;


const email = document.getElementById('email');
const password = document.getElementById('pass');



let regExpWeak1 = /[a-zA-Z]/;
let regExpMedium2 = /\d+/;
let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;




    if(email.value.trim() === '') {
     
        status = setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(email.value.trim())) {
        status = setErrorFor(email, 'Not a valid email');
     

    } 
    else {
        status = setSuccessFor(email," ");
    }





    if(password.value.trim() === '') {
        status = setErrorFor(password, 'Password cannot be blank');
            
    }
     else if(password.value.trim().length >= 10 && password.value.match(regExpWeak1) && password.value.match(regExpMedium2) && password.value.match(regExpStrong3)){
        status = setSuccessFor(password," ");
    }
    else{
        status = setErrorFor(password," Password not valid ");
            
    }



    return status;
}





    
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-check error';
      small.innerText = message;
      return false;
    }
    
    function setSuccessFor(input,message) {
      const formControl = input.parentElement;
      
      const small = formControl.querySelector('small');
      formControl.className = 'form-check success';
    
      small.innerText = message;
      return true;
      // iconControl.className = 'icon ok';
      
    }


    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    