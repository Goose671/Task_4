let slideNumber = 0;
let numberSlide = 1
axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
        renderSlide(response.data.results);
    });

const slide = document.querySelector('.img');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const number = document.querySelector('.number');
leftBtn.addEventListener('click', prev);
rightBtn.addEventListener('click', next);

function renderSlide(response) {
    slide.src = response[slideNumber].image
    number.innerHTML = numberSlide + ' / 20'
    
};


function prev() {
    if ((slideNumber > 0) && (numberSlide > 0)) {
        slideNumber--;
        numberSlide--;
        console.log(slideNumber)
        axios.get('https://rickandmortyapi.com/api/character')
            .then(function (response) {
                renderSlide(response.data.results);
            });
    } else {
        slideNumber = 19
        numberSlide = 20
        console.log(slideNumber)
        axios.get('https://rickandmortyapi.com/api/character')
            .then(function (response) {
                renderSlide(response.data.results);
            });
    }
};

function next() {
    if ((slideNumber < 19) && (numberSlide < 20)) {
        slideNumber++;
        numberSlide++;
        console.log(slideNumber)
        axios.get('https://rickandmortyapi.com/api/character')
            .then(function (response) {
                renderSlide(response.data.results);
            });
    } else {
        slideNumber = 0
        numberSlide = 1
        console.log(slideNumber)
        axios.get('https://rickandmortyapi.com/api/character')
            .then(function (response) {
                renderSlide(response.data.results);
            });
    }
};

