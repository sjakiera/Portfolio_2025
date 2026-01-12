/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Touch?
	if (browser.mobile)
		$body.addClass('is-touch');

	// Forms.
	var $form = $('form');

	// Auto-resizing textareas.
	$form.find('textarea').each(function () {

		var $this = $(this),
			$wrapper = $('<div class="textarea-wrapper"></div>'),
			$submits = $this.find('input[type="submit"]');

		$this
			.wrap($wrapper)
			.attr('rows', 1)
			.css('overflow', 'hidden')
			.css('resize', 'none')
			.on('keydown', function (event) {

				if (event.keyCode == 13
					&& event.ctrlKey) {

					event.preventDefault();
					event.stopPropagation();

					$(this).blur();

				}

			})
			.on('blur focus', function () {
				$this.val($.trim($this.val()));
			})
			.on('input blur focus --init', function () {

				$wrapper
					.css('height', $this.height());

				$this
					.css('height', 'auto')
					.css('height', $this.prop('scrollHeight') + 'px');

			})
			.on('keyup', function (event) {

				if (event.keyCode == 9)
					$this
						.select();

			})
			.triggerHandler('--init');

		// Fix.
		if (browser.name == 'ie'
			|| browser.mobile)
			$this
				.css('max-height', '10em')
				.css('overflow-y', 'auto');

	});

	// Menu.
	var $menu = $('#menu');

	$menu.wrapInner('<div class="inner"></div>');

	$menu._locked = false;

	$menu._lock = function () {

		if ($menu._locked)
			return false;

		$menu._locked = true;

		window.setTimeout(function () {
			$menu._locked = false;
		}, 350);

		return true;

	};

	$menu._show = function () {

		if ($menu._lock())
			$body.addClass('is-menu-visible');

	};

	$menu._hide = function () {

		if ($menu._lock())
			$body.removeClass('is-menu-visible');

	};

	$menu._toggle = function () {

		if ($menu._lock())
			$body.toggleClass('is-menu-visible');

	};

	$menu
		.appendTo($body)
		.on('click', function (event) {
			event.stopPropagation();
		})
		.on('click', 'a', function (event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
			$menu._hide();

			// Redirect.
			if (href == '#menu')
				return;

			window.setTimeout(function () {
				window.location.href = href;
			}, 350);

		})
		.append('<a class="close" href="#menu">Close</a>');

	$body
		.on('click', 'a[href="#menu"]', function (event) {

			event.stopPropagation();
			event.preventDefault();

			// Toggle.
			$menu._toggle();

		})
		.on('click', function (event) {

			// Hide.
			$menu._hide();

		})
		.on('keydown', function (event) {

			// Hide on escape.
			if (event.keyCode == 27)
				$menu._hide();

		});

	$(document).ready(function () {
		console.log("Document ready!");
		var btn = document.getElementById("showCaseDetailsBtn");
		if (btn) {
			btn.addEventListener("click", function () {
				console.log("Button clicked!");
				var openAndClosedWebDiv = document.getElementById("openandclosedweb");
				openAndClosedWebDiv.style.display = (openAndClosedWebDiv.style.display === "none") ? "block" : "none";
			});
		}

		var btnPlog = document.getElementById("showCaseDetailsBtnPlog");
		if (btnPlog) {
			btnPlog.addEventListener("click", function () {
				var caseDetails = document.getElementById("caseDetails");
				caseDetails.style.display = (caseDetails.style.display === "none") ? "block" : "none";
			});
		}

		var btnDataViz = document.getElementById("showCaseDetailsBtnDataViz");
		if (btnDataViz) {
			btnDataViz.addEventListener("click", function () {
				var dataVizDetails = document.getElementById("dataVizDetails");
				dataVizDetails.style.display = (dataVizDetails.style.display === "none") ? "block" : "none";
			});
		}
	});



})(jQuery);

// Poster Slider functionality
var currentSlide = 0;
var slidesPerView = 3;

function updateSliderButtons() {
	var prevBtn = document.querySelector('.prev-btn');
	var nextBtn = document.querySelector('.next-btn');
	var slides = document.querySelectorAll('.slide');
	var totalSlides = slides.length;
	var maxSlide = totalSlides - slidesPerView;

	if (prevBtn) {
		if (currentSlide === 0) {
			prevBtn.classList.add('hidden');
		} else {
			prevBtn.classList.remove('hidden');
		}
	}

	if (nextBtn) {
		if (currentSlide >= maxSlide) {
			nextBtn.classList.add('hidden');
		} else {
			nextBtn.classList.remove('hidden');
		}
	}
}

function moveSlide(direction) {
	var track = document.querySelector('.slider-track');
	if (!track) return;

	var slides = document.querySelectorAll('.slide');
	var totalSlides = slides.length;
	var maxSlide = totalSlides - slidesPerView;

	currentSlide += direction;

	if (currentSlide < 0) {
		currentSlide = 0;
	} else if (currentSlide > maxSlide) {
		currentSlide = maxSlide;
	}

	var slideWidth = 100 / slidesPerView;
	track.style.transform = 'translateX(-' + (currentSlide * slideWidth) + '%)';

	updateSliderButtons();
}

// Initialize slider buttons on page load
document.addEventListener('DOMContentLoaded', function () {
	updateSliderButtons();
});
