"use strict"
const hamburger = document.querySelector('.hamburger-menu')
const hamburgerWrapper = document.querySelector('.hamburger__wrapper')

hamburger.addEventListener('click',function(){
  hamburgerWrapper.classList.toggle('active')
})