const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")
const navLink1 = document.querySelector(".nav-link1")
const navLink2 = document.querySelector(".nav-link2")
const navLink3 = document.querySelector(".nav-link3")
const navLink4 = document.querySelector(".nav-link4")
const navLink5 = document.querySelector(".nav-link5")
const shape = document.getElementById('shape')

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

navLink1.addEventListener("click", () => {
    hamburguer.classList.remove('active')
    navMenu.classList.remove('active')
})

navLink2.addEventListener("click", () => {
    hamburguer.classList.remove('active')
    navMenu.classList.remove('active')
})

navLink3.addEventListener("click", () => {
    hamburguer.classList.remove('active')
    navMenu.classList.remove('active')
})

navLink4.addEventListener("click", () => {
    hamburguer.classList.remove('active')
    navMenu.classList.remove('active')
})

navLink5.addEventListener("click", () => {
  hamburguer.classList.remove('active')
  navMenu.classList.remove('active')
})

function darkmode(){
  const switchdark = document.getElementById('switchd');
  if(switchdark.checked == true){
    shape.classList.add('dark')
    
  } else{
    shape.classList.remove('dark')
  }
}

const inputdata = document.querySelector('#inputdata')
inputdata.addEventListener('keypress', () => {
    let inputdatalength = inputdata.value.length
    if ( inputdatalength === 2){
        inputdata.value += "/"
    } else if(inputdatalength === 5){
        inputdata.value += "/"
    }
})

const inputtel = document.querySelector('#inputtel')
inputtel.addEventListener('keypress', () => {
    let inputtellength = inputtel.value.length
    if ( inputtellength === 0){
        inputtel.value += "("
    } else if (inputtellength === 3){
        inputtel.value += ") "
    } else if (inputtellength === 10){
        inputtel.value += "-"
    }
})

function uianimated() {
    var uianimateds = document.querySelectorAll('.uianimated');
  
    for (var i = 0; i < uianimateds.length; i++) {
      var windowheight = window.innerHeight;
      var uianimatedtop = uianimateds[i].getBoundingClientRect().top;
      var uianimatedpoint = 40;
  
      if (uianimatedtop < windowheight - uianimatedpoint) {
        uianimateds[i].classList.add('active');
      } else {
        uianimateds[i].classList.remove('active');
      }
    }
}

function uianimated2() {
    var uianimateds2 = document.querySelectorAll('.uianimated2');
  
    for (var i = 0; i < uianimateds2.length; i++) {
      var windowheight2 = window.innerHeight;
      var uianimatedtop2 = uianimateds2[i].getBoundingClientRect().top;
      var uianimatedpoint2 = 40;
  
      if (uianimatedtop2 < windowheight2 - uianimatedpoint2) {
        uianimateds2[i].classList.add('active2');
      } else {
        uianimateds2[i].classList.remove('active2');
      }
    }
}
  
  function onPageload() {
    uianimated();
    window.addEventListener('scroll', uianimated);
    window.addEventListener('scrool', uianimated2);

    var menu = document.getElementById('incricaolink');
    menu.classList.add('menuFixo');

    var menu = document.getElementById('incricaolink');
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 0){
        menu.classList.add('menuFixo');
      }
      else {
        menu.classList.remove('menuFixo');
      }
  })}
  
  window.addEventListener('load', onPageload);