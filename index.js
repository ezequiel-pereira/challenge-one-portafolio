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
  "badInput",
  "customError",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valid",
  "valueMissing",
];

const erroMessages = {
  name: {
    patternMismatch: "El nombre debe tener solo caracteres alfabéticos",
    tooShort: "El nombre debe tener al menos 3 caracteres",
    typeMismatch: "Type mismatch",
    valueMissing: "El nombre no puede estar vacío",
  },
  email: {
    patternMismatch: "El email debe ser válido",
    tooShort: "El nombre debe tener al menos 3 caracteres",
    typeMismatch: "Ingrese un email válido",
    valueMissing: "El email no puede estar vacío",
  },
  subject: {
    patternMismatch: "El asunto debe tener solo caracteres alfanuméricos",
    tooShort: "El asunto debe tener al menos 3 caracteres",
    typeMismatch: "Type mismatch",
    valueMissing: "El asunto no puede estar vacío",
  },
  message: {
    patternMismatch: "Pattern mismatch",
    tooShort: "El mensaje debe tener al menos 3 caracteres",
    typeMismatch: "Type mismatch",
    valueMissing: "El mensaje no puede estar vacío",
  },
};
