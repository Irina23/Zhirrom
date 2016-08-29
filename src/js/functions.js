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

        $('.related_products .products, .history_products .products').owlCarousel({
            loop:true,
            //margin:35,
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
                    items:4
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
    
  
   
    



    //filter block / list
    jQuery(".preview label").click(function(){

        jQuery(this).closest("li").addClass("active").siblings().removeClass('active');
        //var $radio_checked = jQuery(this).data('value');
        //console.log($radio_checked);


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
    $("#history_orders .row .open").click(function () {
        $(this).closest(".row").toggleClass("active").find('.order_list').slideToggle();
    });
    $(".faq h3").click(function () {
        $(this).toggleClass('active').next('.content_block').slideToggle();
    });

    
    // private_office order add cart
    $("#history_orders .repeat_order").click(function () {
        var quantityValue = $(this).closest(".order").find('input[name="quantity"]').attr('value');
        $("#add_cart input[type='number']").attr('value', quantityValue);
    });
    
    ///mobile buttom more
    $(".buttom_more").on('click',function () {
        $(this).parent().find('.short').removeClass('short');
        $(this).remove();
    });



    // show or hide category in list products
    $(".list_product .list_category .show_all").on('click', function () {
        $(this).closest(".list_category").addClass("open");
    });
    $(".list_product .list_category .hide_item").on('click', function () {
        $(this).closest(".list_category").removeClass("open");
    });
});