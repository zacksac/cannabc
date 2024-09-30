


 



if ($(window).width() <= 1024) {
  $(".explore .expaa").click(function(){
    //event.preventDefault();
   // $(".t4s-push-menu-btn").click();
        
    })
  $('.explore').click(function () {
      console.log("test");
      // $(".msmenu1").hide();
      $('.explore').not(this).find(".msmenu1").hide();
       $(this).find('.msmenu1').fadeToggle(500);
      
     });

$(window).click(function() {
 $(".msmenu1").hide();
});

$('.explore').click(function(event){
  event.stopPropagation();
});


  
}else{
$('.explore').mouseenter(function () {
       $(this).find('.msmenu1').fadeIn(500);
      
     });

 $('.explore').mouseleave(function () {
        $(this).find('.msmenu1').hide();
     }
 ).mouseleave();


}

setTimeout(function(){
  var swiper = new Swiper('.swiper1', {
  // Default parameters
  slidesPerView: 6,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
})
}, 1000);
  

jQuery(".accordion_head").on("click", function() {
    jQuery(".accordion_body").is(":visible") && (jQuery(".accordion_body").slideUp(300),
    jQuery(".plusminus").text("+")),
    jQuery(this).next(".accordion_body").is(":visible") ? (jQuery(this).next(".accordion_body").slideUp(300),
    jQuery(this).children(".plusminus").text("+"),
    jQuery(this).removeClass("active")) : (jQuery(this).next(".accordion_body").slideDown(300),
    jQuery(this).children(".plusminus").text("-"),
    jQuery(this).addClass("active"))
})
