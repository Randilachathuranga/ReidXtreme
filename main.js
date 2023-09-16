// navbar
window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});

// hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const menuBtnClose = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  menuBtnClose.style.display = "inline-block";
  menuBtn.style.display = "none";
});

menuBtnClose.addEventListener('click', () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  menuBtnClose.style.display = "none";
});


