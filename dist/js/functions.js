jQuery(document).ready(function() {

    //form validate
    jQuery(".call_back_form, .form_visa").validate({

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
            controls: false
            //adaptiveHeight: true
            //auto: true

        });




    });














});