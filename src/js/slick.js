$('.responsive').slick({
  // prevArrow: '<button type="button" class="my-slick-prev"></button>',
  // nextArrow: '<button type="button" class="my-slick-next"></button>',
  prevArrow: '<button type="button" class="my-slick-prev">&#8249;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&#8250;</button>',
  infinite: true,
  speed: 400,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
