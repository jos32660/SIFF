
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

$(".top-bars").click(function(){
	$(".sides").stop().animate({"right":0}, 500);
});

$(".side-close").click(function(){
	$(".sides").stop().animate({"right":"-100%"}, 500);
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

$(window).scroll(function(){
	var scTop = $(this).scrollTop();
	if(scTop > 400) $(".bt-top").addClass("bt-top-show");
	else $(".bt-top").removeClass("bt-top-show");
  });
  $(".bt-top").click(function(){
	$("html, body").stop().animate({"scrollTop":0}, 500);
  });
  
