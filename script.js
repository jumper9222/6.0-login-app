function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUsername = usernameInput.value === 'user@email.com';
  const isCorrectPassword = passwordInput.value === 'password';
  
  if (isCorrectUsername && isCorrectPassword) {
    result.innerHTML = "Welcome user!"
  } else if (isCorrectUsername) {
    result.innerHTML = "Password wrong"
  } else {
    result.innerHTML = "Wrong username/password."
  }
}