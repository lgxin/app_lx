//Ҫ���£�������
var index = 0;
var index2 = 0;
var ul = document.querySelector(".carousel_pic");
var ul2 = document.querySelector(".carousel_pic_b");

var video_imgWidth = 313;
/*���ö�λ*/
var setTranslateX = function(x){
    ul.style.webkitTransform = "translateX("+x+"px)";
    ul.style.transform = "translateX("+x+"px)";
};
var setTranslateX2 = function(x){
    ul2.style.webkitTransform = "translateX("+x+"px)";
    ul2.style.transform = "translateX("+x+"px)";
};

/*��ӹ���*/
var addTransition = function(){
    ul.style.webkitTransition = "all .2s";/*����*/
    ul.style.transition = "all .2s";
};
var addTransition2 = function(){
    ul2.style.webkitTransition = "all .2s";/*����*/
    ul2.style.transition = "all .2s";
};
//people1��js
$('.prev').on('click',function(){
    if(index==3){
        index=0;
        addTransition();
        setTranslateX(-index*video_imgWidth);
    }else{
        index++;
        addTransition();
        setTranslateX(-index*video_imgWidth);
    }
});
$('.next').on('click',function(){
    if(index==0){
        index=3;
        addTransition();
        setTranslateX(-index*video_imgWidth);
    }else{
        index--;
        addTransition();
        setTranslateX(-index*video_imgWidth);
    }
});
//people2��js
$('.prev2').on('click',function(){
    if(index2==3){
        index2=0;
        addTransition2();
        setTranslateX2(-index2*video_imgWidth);
    }else{
        index2++;
        addTransition2();
        setTranslateX2(-index2*video_imgWidth);
    }
});
$('.next2').on('click',function(){
    if(index2==0){
        index2=3;
        addTransition2();
        setTranslateX2(-index2*video_imgWidth);
    }else{
        index2--;
        addTransition2();
        setTranslateX2(-index2*video_imgWidth);
    }
});
//tab栏切换
var nav_ul = document.querySelector('.nav_ul');
var lis = nav_ul.children;
var cons = document.querySelectorAll('.con');
for(var i = 0; i < lis.length; i++){
    lis[i].index = i;
    lis[i].onclick = function(){
        for(var j = 0; j < lis.length;j++){
            lis[j].className = " ";
            cons[j].className = "content_hidd";
        }
        this.className = "active";
        if(this.index==0){
            cons[this.index].className = "content";
        }
        if(this.index==1){
            cons[this.index].className = "content1";
        }
        if(this.index==2){
            cons[this.index].className = "content2";
        }
        if(this.index==3){
            cons[this.index].className = "content3";
        }
    }

}