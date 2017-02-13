$(function(){
    change();
})

        var change = function(){
            var divs = $(".lr_title").children("div");
//            console.log(divs);
                for(var i = 0;i < divs.length; i++) {
                    $(divs[i]).on('click', function () {
                        $(this).addClass('special').siblings().removeClass('special')
                    })
                }
            }

