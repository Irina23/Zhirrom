jQuery(document).ready(function() {

    //form validate
    jQuery("form").validate({

        rules:{
            name:{
                required: true,
                minlength: 2
            },
            phone:{
                required: true,
                digits: true
            },
            email:{
                required: true,
                email: true
            },
            address:{
                required: true

            },
            iin:{
                required: true,
                digits: true
            },
            assortment:{
                required: true

            },
            pass:{
                required: true

            }

        }

    });

    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                overlay.fadeOut(400);
            }
        );
    });



    jQuery(window).load(function() {

        $('#preloader').fadeOut('slow',function(){$(this).remove();});

        jQuery('.slider').bxSlider({
            nextText: "",
            prevText: ""
            //controls: false
            //adaptiveHeight: true
            //auto: true

        });


        $('[id^="slider_product"]').bxSlider({
            pagerCustom: '[id^="bx-pager"]',
            nextText: "",
            prevText: ""
            /*onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
             console.log(currentSlideHtmlObject);
             $('.active-slide').removeClass('active-slide');
             $('.slider_product>div').eq(currentSlideHtmlObject + 1).addClass('active-slide')
             },
             onSliderLoad: function () {
             $('.slider_product>div').eq(1).addClass('active-slide')
             }*/

        });






    });


    $('[id^="bx-pager"]').each(function(){
        var height_bx_pager = $(this).height();
        var main_height = height_bx_pager +490;
        //$(this).closest(".slider_filter_color").css("height", main_height);
        var max_height = 650;
        if (max_height < main_height){
            max_height = main_height;
            //console.log(max_height);
            $(".product_info .image ").css("height", max_height);
        }

    });
//sort
    jQuery(".active_sort,.active_size,.active_color").click(function(){

        jQuery(this).next("ul").slideToggle();

    });

    jQuery(".sort_by li").click(function(){
        var active_text=jQuery(this).text();
        jQuery(this).closest(".sort_by").find(".active_sort").text(active_text);
        jQuery(this).addClass("active").siblings().removeClass('active');
        jQuery(this).closest("ul").slideToggle();

    });
    jQuery(".select_size li").click(function(){
        var active_text=jQuery(this).text();
        jQuery(this).closest(".value").find(".active_size").text(active_text);
        jQuery(this).addClass("active").siblings().removeClass('active');
        jQuery(this).closest("ul").slideToggle();

    });
    jQuery(".select_color li").click(function(){
        var active_text=jQuery(this).text();
        jQuery(this).closest(".value").find(".active_color").text(active_text);
        jQuery(this).addClass("active").siblings().removeClass('active');
        jQuery(this).closest("ul").slideToggle();
        //jQuery('[id^="bx-pager"] a:first-child').addClass("active").siblings().removeClass('active');
        //jQuery('[id^="slider_product"]').css("translate3d", "0px, 0px, 0px!important");

        var customType = jQuery(this).attr('data-filter');
        //console.log(customType);

        jQuery('.slider_filter_color').each(function(){
            if(jQuery(this).attr('data-filter').indexOf(customType) < 0) jQuery(this).css("opacity", 0).removeClass("active");
            else jQuery(this).css("opacity", 1).addClass("active");
        });


    });

    jQuery(".preview li").click(function(){

        jQuery(this).addClass("active").siblings().removeClass('active');


    });
    function hideproducts() {
        $(".products").css("opacity", 0);

    }

    function showproducts() {
        $(".products").css("opacity", 1);

    }
    function removeClass() {
        $(".products").removeClass('preview_block');
    }
    function addClass() {
        $(".products").addClass('preview_block');

    }
    function preview_list() {

        setTimeout(hideproducts, 0);
        setTimeout(removeClass, 300);
        setTimeout(showproducts, 600);


    }
    function preview_block() {

        setTimeout(hideproducts, 0);
        setTimeout(addClass, 300);
        setTimeout(showproducts, 600);


    }
    jQuery(".preview .preview_list").click(function(){
        preview_list();



    });
    jQuery(".preview .preview_block").click(function(){
        preview_block();

    });
//end sort






    function showValues() {
        var filter_data = $( "#filter" ).serialize();
        console.log( filter_data );
        $.ajax({
            type: "GET",
            url: "list_product.html",
            data: filter_data,
            success: function(data){

            }
        });
    }
    jQuery( "#filter li, #filter input" ).on( "click", showValues ).on( "change", showValues );

    showValues();







});