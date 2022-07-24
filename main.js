let slideNumber = 0;
let album = [];
let albumLength;

axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
        album = response.data.results;
        albumLength = album.length;
        renderSlide(album);
    });

const slide = document.querySelector('.img');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const slideCounter = document.querySelector('#slide-counter');
leftBtn.addEventListener('click', prev);
rightBtn.addEventListener('click', next);

function renderSlide(response) {
    slide.src = response[slideNumber].image;
    slideCounter.innerHTML = slideNumber + 1 + ' / ' + albumLength;
};


function prev() {
    if (slideNumber > 0) {
        slideNumber--;
        renderSlide(album);
    } else {
        slideNumber = albumLength - 1;
        renderSlide(album);
    }
};

function next() {
    if (slideNumber < albumLength - 1) {
        slideNumber++;
        renderSlide(album);
    } else {
        slideNumber = 0;
        renderSlide(album);
    }
};

