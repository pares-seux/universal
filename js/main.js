$(document).ready(function () {

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
    if($(this).hasClass('modal__form')) {
      $(this).validate({
        messages: {
          email: {
            required: 'Обязательное поле*',
            email: 'Пожалуйста, введите корректный email-адрес'
          },
          checkbox: {
            required: 'Обязательное поле*',
          },
          theame: {
            required: '',
          }
        },
    });
    };
    if($(this).hasClass('comment-form')) {
      $(this).validate({
        messages: {
         message: {
            required: 'Оставьте сообщение*',
            minlength:  'Сообщение не должно быть короче 100 символов'
          },
        },
      });
    };
  });

  var tabsItem = $(".recommend-list__item");
  var contentItem = $(".main-article__description");
  tabsItem.on("click", function() {
      var activeContent = $(this).attr("data-target");
      tabsItem.removeClass('recommend-list__item--active');
      contentItem.removeClass('main-article__description--active');
      $(this).addClass('recommend-list__item--active');
      $(activeContent).addClass('main-article__description--active');
      
  });

  $(".scroll").on("click", function() {
    var destination = $(this).attr("href");
    console.log(destination);
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: $(destination).offset().top
    }, 1200);
			return false;
  });

});