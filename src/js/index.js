/* Here goes your JS code */
const popupBtn = document.getElementById("show-popup-form");
const popupForm = document.getElementsByClassName("popup")[0];
const closeBtn = document.getElementById("closebtn");


popupBtn.addEventListener("click", showLoginForm);
closeBtn.addEventListener("click", closeLoginForm);


function showLoginForm()
{
    popupBtn.style.display = "none";
    popupForm.style.display = "flex";
}

function closeLoginForm()
{
    popupBtn.style.display = "inline-block";
    popupForm.style.display = "none";
}

//email & password validation 
var submitBtn = document.getElementById("submit");

var isEmailValid = false;
var isPasswordValid = false;

var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // taken from https://www.youtube.com/watch?v=HzJngc-Se9Q

function validateEmail()
{
    
    var email = document.getElementById("email").value;
    var emailMessage = document.getElementById("email_message");

    //email
    if(email.match(emailPattern))
    {
        emailMessage.innerHTML = "";
        isEmailValid = true;
    } else{
        emailMessage.innerHTML = "Email invalid!";
        isEmailValid = false;
    }
    checkFormSubmission();
}

function validatePassword()
{
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/; //taken from https://stackoverflow.com/questions/27976446/html-password-regular-expression-validation

    var password = document.getElementById("password").value;
    var passwordMessage = document.getElementById("password_message");

    if(password.match(passwordPattern))
    {
        passwordMessage.innerHTML = "";
        isPasswordValid = true;
        
    } else
    {
        passwordMessage.innerHTML = "Password invalid!</br>";
        isPasswordValid = false;
    }
    checkFormSubmission();
}

function checkFormSubmission()
{
    if(isEmailValid && isPasswordValid)
    {
        submitBtn.removeAttribute("disabled");
    } else
    {
        submitBtn.setAttribute("disabled", "disabled");
    }
}

function submitBehaviour()
{
    setTimeout(function() {
        popupForm.style.display='none';        
        document.getElementById("successMessage").style.display="inline-block";
    }, 3000);
}