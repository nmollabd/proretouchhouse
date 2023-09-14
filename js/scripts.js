(function ($) {
	var ua = window.navigator.userAgent;
	var isIE = /MSIE|Trident/.test(ua);

	if ( !isIE ) {
		//IE specific code goes here
		"use strict";
	}

	$('[data-toggle="tooltip"]').tooltip();

	/*** Sticky header */
	$(window).scroll(function(){
		if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
			$(".header").addClass("stop");
		} else {
			$(".header").removeClass("stop");
		}
	});

	/*** Sticky header */
	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = 100;

	window.addEventListener("scroll", () => {
	  	const currentScroll = window.pageYOffset;
	  	if (currentScroll <= 0) 
	  	{
	    	body.classList.remove(scrollUp);
	    	return;
	  	}

	  	if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
	  	{
	    	// down
	    	body.classList.remove(scrollUp);
	    	body.classList.add(scrollDown);
	  	} 
	  	else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
	  	{
	    	// up
	    	body.classList.remove(scrollDown);
	    	body.classList.add(scrollUp);
	  	}

	  	lastScroll = currentScroll;
	});

    /*** Navbar Menu */
	$('.navbar-toggle').sidr({
		name: 'sidr-main',
		side: 'right',
		source: '#sidr',
		displace: false,
		renaming: false,
	});

	$('.navbar-toggle.in').on('click', function(e){
		e.preventDefault();
		$.sidr('close', 'sidr-main');
	});

	$(window).scroll(function(){
		if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
			$.sidr('close', 'sidr-main');
		}
	});

    /*** ScrollDown */
	$('.scrollDown').click(function() {
	    var target = $('#primary');
	    var space = $(this).data('space');

	    if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - space
	        }, 1e3, "easeInOutExpo");
	    }
	});

	/*** Smooth scroll */
    	$('.sscroll, .sscroll a').click(function() {
       	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           	var target = $(this.hash);
           	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           	if (target.length) {
               	$('html,body').animate({
                   scrollTop: target.offset().top - 60
               	}, 1e3, "easeInOutExpo");

               return false;
           	}
       	}
    });

	/*** Header height = gutter height */
	function setGutterHeight() {
		var header = document.querySelector('.header'),
			  gutter = document.querySelector('.header-gutter');
		if (gutter) {
			gutter.style.height = header.offsetHeight + 'px';
		}
	}
	window.onload = setGutterHeight;
	window.onresize = setGutterHeight;

	/*** Number Counter */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/*** newarrival__slider */
    $('.newarrival__slider').slick({
        dots: false,
        speed: 500,
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        centerMode: true,
        slidesToScroll: 1,
        prevArrow: $(".slick__control.prev"),
        nextArrow: $(".slick__control.next"),
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 481, settings: { slidesToShow: 1 } }
        ]
    });

	/*** Call Sly on frame */
	$('.slyslider__wrapper').each(function(i, l) {

		var $sly_frame = $(this),
		    $slide = $sly_frame.children('.slyslider').eq(0),
		    $sly_wrap  = $sly_frame.parent();

		$(this).sly({
			smart: 1,
			speed: 300,
			horizontal: 1,
			mouseDragging: 1,
			releaseSwing: 1,
			touchDragging: 1,
			itemNav: 'basic',
			scrollBy: 1,
			clickBar: 1,
			swingSpeed: 0.2,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			sbSize: 80,
			activateMiddle: 1,
			easing: 'easeOutExpo',
			scrollBar: $sly_wrap.find('.slyslider__scrollbar'),
			prev: $sly_wrap.find('.prev'),
			next: $sly_wrap.find('.next'),
		});
	});

	/*** Testimonials Slider */
	$('.testimonial-slider-text').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
		asNavFor: '.testimonial-slider-media',
    });

	$('.testimonial-slider-media').slick({
        fade: true,
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
		asNavFor: '.testimonial-slider-text',
    });
	

	/*** enable lightbox */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: false,
        fixedBgPos: true,
        removalDelay: 500,
        closeBtnInside: false,
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function() {
                // console.log(this.st.iframe.markup);
                this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Close<span class="icon-cancel"></span></button>',
    });

	
	/*** enable lightbox */
	$('.gallery-popup').on('click', function(event) {
		event.preventDefault();
		
		var gallery = $(this).attr('href');

		$(gallery).magnificPopup({
      		delegate: 'a',
      		type: 'image',
      		midClick: true,
      		preloader: false,
      		fixedBgPos: true,
      		removalDelay: 500,
      		fixedContentPos: true,
      		closeBtnInside: false,
	 		gallery: {
		        enabled: true,
		        navigateByImgClick: true,
		        preload: [0,1]
		    },
	        image: {
	    	  markup:
	    	  	'<div class="mfp-figure">'+
	    		    '<div class="mfp-top-bar">'+
	    				'<div class="mfp-title"></div>'+
	    				'<div class="mfp-counter"></div>'+
	    		    '</div>'+

	    		    '<figure class="mfp-img-wrap">'+
	    		        '<div class="mfp-img"></div>'+
	    		    '</figure>'+
	    	  	'</div>',
	    		cursor: 'mfp-zoom-out-cur',
	    		titleSrc: 'title',
	    		verticalFit: true,
	    		tError: '<a href="%url%">The image</a> could not be loaded.'
	        },
			callbacks: {
			    beforeOpen: function() {
			        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			        this.st.mainClass = 'mfp-move-from-top';
			    },
			},
			closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Close<span class="icon-cancel"></span></button>',
		}).magnificPopup('open');
	});

	/*** Cursor */
	const cursor = document.querySelector('#cursor');

	if ( cursor ) {
		
		const cursorCircle = cursor.querySelector('.cursor__circle');

		const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
		const pos = { x: 0, y: 0 }; // cursor's coordinates
		const speed = 0.4; // between 0 and 1

		const updateCoordinates = e => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		window.addEventListener('mousemove', updateCoordinates);

		function getAngle(diffX, diffY) {
			return Math.atan2(diffY, diffX) * 180 / Math.PI;
		}

		function getSqueeze(diffX, diffY) {
			const distance = Math.sqrt(
				Math.pow(diffX, 2) + Math.pow(diffY, 2)
			);
			const maxSqueeze = 0.15;
			const accelerator = 1500;
			return Math.min(distance / accelerator, maxSqueeze);
		}

		const updateCursor = () => {
			const diffX = Math.round(mouse.x - pos.x);
			const diffY = Math.round(mouse.y - pos.y);

			pos.x += diffX * speed;
			pos.y += diffY * speed;

			const angle = getAngle(diffX, diffY);
			const squeeze = getSqueeze(diffX, diffY);

			const rotate = 'rotate(' + angle +'deg)';
			const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

			cursor.style.transform = translate;
		};

		function loop() {
			updateCursor();
			requestAnimationFrame(loop);
		}

		requestAnimationFrame(loop);

		const cursorModifiers = document.querySelectorAll('[cursor-class]');

		cursorModifiers.forEach(curosrModifier => {
			curosrModifier.addEventListener('mouseenter', function() {
				const className = this.getAttribute('cursor-class');
				cursor.classList.add(className);
			});

			curosrModifier.addEventListener('mouseleave', function() {
				const className = this.getAttribute('cursor-class');
				cursor.classList.remove(className);
			});
		});

		const anchorLinks = document.querySelectorAll('a[href], button');

		anchorLinks.forEach(curosrModifier => {
			curosrModifier.addEventListener('mouseenter', function() {
				const className = 'anchor';
				cursor.classList.add(className);
			});

			curosrModifier.addEventListener('mouseleave', function() {
				const className = 'anchor';
				cursor.classList.remove(className);
			});
		});
	}

	// Scroll Down Button
	window.addEventListener("load", function() {
	   function circularText(txt, radius, container) {
	       const deg = 360 / txt.length;
	       const div = document.createElement('span');
	       div.classList.add('split-text');
	       container.appendChild(div);
	       txt.split('').forEach((ea, i) => {
	           div.innerHTML += `<span style="height:${radius}px;position:absolute;transform:rotate(${deg * i}deg);transform-origin:0 100%">${ea}</span>`;
	       });
	   }

	   const roundTextElements = document.querySelectorAll(".round-text");
	   roundTextElements.forEach((roundText) => {
	       const dataRound = roundText.getAttribute("data-round");
	       const dataRadius = roundText.getAttribute("data-radius");
	       circularText(dataRound, dataRadius, roundText);
	   });
	});

	/*** wow js */
    function wowjs() {
    	wow = new WOW({
    		boxClass: 'wow',
    		animateClass: 'animate__animated',
    		offset: 0,
    		mobile: true,
    		live: true,
    	});
    	wow.init();
    }

    wowjs();

    /*** mixitup load for search */
	var containerEl = $('.resentworks-grid');

	if ( containerEl.length > 0 ) {

		var mixer = mixitup(containerEl, {
			animation: {
				enable: false,
				duration: 350,
				queueLimit: 5,
			},
			controls: {
				toggleLogic: 'and',
			},
			selectors: {
				target: '.mix'
			},
			callbacks: {
				onMixStart: function(state, futureState) {
	   	        	wowjs();
	   	        	jQuery.LoadingOverlay("show");
	   	        },

	   	        onMixEnd: function(state, futureState) {
	   	        	wowjs();
	   	        	jQuery.LoadingOverlay("hide");
	   	        },
			}
		});

		 // Simulate a click on the first filter item to make it active
	    var firstFilterItem = document.querySelector('.filters li:first-child');
	    if (firstFilterItem) {
	        mixer.filter(firstFilterItem.getAttribute('data-filter'));
	    }
	}

	$(document).ready(function() {
	    console.log("Document ready");
	    $(".whatwedo__media").each(function() {
	        $(this).twentytwenty();
	    });
	});


}(jQuery));