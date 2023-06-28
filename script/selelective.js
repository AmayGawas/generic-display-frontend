'use strict';

const navLinks = document.querySelectorAll('.nav__links');
const infoBtn = document.querySelectorAll('.more__info--btn');
const cardContainer = document.querySelector('.cards__container');
const selectionContainer = document.querySelector('.selection__container');
const selectSubjectBtn = document.querySelector('.select-btn');
const confrimationContainer = document.querySelector('.confrimation__container');




//event handlers
navLinks.forEach((lnk,i) => lnk.addEventListener('click', function() {
    if(i == 0){
        cardContainer.classList.remove('unactive');
        confrimationContainer.classList.add('unactive');
    }
    else {
        return
    }
}))

infoBtn.forEach((btn) => btn.addEventListener('click', function(e) {
    e.preventDefault();
    cardContainer.classList.add('unactive')
    selectionContainer.classList.remove('unactive')
}));

selectSubjectBtn.addEventListener('click', function(e) {
    e.preventDefault();
    confrimationContainer.classList.remove('unactive');
    selectionContainer.classList.add('unactive');

})