// SLIDERS
$(document).ready(function(){
    $('.slider__body').slick({
        dots:true,
        arrows:false,
        sliderToShow:1,
        autoplaySpeed: 3000,
        adaptiveHeight:true,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prewArrow:'<button type="button" class="slick-prew"></button>',
        responsive: [{
                breakpoint:768,
                settings:{}
            }]
      
    });
});

// if($('.slider__body').lenght>0){
//    $('.slider__body').slick({
//         dots:true,
      
// accessibility:false,
// sliderToShow:1,
// autoplaySpeed: 3000,
// adaptiveHeight:true,
// nextArrow:'<button type="button" class="slick-next"></button>',
// prewArrow:'<button type="button" class="slick-prew"></button>',
// responsive: [{
//     breakpoint:768,
//     settings:{}
// }]
//     });
// }

