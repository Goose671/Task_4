let slideNumber = 0;
let numberSlide = 1
let album = []
let albumLength
  axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
        album = response.data.results
        albumLength = album.length
        renderSlide(album)
    });

const slide = document.querySelector('.img');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const number = document.querySelector('.number');
leftBtn.addEventListener('click', prev);
rightBtn.addEventListener('click', next);

function renderSlide(response) {
    slide.src = response[slideNumber].image
    number.innerHTML = numberSlide + ' / ' + albumLength
    
};


function prev() {
    if ((slideNumber > 0) && (numberSlide > 0)) {
        slideNumber--;
        numberSlide--;
        console.log(slideNumber)
        renderSlide(album)
    } else {
        slideNumber = albumLength - 1
        numberSlide = albumLength
        console.log(slideNumber)
        renderSlide(album)
    }
};

function next() {
    if ((slideNumber < albumLength) && (numberSlide < albumLength)) {
        slideNumber++;
        numberSlide++;
        console.log(slideNumber)
        renderSlide(album)
    } else {
        slideNumber = 0
        numberSlide = 1
        console.log(slideNumber)
        renderSlide(album)
    }
};

