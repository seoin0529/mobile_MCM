$("document").ready(function(){
	var $nav_open =$("header .top-con .btn-con"),
		$nav_close =$("header .top-con .nav .nav-btn"),
		$main =$("header .top-con .nav");
	
	$nav_open.click(function(){
		$main.fadeIn(300);
	})//nav오픈
	$nav_close.click(function(){
		$main.fadeOut(300);
		
	})//nav닫기
	
	
	
	
var $first_menu=$("header .top-con .nav > .main-nav > li"),
	$second_con=$("header .top-con .nav > .main-nav > li > ul li");
	$first_menu.click(function(){
		$(this).children(".first").slideDown(500);
		$first_menu.not(this).children(".first").slideUp(500);
		
	}) //2단까지 슬라이드 3단해야함
	$second_con.click(function(){
		$(this).children().slideToggle();
		
	})
	
	
//$(second_menu).click(function(){
//			$(this).children().slideDown(500);
//	
	
	
	
	
	
	
	var main = $(".info-wrap .info-con > ul > li"),
		sub =$(".info-wrap .info-con .sub-m "),
		main_img=$(".info-wrap .info-con > ul > li img")
		a = 0;
	
	$(main).click(function(){
		a =$(main).index(this);
		$(sub).eq(a).slideToggle(500);	$(main_img).eq(a).toggleClass("rotate")
	})//info 아코디언
	
	var top_btn=$(".info-wrap .top-con");
	
	$(top_btn).click(function(){
		$("html, body").animate({scrollTop:0},500);
		return false;
	})//상단으로이동
})//end