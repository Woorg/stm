import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import slick from 'slick-carousel';
import 'magnific-popup';
import fullpage from 'fullpage.js';
// import 'simplebar';
import slimScroll from 'jquery-slimscroll';
// import 'malihu-custom-scrollbar-plugin';


(function ($) {

	svg4everybody();

	$(function() {

		var styles = [
			'padding: 2px 9px',
			'background: #82B93C',
			'color: #fff',
			'display: inline-block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
			'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
			'line-height: 1.56',
			'text-align: left',
			'font-size: 16px',
			'font-weight: 400'
		].join(';');

		console.log('%c developed by igor gorlov https://webjeb.ru', styles);


		// Fullpage

		 $('.page__main').fullpage({
			// navigation: true,
			anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9'],
			menu: '#menu',
			scrollBar: false,
			// verticalCentered: true,
			// scrollOverflow: true,
			// normalScrollElements: '.about',
			// css3: true,
			// slidesNavigation: true,
			// sectionSelector: '.section',
			// navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
			// sectionsColor: ['#ffed00', '#ffed00', '#ffed00', '#ffed00', '#ffed00', '#ffed00', '#ffed00', '#ffed00', '#ffed00'],
			normalScrollElements: '.contacts',
			// loopBottom: true,
			// loopTop: true,
			// navigationPosition: 'bottom',
			// fadingEffect: false,
			// recordHistory: false,
			fixedElements: '.header',
			// lazyLoading: false,

			// autoScrolling: false,
			// scrollBar:true,
			// interlockedSlides: false,
			// v2compatible: true,
			// licenseKey: '563456345645',
			afterLoad: function(anchorLink, index, sectionAnchor, slideAnchor, slideIndex) {
				var loadedSlide = $(this);
				var totalItems = loadedSlide.siblings().length + 1;
				var numContainer = $('.num');
				numContainer.html("0" + index + '<span class="num__all">0' + totalItems + '</span>');

				// removeMobileNav($('#menu').find('.nav__item'));

			},
			onLeave: function(index, nextIndex, direction){
				activateNavItem($('#menu').find('.nav__item').eq(nextIndex-1));

				removeMobileNav($('#menu').find('.nav__item'));



			},
		});


		function activateNavItem(item) {
			item.addClass('nav__item_active').siblings().removeClass('nav__item_active');
		}


		function removeMobileNav(item) {
			item.parent().parent().removeClass('header__nav_mob');
			item.parent().parent().parent().removeClass('header_nav-mob');
			$('.header').removeClass('header_nav-mob');
		}


		$('.header .nav__item').on('click', function () {

			$(this).parent().parent().parent().removeClass('header_nav-mob');

		});


		// Scroll

		$('.fp-scrollable').slimScroll({
			height: window.innerHeight+'px',
			alwaysVisible: true,
			color: '#fff',
			size: '10px',
			allowPageScroll: true,
		});


		// Popup

		var $workPopup = $('.work__item-more');
		var $workPopupClose = $('.popup__close');

		$workPopup.on('click', function (e) {
			e.preventDefault();
			var $workPopupHref = $(this).attr('href');
			var $popup = $('.popup');
			var $popupOpen = $workPopupHref.slice(1, $workPopupHref.length);

			$popup.eq( $popupOpen.slice($popupOpen.length - 1, $popupOpen.length ) - 1 ).addClass('popup_active zoomIn');


		});


		$workPopupClose.on('click', function (e) {
			e.preventDefault();
			$(this).parent().removeClass('popup_active zoomIn');
		});


		// Gallery

		$('.licenses__link').magnificPopup({
			type: 'image',
			gallery:{
				enabled:true
			}
		});

		// Scrollto

		$('.logo').on('click', function(e) {
			var _scroll = $(this).attr('href');
			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top - 80 }, 300);
			}
		});

		// const $navItem = $('.nav__item');

		// $navItem.on('click', function () {
		// 	$(this).siblings().removeClass('nav__item_active');
		// 	$(this).toggleClass('nav__item_active');
		// });


		// Mob nav

		const $navTrigger = $('.nav__trigger');
		const $headerMob = $('.header');


		$navTrigger.on('click', function () {
			$(this)
				.parent()
				.toggleClass('header__nav_mob ');

			$headerMob
				.toggleClass('header_nav-mob');

			$('.nav__item').parent().parent().parent().removeClass('header_nav-mob');

		});


		// const $navMoreTrigger = $('.header__nav_mob .nav__item');

		// $navMoreTrigger.on('click', function (e) {
		// 	// e.stopPropagation();
		// 	// $(this).parent().toggleClass('header__nav_mob zoomIn');
		// 	$('.header__nav').removeClass('header__nav_mob ');
		// 	// $(document).on('click', function(e) {
		// 		// if (!$(e.target).closest('.header__nav_mob .nav__list').length) {
		// 			// $navMoreTrigger.parent().removeClass('header__nav_mob');
		// 		// }
		// 	// });

		// });



	});


})(jQuery);
