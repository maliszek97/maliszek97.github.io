const techSelenium = document.querySelectorAll('.technologies .tech-stars #selenium .star');
const techJava = document.querySelectorAll('.technologies .tech-stars #java .star');
const techJmeter = document.querySelectorAll('.technologies .tech-stars #java .star');
const techPostman = document.querySelectorAll('.technologies .tech-stars #postman .star');
const techCss = document.querySelectorAll('.technologies .tech-stars #css .star');
const techHtml = document.querySelectorAll('.technologies .tech-stars #html .star');
const techJs = document.querySelectorAll('.technologies .tech-stars #js .star');
const techGit = document.querySelectorAll('.technologies .tech-stars #git .star');


/* funkcja sleep do tworzenia przerwy */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* liczba gwiazdek dla danej technologii */

let seleniumNum = 3;
let javaNum = 2;
let jmeterNum = 2;
let postmanNum = 2;
let cssNum = 4;
let htmlNum = 4;
let jsNum = 2;
let gitNum = 3;


/*funkcje dodające gwiazki do każdej technologii równocześnie działające */

$(window).scroll(async function () {
    let $topHeight = $('.header').height() + $('.carousel-inner').height() + $('#about-me').height() + $('.experience').height() - 300;
    let $bottomHeight = $('.header').height() + $('.carousel-inner').height() + $('#about-me').height() + $('.experience').height() + 300;
    let $docTop = $(window).scrollTop();
    if ($topHeight < $docTop && $docTop < $bottomHeight) {
        for (var i = 0; i < cssNum; i++) {
            techCss[i].classList.add('active-star');
            await sleep(300);
        }

        for (var i = 0; i < htmlNum; i++) {
            techHtml[i].classList.add('active-star');
            await sleep(300);
        }

        for (var i = 0; i < jsNum; i++) {
            techJs[i].classList.add('active-star');
            await sleep(300);

        }

        for (var i = 0; i < bootstrapNum; i++) {
            techBootstrap[i].classList.add('active-star');
            await sleep(300);

        }

        for (var i = 0; i < seleniumNum; i++) {
            techSelenium[i].classList.add('active-star');
            await sleep(300);

        }

        for (var i = 0; i < javaNum; i++) {
            techJava[i].classList.add('active-star');
            await sleep(300);

        }

        for (var i = 0; i < jmeterNum; i++) {
            techJmeter[i].classList.add('active-star');
            await sleep(300);

        }

        for (var i = 0; i < gimpNum; i++) {
            techGit[i].classList.add('active-star');
            await sleep(300);
        }

    }
});


/*
async function addStarCss() {
    if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
        for (var i = 0; i < cssNum; i++) {
            techCss[i].classList.add('active-star');
            await sleep(300);
        }
    }
}

async function addStarHtml() {
    // if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
    for (var i = 0; i < htmlNum; i++) {
        techHtml[i].classList.add('active-star');
        await sleep(300);
        // }
    }
}

async function addStarJs() {
    // if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
    for (var i = 0; i < jsNum; i++) {
        techJs[i].classList.add('active-star');
        await sleep(300);
        // }
    }
}

async function addStarBootstrap() {
    // if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
    for (var i = 0; i < bootstrapNum; i++) {
        techBootstrap[i].classList.add('active-star');
        await sleep(300);
        // }
    }
}

async function addStarRwd() {
    // if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
    for (var i = 0; i < rwdNum; i++) {
        techRwd[i].classList.add('active-star');
        await sleep(300);
        // }
    }
}

async function addStarCPlus() {
    // if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
    for (var i = 0; i < cPlusNum; i++) {
        techCPlus[i].classList.add('active-star');
        await sleep(300);
        // }
    }
}

async function addStarGimp() {
    // if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
    for (var i = 0; i < gimpNum; i++) {
        techGimp[i].classList.add('active-star');
        await sleep(300);
        // }
    }
}

async function addStarSeo() {
    // if ($topHeight > $documentTop && $documentTop > $bottomHeight) {
    for (var i = 0; i < seoNum; i++) {
        techSeo[i].classList.add('active-star');
        await sleep(300);
        // }
    }
}

document.addEventListener('click', addStarCss);
document.addEventListener('click', addStarHtml);
document.addEventListener('click', addStarJs);
document.addEventListener('click', addStarBootstrap);
document.addEventListener('click', addStarRwd);
document.addEventListener('click', addStarCPlus);
document.addEventListener('click', addStarGimp);
document.addEventListener('click', addStarSeo); */