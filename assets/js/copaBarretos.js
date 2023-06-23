const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")
const navLink1 = document.querySelector(".nav-link1")
const navLink2 = document.querySelector(".nav-link2")
const navLink3 = document.querySelector(".nav-link3")
const navLink4 = document.querySelector(".nav-link4")
const navLink5 = document.querySelector(".nav-link5")
const sobre = document.getElementById('sobre')
const modal = document.getElementById('modalidades')
const contato = document.getElementById('contato')
const footer = document.getElementById('footer')

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

function scroolanimation() {
  var menu = document.getElementById('iniciohome'); // colocar em cache
  window.addEventListener('scroll', function() {
      if (window.scrollY > 20){
        menu.classList.add('menuFixo');
      }
      else {
        menu.classList.remove('menuFixo');
      }
  });
};


function darkmode(){
  const switchdark = document.getElementById('switchd');
  const body = document.querySelector('.body');
  if(switchdark.checked == true){
    body.classList.add('dark')
    sobre.classList.add('dark')
    modal.classList.add('dark')
    contato.classList.add('dark')
    footer.classList.add('dark')
  } else{
    body.classList.remove('dark')
    sobre.classList.remove('dark')
    modal.classList.remove('dark')
    contato.classList.remove('dark')
    footer.classList.remove('dark')
  }
}

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
  
  function onPageload() {
    uianimated();
    window.addEventListener('scroll', uianimated);

    var menu = document.getElementById('iniciohome');
    menu.classList.add('menuFixo');

    var menu = document.getElementById('iniciohome');
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 0){
        menu.classList.add('menuFixo');
      }
      else {
        menu.classList.remove('menuFixo');
      }
  });

  var menu2 = document.getElementById('sobreevento');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 350){
        menu2.classList.add('menuFixo');
        menu.classList.remove('menuFixo')
      }
      else {
        menu2.classList.remove('menuFixo');
      }
  });

  var menu3 = document.getElementById('modal');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 1000){
        menu3.classList.add('menuFixo');
        menu2.classList.remove('menuFixo')
        menu.classList.remove('menuFixo')
      }
      else {
        menu3.classList.remove('menuFixo');
      }
  });

  var menu4 = document.getElementById('contact');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 1500){
        menu4.classList.add('menuFixo');
        menu3.classList.remove('menuFixo')
        menu2.classList.remove('menuFixo')
        menu.classList.remove('menuFixo')
      }
      else {
        menu4.classList.remove('menuFixo');
      }
  });
}
  
window.addEventListener('load', onPageload);