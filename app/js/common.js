$(function() {

	wayCss($(".h1"), 'fadeInUp');
	wayCss($(".welcome"), 'fadeInDown');
	wayCss($(".btn-white"), 'fadeInLeft');
	wayCss($(".h2"), 'fadeInRight');
	wayCss($(".s-teaser__item"), 'fadeInRight');
	wayCss($(".price__item"), 'fadeInRight');
	wayCss($(".side-img"), 'fadeInLeft');
	wayCss($(".about__wrap"), 'fadeInRight');
	wayCss($(".anim-s"), 'fadeInLeft');
	wayCss($(".service__item"), 'fadeInRight');
	wayCss($(".price__left"), 'fadeInLeft');
	wayCss($(".anim-f"), 'fadeInLeft');
	wayCss($(".feed-item"), 'fadeInRight');
	wayCss($(".anim-purchase"), 'fadeInLeft');
	wayCss($(".anim-purchase-btn"), 'fadeInRight');
	wayCss($(".anim-news"), 'fadeInLeft');
	wayCss($(".anim-news-item"), 'fadeInRight');
	wayCss($(".anim-sub"), 'fadeInLeft');
	wayCss($(".anim-form"), 'fadeInRight');

	function wayCss(jclass, anim) {
		jclass.waypoint(function () {
			jclass.addClass('animated ' + anim)
		}, {offset: "100%"})
	}

	$(".gallery__item--img").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

	$(".service__title").equalHeights();

	function wResize() {
		$(".top-header").css("height", $(window).height());
	}
	wResize();

	$(window).resize(function () {
		wResize();
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	});



});
