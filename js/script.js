// toggle class acive

const klikdaftar = document.querySelector(".wrapper-signup");

const Forgot = document.querySelector(".wrapper-forgot-pass");

const btnclose = document.querySelector(".btn-close");
const btnclose2 = document.querySelector(".btn-close-2");

// ketika hamburger menu di klik
document.querySelector("#signup").onclick = () => {
  klikdaftar.classList.toggle("active");
};

document.querySelector("#forgot").onclick = () => {
  Forgot.classList.toggle("active");
};

document.querySelector("#btn-close").onclick = () => {
  Forgot.classList.remove("active");
};
document.querySelector("#btn-close-2").onclick = () => {
  klikdaftar.classList.remove("active");
};

// klik diluar untuk menghilangkan nav

const forgotpass = document.querySelector("#forgot");

document.addEventListener("click", function (e) {
  if (!forgotpass.contains(e.target) && !Forgot.contains(e.target)) {
    Forgot.classList.remove("active");
  }
});
const signup = document.querySelector("#signup");

document.addEventListener("click", function (e) {
  if (!signup.contains(e.target) && !klikdaftar.contains(e.target)) {
    klikdaftar.classList.remove("active");
  }
});
