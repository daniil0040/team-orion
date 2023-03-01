$('.responsive').slick({
  prevArrow: '<button type="button" class="my-slick-prev"></button>',
  nextArrow: '<button type="button" class="my-slick-next"></button>',
  infinite: true,
  speed: 400,
  slidesToScroll: 1,
  adaptiveHeight: false,
  slidesToShow: 1,
  variableWidth: false,
  infinite: false,
  waitForAnimate: false,
  fade: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: 'slick',
    },
  ],
  mobileFirst: true,
});
