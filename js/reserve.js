/**
 * Created by limao on 2016/11/25.
 */
var topBar=document.querySelector('.reserve_topbar');
var share=topBar.querySelector('.fa-heart');
var control=topBar.querySelector('.jiathis_style_m');
var myCount = 3;
share.addEventListener('click',function(){
    myCount=3;
    show(control);
    count();
});

function count() {
    myCount--;
    if (myCount == 0) {
        control.style.display="none";
        return;
    }
    setTimeout("count()", 1000);
}

function show(ele){
    ele.style.display="block";
}
