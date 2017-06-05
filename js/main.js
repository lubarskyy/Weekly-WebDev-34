$(document).ready(function(){

  $('.footer__back-to-top').click(function(){
    $('body').animate({
      scrollTop: $('.header').offset().top
    }, 1500);
  });

  $(window).scroll(function() {
    let radius = $(window).scrollTop() / 90;
    $('.splash__icon').css({ transform: 'rotate(' + radius + 'rad)' });
  });

  $( $('.services').children()[1] ).on('mouseenter', function(){

    if( $( $('.services').children()[1] ).hasClass('services__block--right') ){

      $( $('.services').children()[1] ).removeClass('services__block--right');
      $( $('.services').children()[1] ).addClass('services__block--left');
      $( $('.services').children()[0] ).removeClass('services__block--left');
      $( $('.services').children()[0] ).addClass('services__block--right');

    };
  });

  $( $('.services').children()[0] ).on('mouseenter', function(){

    if( $( $('.services').children()[0] ).hasClass('services__block--right') ){

      $( $('.services').children()[0] ).removeClass('services__block--right');
      $( $('.services').children()[0] ).addClass('services__block--left');
      $( $('.services').children()[1] ).removeClass('services__block--left');
      $( $('.services').children()[1] ).addClass('services__block--right');

    };
  });
});
