const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
const passError = document.querySelector("span.errorText");
const form = document.querySelector("form");
const email = document.getElementById("email");

pass.addEventListener("input", () => {
  if (pass.value !== confirmPass.value) {
    showPassError();
    pass.classList.add("error");
    confirmPass.classList.add("error");
  } else {
    passError.textContent = "";
    pass.classList.remove("error");
    confirmPass.classList.remove("error");
  }
});

confirmPass.addEventListener("input", () => {
  if (pass.value !== confirmPass.value) {
    showPassError();
    pass.classList.add("error");
    confirmPass.classList.add("error");
  } else {
    passError.textContent = "";
    pass.classList.remove("error");
    confirmPass.classList.remove("error");
  }
});

email.addEventListener("input", () => {
  if (!email.validity.valid) {
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }
})

form.addEventListener("submit", (event) => {
  if (pass.classList.contains("error") || email.classList.contains("error")) {
    event.preventDefault();
  }
});

function showPassError() {
  passError.textContent= "Passwords do not match.";
}