$(document).ready(function () {

$.getScript("jquery.mask.js", function() {
   alert("Script loaded but not necessarily executed.");
});
$.getScript("jquery.validate.min.js", function() {
   alert("Script loaded but not necessarily executed.");
});

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

const reviewSlider = new Swiper('.advice-slider', {
  // Optional parameters
  loop: true,
  autoHeight: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: '.advice-slider__pagination',
    type: 'bullets'
  },
  autoplay: {
    delay: 4000,
  }
});

const cotentSlider = new Swiper('.content-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.content-slider__button--next',
    prevEl: '.content-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var modalButton = $('[data-toggle=modal]');
  modalButton.on('click', openModal);
  var closeModalButton = $('.modal__close');
  closeModalButton.on('click', closeModal);
  var modalWindow = $('.modal__overlay');
  modalWindow.on('click', function(event) {
    closeModal(event);
  });

  $(document).keyup(function(event) {
     if (event.key === "Escape") { 
       closeModal(event);
    }
  });

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  //обработка форм
  $(".form").each( function() {
    if($(this).hasClass('footer-subscription__form')) {
      $(this).validate({
        errorLabelContainer: $('.footer-subscription__label'),
        messages: {
          email: {
            required: 'Обязательное поле*',
            email: 'Пожалуйста, введите корректный email-адрес'
          },
        },
    });
    };
    $(this).validate({
      messages: {
        name: {
          required: 'Обязательное поле*',
          name: 'Имя не должно быть короче 2х'
        },
        phone: {
          required: 'Обязательное поле*',
          minlength:  'Пожалуйста, введите корректный номер +7 (XXX) XXX-XX-XX'
        },
        email: {
          required: 'Обязательное поле*',
          email: 'Пожалуйста, введите корректный email-адрес'
        },
      },
    });
  });

});