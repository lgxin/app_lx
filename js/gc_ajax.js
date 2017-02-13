$(function(){
      gc_makeHtml(1);
          function gc_makeHtml(page){
        $.ajax({
            type:'post',
            data:{page:page},
            url:'gc_ajax.php',
			        beforeSend: function () {
								// 加载状态
								$('#gc_dilang').css("background-image","url(img/gc_dilang_load.gif)");
							},
            success:function(info){
                var data={
                    items:info.items
                };
                var html=template("gc_tpl",data);
                $('.gc_jindian').attr('data-page',info.page);
                $('.gc_jindian').append(html);
            },
	        complete: function () {
						$('#gc_dilang').css("background-image","url(img/gc_dilang.gif)");
					}
        });
      }
//点击 加载
    $('#gc_dilang').on('click', function(){
//      var scrollTop=$(this).scrollTop();
//      var scrollHeight=$(document).height();
//      var windowHeight=$(this).height();
//      if(scrollTop+windowHeight<scrollHeight-20){
            var page=$('.gc_jindian').attr('data-page');
            gc_makeHtml(page);
//        }
   });
  });

