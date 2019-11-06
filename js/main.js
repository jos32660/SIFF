
$(".top-navi").children("li").mouseover(function(){
	$(".navis").css({"display":"block"});
	$(".navis").stop().slideDown();
});
$(".top-navi").children("li").mouseleave(function(){
	$(".navis").stop().slideUp(function(){
		$(this).css({"display":"none"});
	});
});

var bannerSlide = new FxSlide({
	slides : $(".banner-containers"),
	cnt: 1,
	speed: 1500,
	delay: 2000
});

