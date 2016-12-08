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
                //console.log(storage.number6);
            },
            
            addNumber: function (){
                var split = options.countNow.split('');
                for (var i = 0; i < 7; i++) {
                    var n = i+1;
                    $('.number'+n).text(split[i]);
                }
            },

            
            diffNumber: function (){
                //console.log("ggg");
                if(options.countNow < options.countNew ){

                    var diffcount = options.countNew - options.countNow;
                    /*if(diffcount > 20){
                        diffcount = 20;
                    }*/

                    //console.log(diffcount);


                        var rest = 9 - storage.number7;
                        //console.log(rest);
                        if (rest < diffcount) {

                            //var diffNubmer7 = diffcount - rest;
                            //console.log("diffNubmer7: " + diffNubmer7);
                            var animate = diffcount - Number(storage.number7);
                            //console.log("animate: " + animate);


                            //console.log(diffcount);
                            for (var i = 0; i < diffcount; i++) {
                                //console.log(storage.number7);

                                setTimeout(
                                    function () {

                                        storage.number7 = Number(storage.number7) + 1;
                                        if(storage.number7 == 10){
                                            storage.number7 = 0;
                                        }
                                        $('.number7').text(storage.number7);
                                        //console.log('number7:'+storage.number7 );
                                        //console.log(storage.number7);
                                        if(storage.number7 == 0){
                                            methods.diffNumber6();
                                        }
                                    },
                                    500 * i
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
                                        500 * i
                                    );

                            }
                        }

                    //}
                }

            },

            loopNumber: function () {
                storage.number7 = 0;
                var rest = 9 - number7;
                if(rest < diffcount){

                    var diffNubmer7 = diffcount - rest -1;
                    var animate = diffcount - diffNubmer7 + Number(storage.number7);
                    methods.diffNumber7(animate);
                    methods.diffNumber6();

                    if(diffNubmer7 < 9) {
                        methods.plusNumber6(diffNubmer7);
                    } else{
                        $('.number7').animateNumber({number: diffNubmer7});
                    }


                } else{
                    var animate = diffcount + Number(number7);
                    $('.number7').animateNumber({ number: animate}, 2000);
                }

            },

            diffNumber6: function () {
                storage.number6 = Number(storage.number6) + 1;
                //$('.number6').animateNumber({ number: NewNubmer6 }, 2000);
                $('.number6').text(storage.number6);
            },
            diffNumber7: function (animate) {
                $('.number7').animateNumber({ number: animate}, 2000);
            },
            plusNumber6: function (diffNubmer7) {
                methods.diffNumber6();
                var newdiffNubmer7 = diffNubmer7 - 10;
                methods.loopNumber(newdiffNubmer7);
            }

        };
        methods.init();

    }

})(jQuery);