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