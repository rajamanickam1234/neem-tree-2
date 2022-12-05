(function ($) {
    $(function () {
        $('nav ul li > a:not(:only-child)').click(function (e) {
            $(this)
                .siblings('.nav-dropdown')
                .slideToggle()
            $('.nav-dropdown')
                .not($(this).siblings())
                .hide()
            e.stopPropagation()
        })
        $('html').click(function () {
            $('.nav-dropdown').hide()
        })
    })
})(jQuery);


$('#slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    arrows:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });


  $('#company').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
  });

  $('#card-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,  
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });
// Counter To Count Number Visit
var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 4000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter) + "+");
        }
      });
    });
    a = 1;// Md.Asaduzzaman Muhid
  }
});