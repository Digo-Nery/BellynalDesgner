const hamburger = document.querySelector(".header--icon-btn");
        
const nav = document.querySelector(".nav--ul");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });
  
  
  