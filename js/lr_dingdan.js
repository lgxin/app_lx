$(function () {
    ajax();
    touch();
    cut();
})
//请求后台加载数据
var dates = null;
var flag = true;
var ajax = function () {
    $.ajax({
        type: 'post',
        url: './data.php',
        dataType: 'json',
        success: function (info) {
            dates = info;
            if (dates.length > 3) {
                var date = dates.slice(0, 3)
                var html = template('tem', date);
                $('.lr_more').text('点击加载更多');
                $(".lr_main").append(html);
                dele();
            }
        },
    })
}
    //点击加载事件
var touch = function () {
    $(".lr_more").on("click", function () {
        if (flag) {
            var date = dates.slice(3)
            var html = template('tem', date);
            $('.lr_more').text("没有更多了");
            $('.lr_main').append(html)
            dele();
            flag = false
        }
    })
}
    //底部菜单栏绑定点击切换事件
var cut = function () {
    var lis = $('.lr_menu>ul').find("li");
    for (var i = 0; i < lis.length; i++) {
        $(lis[i]).on('click', function () {
            $(this).addClass('spel').siblings().removeClass('spel')
        })
    }
    ;
}
    //订单删除确认与取消
var dele = function () {
    //var win = $(".lr_win")
    //console.log(win);
    var that = null
    var boxs = $('.lr_box_main_delete');
    for (var i = 0; i < boxs.length; i++) {
        $(boxs[i]).on('click', function () {
            that = this;

            $('.lr_win').css({"display": "block"});
            $('.cancel').on("click", function () {
                $('.lr_win').css({"display": "none"})
            })
            $('.submit').on("click", function () {
                $(that).parent().parent().css({"display": "none"})
                $('.lr_win').css({"display": "none"})
            })
        })

    }
    ;
}