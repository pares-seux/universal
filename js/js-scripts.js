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
}, {passive: true})

