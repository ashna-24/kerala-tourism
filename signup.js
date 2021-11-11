let email = document.getElementById("email");
let phonno = document.getElementById("phno");
let password = document.getElementById("password");
let cfmpwd = document.getElementById("cfmpwd");
let error = document.getElementById("error");

function signup()
{
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else if(password.value=="")
    {
        alert("Password cannot be empty");
        return false;
    }
    else if(password.value.length=8)
    {
        alert("Password is not entered");
        password.style.border="2px solid red";
        return false;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}















