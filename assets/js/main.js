(function ($) { 
	"use strict"; // this function is executed in strict mode	

    
  
    $(function(){
        $('#menu').slicknav();
    });
    
    
$(document).ready(function (){ 
    $('.stage-padding-double-box-slider').owlCarousel({
       stagePadding:150,
        loop:true,
      
        autoplay:false,
        nav:true,
        navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'], 
        responsive:{
            0:{
                items:1,
                stagePadding:20,
            },
            768:{
                items:1,
                stagePadding:100,
            },
            1000:{
                items:2,
                stagePadding:80,
            },
             1200:{
                items:3,
                stagePadding:150,
            }
        }
    });
});  


$(document).ready(function (){ 
    $('.hero-slider-two').owlCarousel({
         loop:true, 
        autoplay:false,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], 
        responsive:{
            0:{
                items:1,
             },
            768:{
                items:1,
             },
            1000:{
                items:1,
             },
             1200:{
                items:1,
             }
        }
    });
});  



 


})(jQuery);	
  

