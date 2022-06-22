const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('containerLogin');

if (signUpButton) {
	signUpButton.addEventListener('click', function () {
		container.classList.add("right-panel-active");
	});
}

if (signInButton) {
	signInButton.addEventListener('click', function () {
		container.classList.remove("right-panel-active");
	});
}