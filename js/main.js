var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar-menu').classList.toggle('navbar-menu--visible');
}, {passive: true})

const research = document.getElementsByClassName('research__parallax')[0];
function moveBg(e){
  var researchHeight = research.getBoundingClientRect().height;
  var heightScroll = window.innerHeight + researchHeight - 60;
  var researchTop = research.getBoundingClientRect().top;
  var blockPosition = researchTop + researchHeight - 60;
  if ((researchTop-window.innerHeight<=0) && (researchTop+researchHeight>=0)) {
    research.style.backgroundPositionY = ((80-0.8*100) + (blockPosition/heightScroll)*100*0.8) + '%'; 
  }
};
document.addEventListener('scroll', moveBg);

var flag = document.querySelectorAll('.flag');
flag.forEach(function(e) {
  e.addEventListener('click', function() {
    this.classList.toggle('flag--active');
  });
});

var news = document.querySelector('.news-actuals__button');
news.addEventListener('click', function() {
  var width = window.innerWidth;
  if ((width <= 1040) && (width > 820))   {
    hiddenNews(7, 'desktop');
  };
  if ((width <= 820) && (width > 576))   {
    hiddenNews(5, 'tablet');
  };
  if (width < 576)   {
    hiddenNews(4, 'mobile');
  };
}, {passive: true})

function hiddenNews(n, screen) {
  var childs = '.news-actuals__item:nth-child(n+' + n +')';
  var className = 'news-actuals__item--' + screen + '-hidden';
  document.querySelectorAll(childs).forEach( e => {
      e.classList.toggle(className);
    });
};