
$(document).ready(function () {

  $.getScript("./js/jquery.mask.js", function(){});
  $.getScript("./js/jquery.validate.min.js", function(){});
  $.getScript("./js/swiper-bundle.min.js", function(){
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
});
  $.getScript("./js/common.js", function(){});

  var showComments = document.querySelector('.comments-button--load');
  showComments.addEventListener('click', function() {
    var array = document.querySelectorAll('.comment--hidden');
    console.log(array);
    var length = 3;
    if (length < array.length) {
      length = array.length;
    };
    
    for (var i=0; i<3; i++) {
      console.log(array[i].classList);
      array[i].classList.remove('comment--hidden');
      console.log(array[i]);
    };
  }, {passive: true});

});

