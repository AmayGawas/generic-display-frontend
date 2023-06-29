'use strict';

const navLinks = document.querySelectorAll('.nav__links');
const infoBtn = document.querySelectorAll('.more__info--btn');
const cardContainer = document.querySelector('.cards__container');
const selectSubjectBtn = document.querySelector('.select-btn');
const backHomeBtn = document.querySelector('.bck-home-btn');
const confBtn = document.querySelector('.conf-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const selectionContainer = document.querySelector('.selection__container');
const confrimationContainer = document.querySelector('.confrimation__container');
const subjectSelectedContainer = document.querySelector('.subject--selected__container');




//event handlers
navLinks.forEach((lnk,i) => lnk.addEventListener('click', function() {
    if(i == 0){
        cardContainer.classList.remove('unactive');
        confrimationContainer.classList.add('unactive');
        subjectSelectedContainer.classList.add('unactive');
    }
    else {
        return
    }
}));

infoBtn.forEach((btn) => btn.addEventListener('click', function(e) {
    e.preventDefault();
    cardContainer.classList.add('unactive')
    selectionContainer.classList.remove('unactive')
}));

selectSubjectBtn.addEventListener('click', function(e) {
    e.preventDefault();
    confrimationContainer.classList.remove('unactive');
    selectionContainer.classList.add('unactive');
});

confBtn.addEventListener('click', function(e) {
    e.preventDefault();
    subjectSelectedContainer.classList.remove('unactive');
    confrimationContainer.classList.add('unactive');
});

cancelBtn.addEventListener('click', function(e) {
    e.preventDefault();
    confrimationContainer.classList.add('unactive');
    selectionContainer.classList.remove('unactive')
});

backHomeBtn.addEventListener('click', function(e) {
    cardContainer.classList.remove('unactive');
    confrimationContainer.classList.add('unactive');
    subjectSelectedContainer.classList.add('unactive');
    selectionContainer.classList.add('unactive');
});