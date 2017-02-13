/**
 * Created by limao on 2016/11/23.
 */
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
        $this = $(this),
            $next = $this.next('ul');

        $next.slideToggle();
        $this.parent().toggleClass('open');
    }

    var accordion = new Accordion($('#accordion'), false);

    $(".os_item").on("click",function(){
        $(this).toggleClass('curr').siblings().removeClass('curr');
    });

});