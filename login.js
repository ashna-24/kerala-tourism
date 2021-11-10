let username=document.getElementById("username");
let password=document.getElementById("pwd");

function validate()
{
    if(username.value=="")
    {
        alert("Username cannot be empty");
        return false;
    }
    else if(pwd.value=="")
    {
        alert("Password cannot be empty");
        return false;
    }
    else if(pwd.value.length=8)
    {
        alert("Password is not entered");
        pwd.style.border="2px solid red";
        return false;
    }
    else {
        return true;
        
    }
}