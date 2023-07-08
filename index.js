const formElement = document.forms.formOne;
const formInput = formElement.querySelectorAll(".form__input");
let errorsName = [];
let errorsEmail = [];
let errorsRadio = [];
let errorsPassword = [];
let errorsPassword2 = [];

//проверяем поле с именем
function checkName() {
  const name = formElement.elements.name;

  let errorMessage = document.querySelector("#name-error");

  if (name.validity.valueMissing) {
    errorsName.push("Необходимо заполнить поле");
    name.style.borderColor = "red";
  }
  if (name.validity.tooShort) {
    errorsName.push("Значение слишком короткое");
    name.style.borderColor = "red";
  }
  errorMessage.textContent = errorsName.join(". \n");
  if (errorsName.length === 0) {
    name.style.borderColor = "black";
  }
}

//проверяем поле с почтой
function checkEmail() {
  const email = formElement.elements.email;
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  let errorMessage = document.querySelector("#email-error");

  if (email.validity.valueMissing) {
    errorsEmail.push("Необходимо заполнить поле");
    email.style.borderColor = "red";
  }

  if (!email.value.match(mailFormat)) {
    errorsEmail.push("Email введен некорректно");
    email.style.borderColor = "red";
  }
  if (errorsEmail.length === 0) {
    email.style.borderColor = "black";
  }
  errorMessage.textContent = errorsEmail.join(". \n");
}

//проверяем выбрана ли радиокнопка
function checkRadio() {
  const gender = formElement.elements.gender;
  let errorMessage = document.querySelector("#gender-error");

  if ((gender.checked = false)) {
    errorsRadio.push("Выберите пол");
  }
  errorMessage.textContent = errorsRadio.join(". \n");
}

//проверяем пароль
function checkPassword() {
  const password = formElement.elements.password;
  const password2 = formElement.elements.password2;
  const passwordFormat =
    /(?=.*[0-9])(?=.*)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  let errorMessage = document.querySelector("#password-error");
  let errorMessage2 = document.querySelector("#password2-error");

  if (!password.value.match(passwordFormat)) {
    errorsPassword.push("Пароль не соответствует критериям");
    password.style.borderColor = "red";
  }

  if (password.value !== password2.value) {
    errorsPassword2.push("Вы ввели разные пароли");
    password2.style.borderColor = "red";
  }

  if (errorsPassword.length === 0) {
    password.style.borderColor = "black";
  }

  if (errorsPassword2.length === 0) {
    password.style.borderColor = "black";
  }
  errorMessage2.textContent = errorsPassword2.join(". \n");
  errorMessage.textContent = errorsPassword.join(". \n");
}

//проверяем нажат ли чекбокс с согласием на обработку и ставим на него слушатель

formOne.elements.agreement.addEventListener("click", function () {
  if (formOne.elements.agreement.checked) {
    formOne.elements.firstButton.disabled = false;
  }
  if (!formOne.elements.agreement.checked) {
    formOne.elements.firstButton.disabled = true;
  }
});

// если ошибок нет, выводим данные в консоль
function sendInputs() {
  if (errorsEmail.length === 0) {
    if (errorsName.length === 0) {
      if (errorsRadio.length === 0) {
        if (errorsPassword.length === 0) {
          if (errorsPassword2.length === 0) {
            console.log(formElement.elements.name.value);
            console.log(formElement.elements.email.value);
            console.log(formElement.elements.ageOne.value);
            console.log(formElement.elements.gender.value);
            console.log(formElement.elements.firstSelect.value);
            console.log(formElement.elements.password.value);
          }
        }
      }
    }
  }
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  //   formOne.reset();
  checkName();
  checkEmail();
  checkPassword();
  checkRadio();
  sendInputs();
  errorsName = [];
  errorsEmail = [];
  errorsRadio = [];
  errorsPassword = [];
  errorsPassword2 = [];
});
