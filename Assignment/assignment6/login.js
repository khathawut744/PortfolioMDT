window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const Username = urlParams.get('username');
	const Password = urlParams.get('password1');

	var UserInput = document.forms["myLogin"]["username"];
	var PassInput = document.forms["myLogin"]["password"];

	console.log(Username);
	console.log(Password);

	if (UserInput.value != Username) 
	{
		alert ("Wrong Username");
		return false;
	}
	if (PassInput.value != Password)
	{
		alert ("Wrong Password");
		return false;
	}
	if (UserInput.value == Username && PassInput.value == Password) {
		alert ("Login Success");
	}
}

			