const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    if(!checkInputs()){
      e.preventDefault();
    }
});


let regExpWeak1 = /[a-zA-Z]/;
let regExpMedium2 = /\d+/;
let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
let regExpMobile = /^(\d{3})(\.|-)?(\d{3})(\.|-)?(\d{4})$/;

function checkInputs() {


	let status = false;


	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const numberValue = number.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') 
    {
		status =setErrorFor(username, 'Username cannot be blank');
        
	} 
    else 
    {
		status =setSuccessFor(username);
        
	}
	


	if(emailValue === '') 
    {
		status =setErrorFor(email, 'Email cannot be blank');
        
	} 
    else if (!isEmail(emailValue)) 
    {
		status =setErrorFor(email, 'Not a valid email');
        
	} 
    else 
    {
		status =setSuccessFor(email);
        
	}



	if(numberValue === '') 
    {
		status =setErrorFor(number, 'Phone Number cannot be blank');
        
	} 
    else if (numberValue.match(regExpMobile)) 
    {
        status = setSuccessFor(number);
    } 
    else 
    {
		status =setErrorFor(number,"Invalid-Number");
       
	}



	if(passwordValue === '') 
    {
		status =setErrorFor(password, 'Password cannot be blank');
        
	} 
    else if(passwordValue.length >= 10 && passwordValue.match(regExpWeak1) && passwordValue.match(regExpMedium2) && passwordValue.match(regExpStrong3)){
        setSuccessFor(password);
    }
    else 
    {
		status =setSuccessFor(password);
       
	}
	



	if(password2Value === '') 
    {
		status =setErrorFor(password2, 'Re-Type cannot be blank');
        
	} 
    else if(passwordValue !== password2Value) 
    {
		status =setErrorFor(password2, 'Passwords does not match');
        
	} else
    {
		status =setSuccessFor(password2);
        
	}
    return status;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
    return false;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
    return true;
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function trigger()

{
const indicator = document.querySelector(".indicator");
const s = document.getElementById("password")
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if(s.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(s.value.length <= 7 && (s.value.match(regExpWeak) || s.value.match(regExpMedium) || s.value.match(regExpStrong)))no=1;
    if(s.value.length >= 8 && ((s.value.match(regExpWeak) && s.value.match(regExpMedium)) || (s.value.match(regExpMedium) && s.value.match(regExpStrong)) || (s.value.match(regExpWeak) && s.value.match(regExpStrong))))no=2;
    if(s.value.length >= 10 && s.value.match(regExpWeak) && s.value.match(regExpMedium) && s.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Too Week!!! Your Password cannot be accepted";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Medium!!! Try including numbers and special charecters";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Strong!!! Good to go";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }

        
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
  }

}
