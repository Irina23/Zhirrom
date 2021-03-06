jQuery(document).ready(function() {

    // scroll on top when history change
    /*
    if (window.localStorage.getItem('scrollTo')) {
        var scroll = window.localStorage.getItem('scrollTo');
        scroll = parseInt(scroll);
        alert(scroll);
        $('html, body').scrollTop(scroll);
        window.localStorage.removeItem('scrollTo');
    }
    $(window).on('popstate', function () {
        alert(scroll);
        window.localStorage.setItem('scrollTo', 1);
    });
    */

    //form validate
    jQuery("form").validate();

    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');


    if($(modal).hasClass('show')){
        overlay.fadeIn(100,
            function(){

                $('body').addClass('no-scroll');
            });

    }

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
        $(".phone_ru[name='phone'], .phone_ru[name='phone_contact']").mask("+7(999)999-9999");
        $(".phone_ua[name='phone'], .phone_ua[name='phone_contact']").mask("+3(9999)999-9999");
        $(".phone_by[name='phone'], .phone_by[name='phone_contact']").mask("+375(99)999-9999");
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

        var valCountry = $("form .select_country select").val();
        var divConunter = $("form .select_country select").closest('.select_country').next('.phone_resistered');
        var divConunter_phone2 = $("form .select_country select").closest('form').find('.contact_details .phone_resistered');
        if( valCountry == 'ua'){
            divConunter.find('input[name="phone"]').hide();
            divConunter.find('.phone_ua').show();
            divConunter_phone2.find('input[name="phone_contact"]').hide();
            divConunter_phone2.find('.phone_ua').show();

        }
        if( (valCountry == 'ru') || ( valCountry == 'kz' )){
            divConunter.find('input[name="phone"]').hide();
            divConunter.find('.phone_ru').show();
            divConunter_phone2.find('input[name="phone_contact"]').hide();
            divConunter_phone2.find('.phone_ru').show();

        }
        if( valCountry == 'by'  ){
            divConunter.find('input[name="phone"]').hide();
            divConunter.find('.phone_by').show();
            divConunter_phone2.find('input[name="phone_contact"]').hide();
            divConunter_phone2.find('.phone_by').show();

        }
        
        $('form .select_country select').change( function () {
            var valCountry2 = $(this).val();
            var divConunter2 = $(this).closest('.select_country').next('.phone_resistered');
            var divConunter2_phone2 = $(this).closest('form').find('.contact_details .phone_resistered');
            //console.log(divConunter);
            if( valCountry2 == 'ua'){
                divConunter2.find('input[name="phone"]').hide();
                divConunter2.find('.phone_ua').show();
                divConunter2_phone2.find('input[name="phone_contact"]').hide();
                divConunter2_phone2.find('.phone_ua').show();

            }
            if( (valCountry2 == 'ru') || ( valCountry2 == 'kz' )){
                divConunter2.find('input[name="phone"]').hide();
                divConunter2.find('.phone_ru').show();
                divConunter2_phone2.find('input[name="phone_contact"]').hide();
                divConunter2_phone2.find('.phone_ru').show();

            }
            if( valCountry2 == 'by'  ){
                divConunter2.find('input[name="phone"]').hide();
                divConunter2.find('.phone_by').show();
                divConunter2_phone2.find('input[name="phone_contact"]').hide();
                divConunter2_phone2.find('.phone_by').show();

            }
        });


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




    });


    //filter get
    /*
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
    */


    //blog page visaible 
    $('.blog .pagination_list').on('click', '.ias-trigger', function(e){
        e.preventDefault();
        $( ".blog" ).find('[name="page"]').val($(e.target).attr('href')[$(e.target).attr('href').length - 1]);
        $.ajax({
            type: "GET",
            url: "",
            success: function(data){
               
            }
        });
    });




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
    jQuery("#menu-mobile li.parent >a").click( function(event){
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

    

    ///mobile buttom more
    $(".buttom_more").on('click',function () {
        $(this).parent().find('.short').removeClass('short');
        $(this).remove();
    });



    // show or hide category in list products
    $(".list_product .list_category2 .show_all").on('click', function () {
        $(this).closest(".list_category2").addClass("open");
    });
    $(".list_product .list_category2 .hide_item").on('click', function () {
        $(this).closest(".list_category2").removeClass("open");
    });

    /*$('.slogan2 .number').animateNumber({
        number: $('.slogan2 .number').text(),
        duration: 2500,
        easing: "swing"
    });*/
    //$('.slogan3 .number').animateNumber({ number: 1000 }, 'slow');



    $(".slogan2 .number").prop("Counter", 0).animate({
        Counter: $('.slogan2 .number').text()
    }, {
        duration: 3000,
        easing: "swing",
        step: function(e) {
            $(this).text(Math.ceil(e))
        },
        complete: function() {
            $(this).text($(this).text().replace(/\B(?=(\d{3})+\b)/g, " "))
        }
    });

    $(".slogan3 .number").prop("Counter", 0).animate({
        Counter: $('.slogan3 .number').text()
    }, {
        duration: 5000,
        //easing: "swing",
        step: function(e) {
            $(this).text(Math.ceil(e))
        },
        complete: function() {
            $(this).text($(this).text().replace(/\B(?=(\d{3})+\b)/g, " "))
        }
    });



    $(document).countPlugin({
        'counter':'#count_buy',
        'countNow': '1999987',
        'countNew': '1999997'
    });


    $( ".page_wrapper.registration input[name='phone']" ).focus(function() {
        $( this ).closest('.phone_resistered').find( ".help_text" ).show();
        //console.log($( this ));
    });
    $( ".page_wrapper.registration input[name='phone']" ).focusout(function() {
        $( this ).closest('.phone_resistered').find( ".help_text" ).hide();
    });
    
});