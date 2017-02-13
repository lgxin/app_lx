(function() {
	var tabs = document.querySelector(".gc_tabs");
	var lis = tabs.children;
	var tab2 = document.querySelector(".gc_tab2");
	var lis2 = tab2.children;
	//console.log(lis);
	for(var i = 0; i < lis.length; i++) {
		lis[i].onclick = function() {
			for(var i = 0; i < lis.length; i++) {
				lis[i].className = "";
			}
			this.className = "gc_checked";
		}
	}
	//	子标签遍历
	for(var i = 0; i < lis2.length; i++) {
		lis2[i].index = i;
		lis2[i].onclick = function() {
			console.log(this.index);
			for(var i = 0; i < lis2.length; i++) {
				lis2[i].className = "";
				oDivs[i].className = "gc_hide";
				//jQuery(oDivs[i]).hide();
			}
			//jQuery(oDivs[this.index]).show();

            this.className = "gc_checked";
			if(this.index == 0) {
				oDivs[this.index].className = "gc_jindian";
			}
			if(this.index == 1) {
				oDivs[this.index].className = "gc_bikan";
			}
			if(this.index == 2) {
				oDivs[this.index].className = "gc_jieshao";
			}

		}
	}
	//	选择区域排他
	var dls = document.querySelectorAll("dl");
	//console.log(dls[0].children);
	for(var i = 1; i < dls[0].children.length; i++) {
		dls[0].children[i].onclick = function() {
			for(var j = 1; j < dls[0].children.length; j++) {
				dls[0].children[j].className = "";
				//$(dls[0].children[i]).hide();
			}
			this.className = "bikan_checked";
			//$(this).show();
		}
	}
	//第二排
	for(var i = 1; i < dls[1].children.length; i++) {
		dls[1].children[i].onclick = function() {
			for(var j = 1; j < dls[1].children.length; j++) {
				dls[1].children[j].className = "";
			}
			this.className = "bikan_checked";
		}
	}
	//第三排
	for(var i = 1; i < dls[2].children.length; i++) {
		dls[2].children[i].onclick = function() {
			for(var j = 1; j < dls[2].children.length; j++) {
				dls[2].children[j].className = "";
			}
			this.className = "bikan_checked";
		}
	}
	//	tab栏子栏切换
	var oDivs = document.querySelectorAll(".gc_Div");
	//console.log(oDivs);
	var banner = document.querySelector('.gc_banner');
	var replaceWidth = document.querySelector(".gc_tab2contain");
	//console.log(banner);
	var width = replaceWidth.offsetWidth;
	var imageBox = banner.querySelector('ul:first-child');
		//console.log(imageBox);
	var pointBox = banner.querySelector('ul:last-child');
	var points = pointBox.querySelectorAll('li');
	var addTransition = function() {
		imageBox.style.transition = 'all 0.2s';
		imageBox.style.webkitTransition = "all 0.2s";
	}
	var removeTransition = function() {
		imageBox.style.transition = 'none';
		imageBox.style.webkitTransition = 'none';
	}
	var setTranslateX = function(x) {
		imageBox.style.transform = "translateX(" + x + "px)";
		imageBox.style.webkitTransform = "translateX(" + x + "px)";
	}

	var index = 1;
	var timer = setInterval(function() {
		index++;
		addTransition();
		setTranslateX(-index * width);
	}, 2000);

	itcast.transitionEnd(imageBox, function() {
		if(index >= 6) {
			index = 1;
			removeTransition();
			setTranslateX(-index * width);
		}
		if(index <= 0) {
			index = 5;
			removeTransition();
			setTranslateX(-index * width);
		}
		setPoint();
	});

	var setPoint = function(i) {
		for(i = 0; i < points.length; i++) {
			points[i].className = "";
		}
		points[index - 1].className = 'gc_now';
	}

})(window)