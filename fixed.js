;(function( $ ) {	
			nav_bar = $('#nav_bar');
    		container_offset = $('#container_offset');
    		return ($(window)).scroll(function() {
      			if (($(this)).scrollTop() > ($('#top_container')).height()) {
        			nav_bar.addClass('fixed-to-top');
        			return container_offset.css('top', nav_bar.innerHeight());
      			  } else {
        			nav_bar.removeClass('fixed-to-top');
        			return container_offset.css('top', 'initial');
        		}
        	});
})(jQuery);