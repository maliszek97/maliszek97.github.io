/*const techSection = $('.technologies');
let randomLeft = 0;
let randomTop = 0;
let $cssElement = 0;

for(var i = 0; i < 5; i++){
    randomLeft = "left:" + Math.floor(Math.random() * 100 + 1) + "; ";
    $techSection.append('<div>CSS</div>').addClass('cssBg');
    
}
*/
const techSection = document.querySelectorAll('.tech-bg div');
const sectionBg = document.querySelector('.tech-bg');
const toggleBtn = document.querySelector('.technologies .toggle-btn');

let randomLeft = 0;
let randomTop = 0;
let randomStyle = 0;
// const bgLength = techSection.length();

function techBg() {
    for (let i = 0; i < 15; i++) {
        randomLeft = "left: " + Math.floor(Math.random() * 70 + 10) + "%; ";
        randomTop = "top: " + Math.floor(Math.random() * 70 + 10) + "%;";
        randomStyle = randomLeft + randomTop;
        techSection[i].setAttribute('style', randomStyle);
    }
}

function toggleBg() {
    sectionBg.classList.toggle('dissapear-object');
    if (toggleBtn.textContent == 'Hide background') {
        toggleBtn.textContent = "Show background";
    } else {
        toggleBtn.textContent = "Hide background";
    }
}

window.addEventListener('load', techBg);
toggleBtn.addEventListener('click', toggleBg);