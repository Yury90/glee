// var containerE1 = document.querySelector('.product-one__box');
// var mixer = mixitup(containerE1);

$(function() {
  $('.top-slider__inner').slick({
    dots: true,
    infinite: false,
    arrows: false,
  });


  var contain1 = document.querySelector('[data-ref="container-1"]');
  var contain2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer_1 = mixitup(contain1, config);
  var mixer_1 = mixitup(contain2, config);

});