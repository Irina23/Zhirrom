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




    });



    jQuery(".active_sort").click(function(){

        jQuery(this).next("ul").slideToggle();

    });

    jQuery(".sort_by li").click(function(){
        var active_text=jQuery(this).text();
        jQuery(this).closest(".sort_by").find(".active_sort").text(active_text);
        jQuery(this).addClass("active").siblings().removeClass('active');
        jQuery(this).closest("ul").slideToggle();

    });

    jQuery(".preview li").click(function(){

        jQuery(this).addClass("active").siblings().removeClass('active');


    });










});