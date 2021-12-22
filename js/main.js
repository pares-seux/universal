
$(document).ready(function () {

  $.getScript("./js/jquery.mask.js", function(){});
  $.getScript("./js/jquery.validate.min.js", function(){});
  $.getScript("./js/swiper-bundle.min.js", function(){
    const reviewSlider = new Swiper('.advice-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: '.advice-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }
});
  });
  $.getScript("./js/common.js", function(){});
  
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

  var newsShow = document.querySelector('.news-actuals__button');
  newsShow.addEventListener('click', function() {
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

  var tabsItem = $(".recommend-list__item");
  var contentItem = $(".main-article__description");
  tabsItem.on("click", function() {
      var activeContent = $(this).attr("data-target");
      tabsItem.removeClass('recommend-list__item--active');
      contentItem.removeClass('main-article__description--active');
      $(this).addClass('recommend-list__item--active');
      $(activeContent).addClass('main-article__description--active');
      
  });


});