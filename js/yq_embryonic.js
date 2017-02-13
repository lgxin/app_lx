/**
 * Created by WIN7 on 2016/11/22.
 */
window.onload = function (){
    banner();

}
//滑屏动画
function banner(){
    var isMove = false;
    $('#embOne').on('touchmove',function(){
        $('#embOne').animate({
            'left':'-100%',
            "opacity":0
        },1000);
        isMove = true;
    })
    $('#embTwo').on('touchmove',function(){
            $('#embTwo').animate({
                'left':'-100%',
                "opacity":0
            },1000);
            isMove = true;
        })
    if(!isMove){
        embOne(
            setTimeout(function(){embTwo(
               setTimeout(function(){
                   embThree()
               },4000)
            )},2000)
        )
    }else{
        setTimeout(function(){
          isMove = false;
        },500)
    }
}
//自动动画
function embOne() {
    setTimeout(function(){
        $('#embOne').fadeOut(2000);
    },2000);
}
function embTwo(){
    setTimeout(function(){
        $('#embTwo').slideUp(2000);
    },2000);
}

function embThree(){
        $('#embThree').animate({
            "opacity":0
        },1000);
}
