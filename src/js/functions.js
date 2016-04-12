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

        jQuery('.slider').bxSlider({
            nextText: "",
            prevText: ""
            //controls: false
            //adaptiveHeight: true
            //auto: true

        });

        slider=$('.slider_product').bxSlider({
            pagerCustom: '#bx-pager',
            nextText: "",
            prevText: "",
            onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                console.log(currentSlideHtmlObject);
                $('.active-slide').removeClass('active-slide');
                $('.slider_product>div').eq(currentSlideHtmlObject + 1).addClass('active-slide')
            },
            onSliderLoad: function () {
                $('.slider_product>div').eq(1).addClass('active-slide')
            },

        });




    });



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
        //var opacity = 1, toOpacity = 0, duration = 500;
        //$(".products").fadeTo(duration,toOpacity).fadeTo(duration,opacity).delay(5000).addClass('preview_block');

    });



    jQuery(".preview .preview_block").click(function(){
        preview_block();
        //var opacity = 1, toOpacity = 0, duration = 500;
        //$(".products").fadeTo(duration,toOpacity).fadeTo(duration,opacity).delay(5000).addClass('preview_block');

    });


    /*jQuery("#filter").on("input",function(){
        event.preventDefault();
        console.log( jQuery( this ).serialize() );
    });*/

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