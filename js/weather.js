/**
 * Created by limao on 2016/11/23.
 */
$.ajax({
    type: "POST",
    url: "http://api.yytianqi.com/forecast7d?city=CH020100&key=lws46vk1ifhh41tp",
    data: "city=CH020100&key=lws46vk1ifhh41tp",
    dataType: "json",
    success: function(msg){
        console.log(msg);
        var successMsg=msg.data.list;
        var successMsg1=successMsg[0];
        console.log(successMsg1);}
});