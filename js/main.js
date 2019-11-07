
$(".top-navi > li").mouseover(function(){
	$(this).children(".navis").css({"visibility":"visible"});
	$(this).children(".navis").stop().slideDown();
});
$(".top-navi > li").mouseleave(function(){
	event.stopPropagation();
	$(this).children(".navis").stop().slideUp(function(){
		$(this).css({"visibility":"hidden"});
	});
});

var bannerSlide = new FxSlide({
	slides : $(".banner-containers"),
	cnt: 1,
	speed: 1500,
	delay: 2000
});

var letterSlide = new FxSlide({
	slides : $(".letter-images"),
	cnt: 1,
	speed: 1500,
	delay: 2000
});

