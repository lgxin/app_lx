/**
 * Created by limao on 2016/11/25.
 */
//计算总价
function setTotal(){
    var allprice=0;//总价格
    var num=parseInt($('.checkitem').val());
    var price=170;//商品单价需要从后台获取
    allprice+=num*(price+3);//每样商品的总价
    $(".allprice").html(allprice.toFixed(2));
}
$('.checkitem').on('keyup',function(){
    setTotal();
    plus(".plus")
});

$('.plus').on('click',function(){
    plus('.plus',3);
});


$('.minus').on('click',function(){
    minus('.minus',0);
});
//手动修改文本框商品数量与库存的限制


// 购买数量加
function plus(tag,stock){
    var _this=$(tag);
    var num=_this.next('input').val();
    if(num<stock){
        num++;
        $('.checkitem').val(num);
        setTotal();
    }else{
        return;
    }
}

function minus(tag,stock){
    var _this=$(tag);
    var num=_this.prev('input').val();
    if(num>stock){
        num--;
        $('.checkitem').val(num);
        setTotal();
    }else{
        return;
    }
}




