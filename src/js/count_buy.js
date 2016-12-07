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

        var methods = {
            init: function(){
                methods.addNumber();
                methods.diffNumber();




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
                    var nubmer7 = $('.number7').text();
                    var number6 = $('.nubmer6').text();
                    //if(diffcount < 10){

                    var rest = 9 - nubmer7;
                    if(rest < diffcount){
                        //console.log('rest: '+rest);
                        //console.log('diffcount: '+diffcount);
                        var diffNubmer7 = diffcount - rest -1;
                        //console.log('diffNubmer7: '+diffNubmer7);

                        var animate = diffcount - diffNubmer7 + Number(nubmer7);
                        methods.diffNumber7(animate);
                        methods.diffNumber6();
                        console.log(number6);

                        if(diffNubmer7 > 9) {
                            methods.plusNumber6(diffNubmer7);
                            //console.log('diffNubmer7: '+diffNubmer7);
                        } else{
                            $('.number7').animateNumber({number: diffNubmer7});
                        }


                    } else{
                        var animate = diffcount + Number(nubmer7);
                        $('.number7').animateNumber({ number: animate}, 2000);
                    }


                    /*} else if(diffcount < 100){
                        console.log(diffcount);
                    }*/
                    
             
                }

            },

            loopNumber: function (diffcount) {
                var nubmer7 = 0;
                var rest = 9 - nubmer7;
                if(rest < diffcount){
                    console.log('rest: '+rest);
                    console.log('diffcount: '+diffcount);
                    var diffNubmer7 = diffcount - rest -1;
                    console.log('diffNubmer7: '+diffNubmer7);

                    var animate = diffcount - diffNubmer7 + Number(nubmer7);
                    methods.diffNumber7(animate);
                    methods.diffNumber6();

                    if(diffNubmer7 < 9) {
                        methods.plusNumber6(diffNubmer7);
                    } else{
                        $('.number7').animateNumber({number: diffNubmer7});
                    }


                } else{
                    var animate = diffcount + Number(nubmer7);
                    $('.number7').animateNumber({ number: animate}, 2000);
                }
                console.log("loopNumber");
            },
            diffNumber6: function () {
                var number6 = $('.nubmer6').text();
                
            },
            diffNumber6: function (number6) {

                var NewNubmer6 = Number(number6) + 1;
                $('.number6').animateNumber({ number: NewNubmer6 }, 2000);
                console.log("diffNumber6");
            },
            diffNumber7: function (animate) {

                $('.number7').animateNumber({ number: animate}, 2000);
                console.log("diffNumber7");

            },
            plusNumber6: function (diffNubmer7) {
                methods.diffNumber6();
                var newdiffNubmer7 = diffNubmer7 - 10;
                console.log("plusNumber6");
                //methods.diffNumber6();
                methods.loopNumber(newdiffNubmer7);
            }


        };
        methods.init();

    }


})(jQuery);