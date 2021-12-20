$(function(){

AOS.init({
	once: true,
});

$('#nav-icon4').click(function(){
  $(this).toggleClass('open');
  $('.mainMenu').toggleClass('activeMenu');
});

$('.testiSlider').slick({
	dots: false,
	arrows: true,
	autoplay: false,
	autoplaySpeed: 2000,
	infinite: true,
});

$('.uniqTxtSlider').slick({
	dots: false,
	arrows: true,
	autoplay: false,
	autoplaySpeed: 2000,
	infinite: true,
});

$('.partsSlider').slick({
	dots: false,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        infinite: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// var $status = $('.pagingInfo');
// 	$('.banSlider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     var i = (currentSlide ? currentSlide : 0) + 1;
//     $status.text(i + '/' + slick.slideCount);
// });


var $status1 = $('.pagingInfo2');
	$('.banSlider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status1.text('/' + slick.slideCount);
});

var $status2 = $('.pagingInfo1');
	$('.banSlider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var q = (currentSlide ? currentSlide : 0) + 1;
    $status2.text(q);
});

    $('.banSlider').slick({
		dots: true,
		arrows: true,
		autoplay: false,
    });





// Smooth Scroll 
	jQuery(function() {
		jQuery('.smoothClick, .smoothLink > a').click(function() {
		
		var dis = jQuery(this);

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = jQuery(this.hash);
		  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top-80
			}, 1000);
			return false;
		  }
		}
	  });
	});
	



if (window.matchMedia("(max-width: 767px)").matches) {
  $('.xs-slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
  });

/*--footer menu toggle script--*/
$('.footer h3').click(function(){
  $(this).parents('.col-12').find('ul').slideToggle();
  $(this).toggleClass('active')

});



} 







}); //---Main Function Close