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
                methods.diffNumber7();




            },


            addNumber: function (){
                var split = options.countNow.split('');
                for (var i = 0; i < 7; i++) {
                    var n = i+1;
                    $('.number'+n).text(split[i]);
                }
            },



            diffNumber7: function (){
                if(options.countNow < options.countNew ){

                    var diffcount = options.countNew - options.countNow;
                    if(diffcount < 10){

                        var nubmer7 = $('.number7').text();
                        var rest = 9 - nubmer7;
                        if(rest < diffcount){
                            var diffNubmer7 = diffcount - rest -1;
                            var animate = diffcount - diffNubmer7 + Number(nubmer7);
                            //console.log(diffNubmer7);
                            $('.number7').animateNumber({ number: animate}, 2000);

                            methods.diffNumber6();

                            $('.number7').animateNumber({ number: diffNubmer7 });


                        } else{
                            var animate = diffcount + Number(nubmer7);
                            $('.number7').animateNumber({ number: animate}, 2000);
                        }

                    }
                }

            },

            diffNumber6: function () {
                var nubmer6 = $('.nubmer6').text();
                var NewNubmer6 = Number(nubmer6) + 1;
                $('.number6').animateNumber({ number: NewNubmer6 }, 2000);
            }


        };
        methods.init();

    }


})(jQuery);