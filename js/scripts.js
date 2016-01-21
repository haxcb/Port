$(document).ready(function() { 

	var $window = $(window);
	
	/*************************************
		Opacity parallax
	*************************************/

		
		$(window).scroll(function() {	
			
			if($window.scrollTop() >= $(window).height()/3) {
				$('.downLink').hide();
			} else {
				$('.downLink').show();
			}
			
			// Enable/disable scroll to top button
			if($window.scrollTop() >= $(window).height()/3) {
				if($('.backToTop').is(':hidden')) {
					$('.backToTop').fadeIn();
				} 
			} else {
				if($('.backToTop').is(':visible')) {
					$('.backToTop').fadeOut();
				} 
			}
		});
		
		$('.backToTop').mouseenter(function() {
			$(this).animate({
				marginBottom:"8",
				opacity:"1"
			}, 200);
		});		
		$('.backToTop').mouseout(function() {
			$(this).animate({
				marginBottom:"0",
				opacity:"0.7"
			}, 200);
		});
		
		$(window).resize(function(e) {
			if($window.scrollTop() >= $(window).height()/3) {
				$('.downLink').hide();
			} else {
				$('.downLink').show();
			}
		});
	

	
	
	/*************************************
		Move elements parallax
	*************************************/	
	$('*[data-scroll="down"]').each(function(){
		// alert("Hi");
		var $scrollEle = $(this); 
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / 20);
			
			/* console.log(yPos + " " + $window.scrollTop());		 */
			
			if($window.scrollTop() > $(window).height()) {	
				yPos = -$(window).height()*2;
			}
			
			// Weird bug: sometimes scrolling too fast will push the page down, leaving white space
			
			$scrollEle.css({
				top: yPos + 'px'
			});
		});
	});

	
	
	/*************************************
		Menu animation for small screens
	*************************************/
	$('#menuDrawer').on('click', function(e) {
		e.preventDefault();
		if($('nav .right').css('display') == 'none') {
			console.log("MENU VISIBLE");
			$('nav').css({	
				'background-size': '100% 80px',
				'-webkit-background-size': '100%  80px',
				'-moz-background-size':'100%  80px',
				'-o-background-size': '100%  80px'
			});
		} else {
			console.log("MENU HIDDEN");
			setTimeout(function() {
				$('nav').css({
					'background-size': '100% 100%',
					'-webkit-background-size': '100% 100%',
					'-moz-background-size':'100% 100%',
					'-o-background-size': '100% 100%'
				});
			}, 300);
		}
		$('nav .right').slideToggle();

	});
	
	$(window).resize(function() {
		if($(window).width() > 970) {
			if($('nav .right').css('float') == 'right') {
				$('nav .right').show();
				console.log("float right");			
			}
		} else {
			$('nav .right').hide();
			console.log("collapse");
		}
		$('nav').css({
			'background-size': '100% 100%',
			'-webkit-background-size': '100% 100%',
			'-moz-background-size':'100% 100%',
			'-o-background-size': '100% 100%'
		});	
	});
	
	
	/*************************************
		Smooth Scrolling
		http://css-tricks.com/snippets/jquery/smooth-scrolling/
	*************************************/
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
		
	

});