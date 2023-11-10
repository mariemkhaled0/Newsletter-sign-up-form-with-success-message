const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const submitBtn = document.getElementById("btn");
const left = document.querySelector(".container");
const thankPage = document.querySelector(".thank-page");
const confirmationEmail = document.querySelector(".confirmation-email");
const dismissBtn = document.querySelector(".dismiss-btn");
console.log(emailInput);

function sucess() {
  thankPage.classList.remove("hidden");
  left.style.display = "none";
}

function validation(email) {
  const reg = /^[^s@]+@[^s@]+.[^s@]+$/;
  return reg.test(email);
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const email = emailInput.value;
  if (validation(email)) {
    sucess();
    confirmationEmail.innerHTML = email;
    emailInput.value = "";
  } else if (emailInput.value === "") {
    errorMsg.style.display = "block";
    emailInput.style.border = "1px solid red";
  } else {
    errorMsg.style.display = "block";
    emailInput.style.border = "1px solid red";
  }
});
dismissBtn.addEventListener("click", function () {
  thankPage.classList.add("hidden");
  left.style.display = "flex";
});
