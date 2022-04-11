const inputs = document.querySelectorAll(".form-input");
const submitButton = document.getElementById("submit");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

function validate(input) {
  const inputName = input.name;

  checkAllValuesValid();

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-invalid");
    input.parentElement.querySelector(".input-error-message").innerHTML =
      getErrorMessage(inputName, input);
  }
}

function checkAllValuesValid() {
  let validInputs = 0;
  inputs.forEach((input) => {
    if (input.validity.valid) {
      validInputs++;
    }

    if (validInputs === inputs.length) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}

function getErrorMessage(inputName, input) {
  let message = "";
  validityStates.forEach((error) => {
    if (input.validity[error]) {
      message = erroMessages[inputName][error];
    }
  });
  return message;
}

const validityStates = [
  "patternMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valueMissing",
];

const erroMessages = {
  name: {
    patternMismatch: "El nombre debe tener almenos 2 caracteres alfabéticos",
    tooShort: "El nombre debe tener al menos 2 caracteres",
    valueMissing: "El nombre no puede estar vacío",
  },
  email: {
    typeMismatch: "Ingrese un email válido",
    valueMissing: "El email no puede estar vacío",
  },
  subject: {
    patternMismatch: "El asunto no puede estar vacío",
    tooShort: "El asunto debe tener al menos 2 caracteres",
    valueMissing: "El asunto no puede estar vacío",
  },
  message: {
    tooShort: "El mensaje debe tener al menos 2 caracteres",
    valueMissing: "El mensaje no puede estar vacío",
  },
};
