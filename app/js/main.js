// var containerE1 = document.querySelector('.product-one__box');
// var mixer = mixitup(containerE1);

$(function() {

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        step: 0.01,
        from: 200,
        to: 500,
        onStart: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.top-slider__inner').slick({
        dots: true,
        infinite: false,
        arrows: false,
    });

    $('.filter__box').on('click', function() {
        var rotateArrow = $(this).children();
        $(this).removeClass('filter__content--arrow-down');
        rotateArrow.toggleClass('filter__content--arrow-down');
    })



    $.easing.def = "easeInOutQuad";
    $('.filter-category__content').on('click', function(e) {
        var dropDown = $(this).next();
        $('.dropdown').not(dropDown).slideUp('slow');
        dropDown.slideToggle('slow');
        e.preventDefault();
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
    });

    $('.product-card__link-heart').on("click", function() {
        $(this).toggleClass('like--active');
    });

    $('.card__btn').on('click', function() {
        $(this).css('display', 'none');
        var wrapperVisible = $(this).next();
        wrapperVisible.css('display', 'block');
    });

    $('.card__item-heart').on("click", function() {
        $(this).toggleClass('like--active');
    });
    $('.pagination__item').on("click", function() {
        $(this).toggleClass('pagination__item--active');
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