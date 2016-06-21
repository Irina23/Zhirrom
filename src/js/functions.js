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
                //required: true

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
                $('body').addClass('no-scroll');
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                overlay.fadeOut(400);
                $(".message_modal").removeClass("show");
                $('body').removeClass('no-scroll');
            }
        );
    });


    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            modal.animate({opacity: 0}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                    $(".message_modal").removeClass('show');
                    $('body').removeClass('no-scroll');

                }
            );
    });






    jQuery(window).load(function() {
        $("[name='data']").mask("99-99-9999");

        $('#preloader').fadeOut('slow',function(){$(this).remove();});
        //bxSlider
        jQuery('.slider').bxSlider({
            nextText: "",
            prevText: ""
            //controls: false
            //adaptiveHeight: true
            //auto: true

        });

        jQuery('select').selectbox();


        $('[id^="slider_product"]').bxSlider({
            pagerCustom: '[id^="bx-pager"]',
            nextText: "",
            prevText: "",
            infiniteLoop: false
            /*onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
             console.log(currentSlideHtmlObject);
             $('.active-slide').removeClass('active-slide');
             $('.slider_product>div').eq(currentSlideHtmlObject + 1).addClass('active-slide')
             },
             onSliderLoad: function () {
             $('.slider_product>div').eq(1).addClass('active-slide')
             }*/

        });




        $('.home .list_brands').owlCarousel({
            loop:true,
            margin:35,
            nav:true,
            responsive:{
                0:{
                    items:1,
                    margin: 0
                },
                600:{
                    items:3
                },
                1000:{
                    items:7
                }
            }
        });




    });



    //filter get
    function showValues(clear) {
        var filter_data, $el;

        $el = $( "#filter" );

        filter_data = $el.serialize();
        //console.log( filter_data );
        $.ajax({
            type: "GET",
            url: "/filter",
            data: filter_data,
            success: function(data){
                //console.log(data);
                if (clear) {
                    jQuery(".list_product").html(data);
                } else {
                    jQuery(".list_products").find('.pagination_list ul').remove();
                    jQuery(".list_products").html(jQuery(".list_products").html() + data);
                }
            }
        });

    }
    $('.list_products').on('click', '.next a, .prev a', function (e) {
        e.preventDefault();
        $( "#filter" ).find('[name="page"]').val($(e.target).attr('href')[$(e.target).attr('href').length - 1]);
        showValues();
    });
    jQuery( "#filter input" ).change( function () {
        $( "#filter" ).find('[name="page"]').val(1);
        showValues(true);
    });
    showValues();







//zoom
    $(".zoomContainer").remove();

    $("#slider_product1 .product-zoom0").elevateZoom({
        zoomType: "inner",
        cursor: 'crosshair',
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750

    });

    $(".productfull [id^='bx-pager'] a").click(function() {
        $(window).resize();
        $(".zoomContainer").remove();
        //var content_slider = $(this).closest('.slider_filter_color').attr('data-class');
        var content_img = $(this).attr('data-class');
        //var main_content = '#'+content_slider +' .'+ content_img;
        var main_content = '#slider_product1 .'+ content_img;
        //console.log(main_content);
        $(main_content).elevateZoom({
            zoomType: "inner",
            cursor: 'crosshair',
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750

        });

    });


    if (jQuery(window).width() <= 959) {
        $(".zoomContainer").remove();
    }





//sort
    jQuery(".active_sort,.active_size,.active_color").click(function(){

        jQuery(this).next("ul").slideToggle();

    });

    jQuery(".sort_by li").click(function(){
        var active_text=jQuery(this).text();
        jQuery(this).closest(".sort_by").find(".active_sort").text(active_text);
        jQuery(this).addClass("active").siblings().removeClass('active');
        jQuery(this).closest("ul").slideToggle();
        var $data_val = jQuery(this).data('value');
        $("[name='sort_by']").attr('value', $data_val);

    });
    jQuery(".items_page li").click(function(){
       
        var $data_val = jQuery(this).data('count');
        $("[name='items_page']").attr('value', $data_val);

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


        //slider filter color and zoom
        var customType = jQuery(this).attr('data-filter');


        /*$(window).resize();
        $(".zoomContainer").remove();
        jQuery('.slider_filter_color').each(function(){
            if(jQuery(this).attr('data-filter').indexOf(customType) < 0) {
                jQuery(this).css("opacity", 0).removeClass("active");

            }
            else {
                jQuery(this).css("opacity", 1).addClass("active");
                var content_slider = $(this).attr('data-class');
                var content_img = $(this).find('[id^="bx-pager"] a.active').attr('data-class');
                //console.log(content_slider);
                var main_content = '#'+content_slider +' .'+ content_img;
                //console.log(main_content);
                $(main_content).elevateZoom({
                     zoomType: "inner",
                     cursor: 'crosshair',
                     zoomWindowFadeIn: 500,
                     zoomWindowFadeOut: 750

                });
            }


        });*/








    });



    //filter block / list
    jQuery(".preview li").click(function(){

        jQuery(this).addClass("active").siblings().removeClass('active');
        var $data_val = jQuery(this).data('value');
        //console.log($data_val);
        $("[name='preview']").attr('value', $data_val);

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
    function preview_block() {

        setTimeout(hideproducts, 0);
        setTimeout(removeClass, 300);
        setTimeout(showproducts, 600);


    }
    function preview_list() {

        setTimeout(hideproducts, 0);
        setTimeout(addClass, 300);
        setTimeout(showproducts, 600);


    }
    jQuery(".preview .preview_block").click(function(){
        preview_block();



    });
    jQuery(".preview .preview_list").click(function(){
        preview_list();

    });
//end sort











    jQuery("#menu-icon, .filter_products  h2 ").on("click", function(){
        jQuery(this).next().slideToggle();
    });
    jQuery("header.mobile li.parent >a").click( function(event){
        event.preventDefault();
        jQuery(this).closest(".parent").find(".drop-menu").slideToggle();
        jQuery(this).closest(".parent").toggleClass("open");
    });


    //accordeon
    $("#history_orders .row").click(function () {
        $(this).find('.order_list').slideToggle();
    });
    $(".faq h3").click(function () {
        $(this).next('.content_block').slideToggle();
    });
});