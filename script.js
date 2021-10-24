// Кнопка наверх

jQuery(document).ready(function () {
  const btn = $('.btn__top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 900) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
});

// Меню-бургер

$(document).ready(function() {
  $('.menu-burger').click(function() {
      $('.menu-burger').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});
$(document).ready(function() {
  $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('fixed-page');
  });
});


// Плавная прокрутка

$("a.scroll").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 700);
  return false;
});

// PriceList

$(document).ready(function(){
  $('#name').on('change', function(){
    $('.data').hide();
    $('#' + $(this).val()).fadeIn(700);
  }).change();
});



l
