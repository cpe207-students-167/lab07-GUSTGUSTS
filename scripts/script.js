// scripts/script.js

// Create references for input fields
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// Create references for buttons
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// Simple email validation
function validateEmail(email) {
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// Validate input fields
function validateInput(input, condition) {
  input.classList.remove("is-valid", "is-invalid");
  if (condition) {
    input.classList.add("is-valid");
    return true;
  } else {
    input.classList.add("is-invalid");
    return false;
  }
}

// Reset validation states on keyup
function resetValidation(input) {
  input.addEventListener("keyup", () => {
    input.classList.remove("is-valid", "is-invalid");
  });
}

// Apply resetValidation to all input fields
[firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(resetValidation);

// Add callback function for submit button
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const isFirstNameOk = validateInput(firstNameInput, firstNameInput.value.trim() !== "");
  const isLastNameOk = validateInput(lastNameInput, lastNameInput.value.trim() !== "");
  const isEmailOk = validateInput(emailInput, validateEmail(emailInput.value));
  const isPasswordOk = validateInput(passwordInput, passwordInput.value.length >= 6);
  const isPasswordConfirmOk = validateInput(passwordConfirmInput, passwordConfirmInput.value === passwordInput.value);

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isPasswordConfirmOk) {
    alert("Registered successfully");
  }
});

// Add callback function for reset button
resetBtn.addEventListener("click", () => {
  // Clear all input fields
  [firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(input => {
    input.value = '';
    input.classList.remove("is-valid", "is-invalid");
  });
});
