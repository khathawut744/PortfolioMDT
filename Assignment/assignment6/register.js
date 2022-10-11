window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm")
    form.onsubmit = validateForm;
}

function validateForm() {

    var FirstName = document.forms["myForm"]["firstname"];
    var Lastname = document.forms["myForm"]["lastname"];
    var Gender = document.forms["myForm"]["gender"];
    var Birtday = document.forms["myForm"]["bday"];
    var Email = document.forms["myForm"]["email"];
    var Username = document.forms["myForm"]["username"];
    var Password1 = document.forms["myForm"]["password1"];
    var Password2 = document.forms["myForm"]["password2"];

    if (FirstName.value == "")
        return false;
    else if(Lastname.value == "")
    {
        alert(" Please enter Lastname ")
        return false
    }
    else if (Gender.value == "") 
    {
        alert(" Please select Gender ")
        return false;
    }
    else if(Birtday.value == "")
    {
        alert(" Please Choose Birtday ")
        return false;
    }
    else if(Email.value == "")
    {
        alert(" Please enter email ")
        return false;
    }
    else if(Username.value == "")
        return false;
    else if(Password1.value == "")
        return false;
    else if(Password2.value == "")
        return false;
    if (Password1.value != Password2.value) {
        var errmsg = document.getElementById("errormsg");
        errmsg.innerHTML = "Password do not match"
        return false;   
    }

}