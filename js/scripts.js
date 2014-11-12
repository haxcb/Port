$(document).ready(function() { 

	var $window = $(window);
	
/*
	$('*[data-scroll="white"]').each(function(){
		var $scrollEle = $(this); 
		
		// $scrollEle.css({position:'relative'}); // Messes up the spacing on everything
		
		var $cover = $('<div class="whiteCover"></div>');
		$scrollEle.append($cover);
		
		var calculateOpacity = function() {
			
			var scrollY = $window.scrollTop();
			var elementY = parseFloat($scrollEle.offset().top);
			var elementH = $scrollEle.height();
			var scrollY2 = scrollY + $(window).height();
						
			
			$cover.height(scrollY2 - elementY);
			var scrolledAmount = $window.scrollTop() / $(window).height()
			var opacity = 1 - scrolledAmount - Math.floor(scrolledAmount);
			
			// Start turning back into color after 1 full screen has been scrolled
			if($window.scrollTop() > $(window).height()) {
				opacity = scrolledAmount - Math.floor(scrolledAmount) /2;
			}
			// Stay solid color after 2 screens of scrolling
			if(Math.floor(scrolledAmount) > 1) {
				opacity = 1;
			}		
			return opacity;
		};
		
		$(window).scroll(function() {	
			$scrollEle.css({ opacity: calculateOpacity() });
		});
		$(window).resize(function(e) {
			$scrollEle.css({ opacity: calculateOpacity() });
		});
	});*/
	
	
	
	// Working but breaks when zoomed out
	
	$('*[data-scroll="white"]').each(function(){
		var $scrollEle = $(this); 
		
		// $scrollEle.css({position:'relative'}); // Messes up the spacing on everything
		
		var $cover = $('<div class="whiteCover"></div>');
		// $scrollEle.append($cover);
		
		var calculateOpacity = function() {
			var scrolledAmount = $window.scrollTop() / $(window).height();
			var opacity = 1 - scrolledAmount - Math.floor(scrolledAmount); // Fade out
			
			// Start turning back into color after 1 full screen has been scrolled
			
			console.log($window.scrollTop());
			if($window.scrollTop() > $(window).height() + 100) { // Normal
				opacity = scrolledAmount - Math.floor(scrolledAmount) /2;
				console.log("hit");
			}
			
			// Show the down link only as long as we haven't scrolled past 1/3 of the screen height
			if($window.scrollTop() >= $(window).height()/3) {
				$('.downLink').hide();
			} else {
				$('.downLink').show();
			}
			
			// Stay solid color after 2 screens of scrolling
			if(Math.floor(scrolledAmount) > 1) {
				// opacity = 1;
			}		
			return opacity;
		};
		
		$(window).scroll(function() {	
			$scrollEle.css({ opacity: calculateOpacity() });
		});
		$(window).resize(function(e) {
			$scrollEle.css({ opacity: calculateOpacity() });
		});
	});
	

	

	
	$('*[data-scroll="down"]').each(function(){
		// alert("Hi");
		var $scrollEle = $(this); 
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / 20);
			
			
			
			if($window.scrollTop() > $(window).height()) {	
				yPos = -$(window).height()*2;
			}
			
			$scrollEle.css({
				top: yPos + 'px'
			});
		});
	});

	
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
					'background-size': '100%',
					'-webkit-background-size': '100%',
					'-moz-background-size':'100%',
					'-o-background-size': '100%'
				});
			}, 300);
		}
		$('nav .right').slideToggle();

	});
	
	$(window).resize(function() {
		if($(window).width() > 740) {
			if($('nav .right').css('float') == 'right') {
				$('nav .right').show(); 
			}
		} else {
			$('nav .right').hide();
		}
	});
	
	

});