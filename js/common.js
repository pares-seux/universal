$(document).ready(function () {

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar-menu').classList.toggle('navbar-menu--visible');
}, {passive: true})

var flag = document.querySelectorAll('.flag');
flag.forEach(function(e) {
  e.addEventListener('click', function() {
    this.classList.toggle('flag--active');
  });
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

 
  $(".scroll").on("click", function() {
    var destination = $(this).attr("href");
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: $(destination).offset().top
    }, 1200);
			return false;
  });

});