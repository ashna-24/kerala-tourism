let username = document.getElementById("user").value;
let email = document.getElementById("email").value;
let phonno = document.getElementById("phno").value;
let password = document.getElementById("password").value;
let cfmpwd = document.getElementById("cfmpwd").value;
let error = document.getElementById("error").value;

function signup()
{
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}















