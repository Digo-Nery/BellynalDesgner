const hamburger = document.querySelector(".header--icon-btn");
        
const nav = document.querySelector(".nav--ul");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
