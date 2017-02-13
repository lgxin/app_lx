(function(){
    //轮播图 (function(){
    //})(window)避免js冲突
    var banner = document.querySelector('.gc_banner');
    var width = banner.offsetWidth;
    var imageBox = banner.querySelector('ul:first-child');
    var pointBox = banner.querySelector('ul:last-child');
    var points = pointBox.querySelectorAll('li');
	var addTransition = function(){
		imageBox.style.transition = 'all 0.2s';
		imageBox.style.webkitTransition = "all 0.2s";
	}
	var removeTransition = function(){
		imageBox.style.transition = 'none';
		imageBox.style.webkitTransition = 'none';
	}
	var setTranslateX = function(x){
		imageBox.style.transform = "translateX("+x+"px)";
		imageBox.style.webkitTransform = "translateX("+x+"px)";
	}

	var index = 1;
	var timer = setInterval(function(){
		index++;
		addTransition();
		setTranslateX(-index*width );
	},2000);
	
	itcast.transitionEnd(imageBox,function(){
		if(index>=6){
			index = 1;
			removeTransition();
			setTranslateX(-index*width);
		}
		if(index<=0){
			index = 5;
			removeTransition();
			setTranslateX(-index*width);
		}
		setPoint();
	});

	var setPoint = function(i){
		for( i = 0;i<points.length;i++){
			points[i].className = "";
		}
		points[index-1].className = 'gc_now';
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
        clearInterval(timer);
        timer = setInterval(function(){
            index ++ ;
            addTransition();
            setTranslateX(-index*width);
        },2000);
    });   
})(window)
