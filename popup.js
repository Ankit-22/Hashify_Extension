var getRandomNumber = () => {

	return Math.floor(Math.random() * 9000 + 1000);
}

document.addEventListener('DOMContentLoaded', () => {

	var generateHash = document.getElementById('generate_hash');
	generateHash.addEventListener('click', () => {

		var password = document.getElementById('password_input');
		var salt = document.getElementById('salt_input');

		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("hash_value").innerHTML = "<h5>"+xhttp.responseText+"</h5>";
			}
		};

		xhttp.open("POST", "https://ankit22.000webhostapp.com/", true);
		xhttp.send("{\"password\": \"" +password.value+ "\", \"salt\": \""+salt.value+"\"}");

	}, false);

	var getSalt = document.getElementById('get_salt');
	getSalt.addEventListener('click', () => {

		var saltInput = document.getElementById('salt_input');
		saltInput.value = getRandomNumber();

	}, false)

}, false);
