const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmpty(firstNameInput.value, firstNameInput, firstNameError, "First Name cannot be empty")
    validateEmpty(lastNameInput.value, lastNameInput, lastNameError, "Last Name cannot be empty")
    validateEmail(emailInput.value, emailInput, emailError)
    validatePassword(passwordInput.value, passwordInput, passError)
})

function validateEmail(valueInput, divInput, divError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    regExp.test(valueInput) ? hideError(divInput, divError) : showError(divInput, divError, "Looks like this is not an email");
    emailInput.value = "";
}

function validatePassword(passwordInput, divInput, passError) {
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    regExp.test(passwordInput) ? hideError(divInput, passError) : showError(divInput, passError, "Password cannot be empty");
    divInput.value = "";
}

function validateEmpty(valueInput, divInput, divError, nameError) {
    valueInput.length == 0 ? showError(divInput, divError, nameError) : hideError(divInput, divError);
    divInput.value = "";
}

function showError(divInput, divError, error) {
    divInput.style.border = "1px solid red"
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="icon error">
    <p class="error">${error}</p>`;

}

function hideError(divInput, divError) {
    divInput.style.border = "1px solid hsl(246, 25%, 77%)"
    divError.innerHTML = ``;
}