/**
 * Created by WIN7 on 2016/11/20.
 */
window.itcast = {};
//transitionEnd  过度结束事件
itcast.transitionEnd = function(dom,callback){
    if(dom && typeof  dom == 'object'){
        dom.addEventListener('webkitTransitionEnd',function(){
            callback && callback();
        });
        dom.addEventListener('transitionEnd',function(){
            callback && callback();
        });
    }
}