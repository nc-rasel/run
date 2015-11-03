
/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */


equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.column');
});


$(window).resize(function(){
  equalheight('.column');
});


 $(document).ready(function(e) {

  

  $('.bxslider').bxSlider({
    video: true,
    useCSS: true,
    touchEnabled: true,
    adaptiveHeight: true,
    pager: false
  });

$('.designer').bxSlider({
    minSlides: 2,
    maxSlides: 5,
    slideWidth: 220,
    slideMargin: 15,
    pager: false,
    moveSlides: 1
  });


   //showViewportSize();

$('.collections').bxSlider({
    minSlides: 2,
    maxSlides: 5,
    slideWidth: 220,
    slideMargin: 15,
    pager: false,
    moveSlides: 1
  });

$('.coloctions-slider').bxSlider({
  mode: 'vertical',
  slideWidth: 310,
  slideHeight: 200,
  minSlides: 5,
  slideMargin: 12,
  pager: false,
  moveSlides: 1
});

   // accordian

  $('.adCntnr div.acco2:eq(0)').find('div.expand:eq(0)').addClass('openAd').end() /*find the first child and opended by default, and add class openAd*/
  .find('div.collapse:gt(0)').hide().end()
  .find('div.expand').click(function() {
    $(this).toggleClass('openAd').siblings().removeClass('openAd').end()
    .next('div.collapse').slideToggle().siblings('div.collapse:visible').slideUp();
    return false;
  });

  // open subscription

  $(".open-popup-link,.contact-designer-popup").magnificPopup({
    type:'inline',
    midClick: true,

    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
      this.st.mainClass = this.st.el.attr('data-effect');
      }
    },

  });

    // Dynamically created popup
    $('.open-search-popup').magnificPopup({
      items: {
        removalDelay: 300,
        mainClass: 'mfp-fade',
        src: '<div class="white-popup">' +
        '<p>Dynamically created popup</p>' +
        '<p>Rony</p>' +
        '</div>',
        type: 'inline'
      },
      closeBtnInside: true
    });

 });
