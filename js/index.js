// swiper 初始化
var mySwiper = new Swiper('.swipers', {
	direction: 'horizontal',
	loop: true,
	autoplay: 5000,
	preventClicks: false,
	pagination: '.swiper-pagination'
});
var iwid = $('.item a').width();
$('.info').width(iwid-80)
