// $(document).ready(function(){
//     $(function(){
//         "use strict";
//         $(window).on("scroll",function(){
//             var sc =$(window).scrollTop();
//             if(sc > 550){
//                 $("nav").addClass("bggbb");
//             }else {
//                 $("nav").removeClass("bggbb");
//             }
//         });
//     });
//  });


$(document).ready(function(){

$(".bag1").click(function(){
    $(".bag-part").toggle();
});

$(".body").click(function(){
    $(".bag-part").hide();
    });

    $(".search").click(function(){
        $(".search_input").show();
    });
    
    $(".xx").click(function(){
        $(".search_input").hide();
        });

        $(".div_item1>.plus").click(function(){
            var m=parseInt ($(".div_item1>.pag-in").val());
            $(".div_item1>.pag-in").val(m+1);
        });
        
        $(".div_item1>.minus").click(function(){
            var m=parseInt ($(".div_item1>.pag-in").val());
            if(m<1){
                $(".div_item1>.pag-in").val(0)
            }else{
                $(".div_item1>.pag-in").val(m-1)
            }
        });

        $(".div_item2>.plus").click(function(){
            var m=parseInt ($(".div_item2>.pag-in").val());
            $(".div_item2>.pag-in").val(m+1);
        });
        
        $(".div_item2>.minus").click(function(){
            var m=parseInt ($(".div_item2>.pag-in").val());
            if(m<1){
                $(".div_item2>.pag-in").val(0)
            }else{
                $(".div_item2>.pag-in").val(m-1)
            }
        });

        $(".nav_bars").click(function(){
            $(".right_bar").animate({right:'0px'},"slow");
        });

        $(".right_bar_x , .body").click(function(){
            $(".right_bar").animate({right:'-350px'},"slow");
        });

        $(".bars1").click(function(){
            $(".arrow").show();
            $(this).hide();
            $(".left_bar").animate({left:'0px'},"slow");
        })
        
        $(".body , .arrow").click(function(){
            $(".bars1").show();
            $(".arrow").hide();
            $(".left_bar").animate({left:'-350px'},"slow");
        })

        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });

        // $(".a-Gallery").hover(function(){
        //     $(".i-Gallery").animate({top:'40%', display: 'block'}, "100");
        // })

        // $(".a-Gallery").hover(function(){
        //     $(".p-Gallery").animate({bottom:'26%', display: 'block'}, "100");
        //     $(".i-Gallery").show();
        // }) 
        
        // $(".a-Gallery").mouseleave(function(){
        //     $(".i-Gallery").animate({top:'30%'});
        //     $(".i-Gallery").hide();
        // })
        // $(".a-Gallery").mouseleave(function(){
        //     $(".p-Gallery").animate({bottom:'26%'});
        // }) 

        // $(".a-Gallery").hover(function(){
        //     $(".Gallery-abcd").animate({top: '15px',
        //         bottom: '15px'
        //         ,left: '15px'
        //         ,right: '15px',display: 'block'}, "3000"
        //     );
        // }) 

        // $(".a-Gallery").mouseleave(function(){
        //     $(".Gallery-abcd").animate({top: '50px',
        //         bottom: '50px'
        //         ,left: '50px'
        //         ,right: '50px'
        //         , display: 'none' }
        //     );
        // })
        

        });
