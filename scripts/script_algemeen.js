const menuButton = document.querySelector("header menu li:nth-of-type(1) button");
const deNav = document.querySelector("header nav");


menuButton.onclick = toggleMenu;


function toggleMenu(){
  deNav.classList.toggle("is-open");
  menuButton.classList.toggle("is-open");
}