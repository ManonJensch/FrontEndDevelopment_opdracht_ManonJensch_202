const menuButton = document.querySelector("header menu li:nth-of-type(1) button");
const deNav = document.querySelector("header nav");


const button = document.querySelector('button[aria-label="kerstMuziekToggle"]');
const audio = document.querySelector('audio[aria-label="kerstMuziek"]');


menuButton.onclick = toggleMenu;


function toggleMenu(){
  deNav.classList.toggle("is-open");
  menuButton.classList.toggle("is-open");
}



button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});