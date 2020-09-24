const confirmPasswordOverlay = document.getElementById("flashy-confirm-password-overlay");
const formCreateAccount = document.getElementById("form-create-account");
const h2ConfirmPassword = document.getElementById("text-confirm-password");
const buttonConfirmPassword = document.getElementById("button-confirm-password");

formCreateAccount.addEventListener('submit', (event) => {
  const enteredPassword = document.getElementById("password");
  h2ConfirmPassword.innerText = enteredPassword.value;
  confirmPasswordOverlay.classList.remove('hidden');
  event.preventDefault();
});

buttonConfirmPassword.addEventListener('click', () => {
  confirmPasswordOverlay.classList.add('hidden');
  formCreateAccount.classList.add('hidden');
  alert('Thank you!');
});
