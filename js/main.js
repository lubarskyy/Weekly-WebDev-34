$(document).ready(function(){

  $('.footer__back-to-top').click(function(){
    $('body').animate({
      scrollTop: $('.header').offset().top
    }, 1500);
  });

  const services = $('.services').children();

  $(services[1]).on('mouseenter', function(){

    if( $(services[1]).hasClass('services__block--right') ){

      $(services[1]).removeClass('services__block--right');
      $(services[1]).addClass('services__block--left');
      $(services[0]).removeClass('services__block--left');
      $(services[0]).addClass('services__block--right');

    };
  });

  $(services[0]).on('mouseenter', function(){

    if( $(services[0]).hasClass('services__block--right') ){

      $(services[0]).removeClass('services__block--right');
      $(services[0]).addClass('services__block--left');
      $(services[1]).removeClass('services__block--left');
      $(services[1]).addClass('services__block--right');

    };
  });
});
