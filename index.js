const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const Close = document.querySelector("#close");

navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
});

Close.addEventListener("click", () => {
    navbar.classList.remove("showNav");
});