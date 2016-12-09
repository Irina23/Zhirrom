/**
 * Created by ira on 16.7.12.
 */
///#count_buy
(function () {
    $.fn.countPlugin = function(options){
        var options = $.extend({
            'counter':'',
            'countNow': '',
            'countNew': ''

        }, options);
        var storage = {};
        var methods = {
            init: function(){
                methods.numberSave();
                methods.addNumber();
                methods.diffNumber();
                
            },

            numberSave: function (){
                storage.number7 = $('.number7').text();
                storage.number6 = $('.number6').text();
                storage.number5 = $('.number5').text();
                storage.number4 = $('.number4').text();
                storage.number3 = $('.number3').text();
                storage.number2 = $('.number2').text();
                storage.number1 = $('.number1').text();

            },
            
            addNumber: function (){
                var split = options.countNow.split('');
                for (var i = 0; i < 7; i++) {
                    var n = i+1;
                    $('.number'+n).text(split[i]);
                }
            },

            
            diffNumber: function (){
                
                if(options.countNow < options.countNew ){

                    var diffcount = options.countNew - options.countNow;
                    var rest = 9 - storage.number7;

                    if (rest < diffcount) {
                        var animate = diffcount - Number(storage.number7);
                        for (var i = 0; i < diffcount; i++) {

                            setTimeout(
                                function () {

                                    storage.number7 = Number(storage.number7) + 1;
                                    if(storage.number7 == 10){
                                        storage.number7 = 0;
                                        methods.diffNumber6();
                                    }
                                    $('.number7').text(storage.number7);
                                },
                                600 * i
                            );

                        }


                    } else {
                        // > 9
                        for (var i = 0; i < diffcount; i++) {

                                setTimeout(

                                    function () {

                                        storage.number7 = Number(storage.number7) + 1;
                                        $('.number7').text(storage.number7);
                                        //console.log('number7:'+storage.number7 );
                                    },
                                    600 * i
                                );
                        }
                    }

                }
            },



            diffNumber6: function () {
                if(storage.number6 == 9){
                    storage.number6 = 0;
                    $('.number6').text(storage.number6);
                    methods.diffNumber5();
                } else{
                    storage.number6 = Number(storage.number6) + 1;
                    $('.number6').text(storage.number6);
                }
            },
            diffNumber5: function () {


                if(storage.number5 == 9){
                    storage.number5 = 0;
                    $('.number5').text(storage.number5);
                    methods.diffNumber4();
                } else{
                    storage.number5 = Number(storage.number5) + 1;
                    $('.number5').text(storage.number5);
                }

            },
            diffNumber4: function () {


                if(storage.number4 == 9){
                    storage.number4 = 0;
                    $('.number4').text(storage.number4);
                    methods.diffNumber3();
                } else{
                    storage.number4 = Number(storage.number4) + 1;
                    $('.number4').text(storage.number4);
                }

            },
            diffNumber3: function () {


                if(storage.number3 == 9){
                    storage.number3 = 0;
                    $('.number3').text(storage.number3);
                    methods.diffNumber2();
                } else{
                    storage.number3 = Number(storage.number3) + 1;
                    $('.number3').text(storage.number3);
                }

            },
            diffNumber2: function () {


                if(storage.number2 == 9){
                    storage.number2 = 0;
                    $('.number2').text(storage.number2);
                    methods.diffNumber1();
                } else{
                    storage.number2 = Number(storage.number2) + 1;
                    $('.number2').text(storage.number2);
                }

            },
            diffNumber1: function () {

                if(storage.number1 == 9){
                    //storage.number1 = 0;
                    //$('.number1').text(storage.number1);
                } else{
                    storage.number1 = Number(storage.number1) + 1;
                    $('.number1').text(storage.number1);
                }
            },
            diffNumber7: function (animate) {
                $('.number7').animateNumber({ number: animate}, 2000);
            }

        };
        methods.init();

    }

})(jQuery);