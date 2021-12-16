var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar-menu').classList.toggle('navbar-menu--visible');
}, {passive: true})

const research = document.getElementsByClclass('research__parallax')[0];
function moveBg(e){
  var researchHeight = research.getBoundingClientRect().height;
  var heightScroll = window.innerHeight + researchHeight - 40;
  var researchTop = research.getBoundingClientRect().top;
  var blockPosition = researchTop + researchHeight - 40;

  if ((researchTop-window.innerHeight<=0) && (researchTop+researchHeight>=0)) {
    research.style.backgroundPositionY = ((60-0.6*100) + (blockPosition/heightScroll)*100*0.6) + '%'; }

};

document.addEventListener('scroll', moveBg);