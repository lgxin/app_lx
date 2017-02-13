window.onload = function(){
    banner();
}
/*轮播图*/
function banner(){
    var banner = document.querySelector('#yk_banner');
    /*图片的宽度  或者说  轮播图大盒子的宽度*/
    var width = banner.offsetWidth;
    /*图片盒子*/
    var imageBox = banner.querySelector('ul:first-child');
    /*点盒子*/
    var pointBox = banner.querySelector('ul:last-child');
    /*所有的点*/
    var points = pointBox.querySelectorAll('li');


   console.log(123);
    var addTransition = function(){
        imageBox.style.webkitTransition = "all .2s";/*兼容*/
        imageBox.style.transition = "all .2s";
    }
    /*删除过度*/
    var removeTransition = function(){
        imageBox.style.webkitTransition = "none";/*兼容*/
        imageBox.style.transition = "mone";
    }
    /*设置定位*/
    var setTranslateX = function(x){
        imageBox.style.webkitTransform = "translateX("+x+"px)";
        imageBox.style.transform = "translateX("+x+"px)";
    }


    var index = 1;
    var timer = setInterval(function(){
        index ++ ;
        addTransition();
        setTranslateX(-index*width);
    },3000);

    itcast.transitionEnd(imageBox,function(){
        if(index >= 7){
            index = 1;
            removeTransition();
            setTranslateX(-index*width);
        }else if(index <= 0){
            index = 6;
            removeTransition();
            setTranslateX(-index*width);
        }
        setPoint();
    });

    var setPoint = function(i){
        /*去除当前样式*/
        for(var i = 0 ; i < points.length ; i ++){
            points[i].className = " ";
        }

        points[index-1].className = "now";
    }

    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isMove = false;
    imageBox.addEventListener('touchstart',function(e){
        clearInterval(timer);
        startX = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove',function(e){
        isMove = true;
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        console.log(distanceX);

        removeTransition();
        setTranslateX(-index*width+distanceX);
    });
     window.addEventListener('touchend',function(e){

        if(Math.abs(distanceX) > (width/3) && isMove){
            if(distanceX>0){
                index --;
            }else{
                index ++;
            }
            addTransition();
            setTranslateX(-index*width);
        }else{
            addTransition();
            setTranslateX(-index*width);
        }

        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;

        /*加上定时器*/
        clearInterval(timer);
        timer = setInterval(function(){
            index ++ ;

            addTransition();
            setTranslateX(-index*width);
        },3000);
    });
}