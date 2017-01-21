$(document).ready(function() {

	/*Portfolio MixitUp - анимированные плитки он обязательно должен находиться перед остальными функциями в портфолио*/
	$("#portfolio_grid").mixItUp();

	/*Функции для Portfolio */
	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

    //Анимация шапки
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

	//Анимация плавного появления пунктов меню
	$(".item a").animated("fadeInUp","");

	//Анимация всех заголовков
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	//Анимация для сектора About
	$(".s_about_block").animated("flipInY", "fadeOutDown");
	$(".animation_right").animated("slideInLeft", "fadeOutDown");
	$(".animation_left").animated("slideInRight", "fadeOutDown");

	

    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();                  
    });

});

/*Функции для библиотеки Magnific-popup  */
$(".popup").magnificPopup({ 
  type: "image"
	// other options
});

$(".popup_content").magnificPopup({ 
	type: "inline",
	midClick: true,
	showCloseBtn: true
	// other options
});

/*  */
$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".top_mnu div a").click(function() {
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_mnu").fadeOut(600);
		$(".top_mnu .item a").removeClass("fadeInUp animated");

	} else {
		$(".top_mnu").fadeIn(600);
		$(".top_mnu .item a").addClass("fadeInUp animated");
	}
});

/*Эффект для SlipHover.js
/*$(function() {

     $('.text_container').sliphover({
         target: '.item',
         caption: 'data-caption',
         backgroundColor: 'rgba(255,255,255,.05)',
         fontColor: 'rgba(255,255,255,.05)'
     });
 })*/

/*Функции для библиотеки AnimateScroll  */
$(".item:nth-child(1)").click(function() {
	$("#about").animatescroll({
		scrollSpeed:4000,
		easing:'easeInOutBack'
	});
});
$(".item:nth-child(2)").click(function() {
	$("#resume").animatescroll({
		scrollSpeed:4000,
		easing:'easeInOutBack'
	});
});
$(".item:nth-child(3)").click(function() {
	$("#portfolio").animatescroll({
		scrollSpeed:4000,
		easing:'easeInOutBack'
	});
});
$(".item:nth-child(4)").click(function() {
	$("#contacts").animatescroll({
		scrollSpeed:4000,
		easing:'easeInOutBack'
	});
});

/*Функции для Preloader'a  */
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

