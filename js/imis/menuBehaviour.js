$(document).ready(function(){
	
	
	// Progressive Enhancement mittels jQuery
	// Im linken Menue geschachtelte Listen werden erst nach einer Weile ein/ausgeblendet
	// um die Navigation zu erleichtern.
	$("#top_navi .nice-menu li").hoverIntent({
		interval: 0, 
		over: menu_show, 
		timeout: 0, 
		out: menu_hide
	});
	$("#left_sidebar .menu li").hoverIntent({
		interval: 250, 
		over: menu_show, 
		timeout: 500, 
		out: menu_hide
	});
	function menu_show(){ $(this).addClass('show').removeClass('js-on'); }
	function menu_hide(){ 
		if(!$(this).hasClass('active-trail')) { 
			$(this).removeClass('show').addClass('js-on'); 
		}
	}
	
	$("#left_sidebar .menu li").addClass('js-on');
	$("#left_sidebar .active-trail").removeClass('js-on').addClass('show');
							
	// Diese Funktionen ermitteln die Position fuer HTML-Anchors auf der
	// Seite und addieren ein Offset, sodass man an der korrekten Stelle landet.
	function filterPath(string) {
	    return string
	      .replace(/^\//,'')  
	      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')  
	      .replace(/\/$/,'');
	  }
	$('a[href*=#]').each(function() {
		if ( filterPath(location.pathname) == filterPath(this.pathname)
		&& location.hostname == this.hostname
		&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
			var targetOffset = $target.offset().top - 50;
			$(this).click(function() {
				$('html, body').animate({scrollTop: targetOffset}, 400);
				return false;
				});
			}
		}
	});
	
	$(window).scroll(function() {
		if($(window).scrollTop() >= 120) {
			$('#bar').css({
			  position: 'fixed',
			  top: '0'
			})
		} else {
			$('#bar').css({
			  position: 'absolute',
			  top: '120px'
			})
		}
	});
	
	// Lightbox
	$('a.lgtbx').lightBox();
	
	// Mark external links
	$("a").not("[href^=/]").not("[href^=#]").not("[href^=http://drupal1.imis.uni-luebeck.de]").attr("rel","extern");
});