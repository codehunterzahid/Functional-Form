const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // ========== Error Message Function ==========
  function showError(input, message) {
    const parent = input.parentElement;
    parent.querySelector(".error-message").innerText = message;
    parent.querySelector(".error-message").style.display = "block";
    input.classList.add("is-invalid");
  }
  

  // ========== Succes Message Function ==========
  function successMsg(input, message) {
    const parent = input.parentElement;
    parent.querySelector(".success-message").innerText = message;
    parent.querySelector(".success-message").style.display = "block";
    input.classList.remove(".error-message");
  }

  // ========== Clear Error Function ==========
  function clearError(input) {
    const parent = input.parentElement;
    parent.querySelector(".error-message").innerText = "";
    parent.querySelector(".error-message").style.display = "none";
    input.classList.remove("is-invalid");
  }

  // ========== USERNAME VALIDATION ==========
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    showError(username, "Username is required");
    isValid = false;
  } else if (usernameValue.length > 15) {
    showError(username, "Username must be under 15 characters");
    isValid = false;
  } else if (usernameValue.includes(" ")) {
    showError(username, "Username cannot contain spaces");
    isValid = false;
  } else if (usernameValue !== usernameValue.toLowerCase()) {
    showError(username, "Username must be lowercase only");
    isValid = false;
  } else {
    successMsg(username, "Perfect User Name");
    isValid = true;
  }

  // ========== EMAIL VALIDATION ==========
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    showError(email, "Enter a valid email");
    isValid = false;
  } else {
    successMsg(email, "Email Valid");
  }

  // ========== PHONE VALIDATION ==========
  if (phone.value.trim().length !== 11 || isNaN(phone.value)) {
    showError(phone, "Phone number must be 11 digits");
    isValid = false;
  } else {
    successMsg(phone, "Phone number Valid");
  }

  // ========== PASSWORD VALIDATION ==========
  if (password.value.length < 8) {
    showError(password, "Password must be at least 8 characters");
    isValid = false;
  } else {
    successMsg(username, "Perfect Password");
  }

  // ========== CONFIRM PASSWORD ==========
  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  } else if (
    confirmPassword.value === password.value &&
    confirmPassword.value !== ""
  ) {
    successMsg(confirmPassword, "Password Match");
  } else {
    clearError(confirmPassword);
  }

  if (isValid) {
    form.submit();
  }
});
