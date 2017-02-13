/**
 * Created by Administrator on 2016/11/22 0022.
 */
function mstj(picSpeed,timerSpeed) {
    var $key = 0;
    var $circle = 0;
    $(".slider_body ul li:first").clone().appendTo($(".slider_body ul"));
    var timer = setInterval(autoplay, timerSpeed);
    function autoplay() {
        $key++;
        var $sliderBar = $(".slider_body ul")
        if ($key > $(".slider_body ul li").length - 1) {
            $key = 1;
            $sliderBar.css('left', 0);
        }
        $sliderBar.stop().animate({'left': -$key * $('.slider_body ul li').width()}, picSpeed);

        $circle++;
        $circle>$('.slider_body ol li').length-1?$circle=0:$circle;
        $('.slider_body ol li').eq($circle).addClass('lz_body3_current').siblings().removeClass('lz_body3_current');
    }
}



/*点击小圆点可以切换图片*/
$(".scroll ol li").click(function(event) {
    $(this).addClass('current').siblings().removeClass('current');
    $key=$(this).index();  /*要重新给key 和circle 赋值*/
    $circle=$(this).index();
    $(".scroll ul").stop().animate({"left":-$key*$(".scroll ul li").width()},picSpeed);
});