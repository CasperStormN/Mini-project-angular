jQuery( document ).ready(function() {
	jQuery('.navbar-toggle').click(function() {
		jQuery('#main-nav nav').toggleClass('mobile-menu');
	});
	
	jQuery('.dropdown').click(function(e) {
		e.preventDefault();
		jQuery('.dropdown ul').toggle(400);
	});

  	jQuery('#slippry-demo').slippry({
  		'controls': false,
  		//'auto': false,
  		'slideWrapper': '<div class="sy-slides-wrap" />'
  	})

  	jQuery('.nav-tabs li').click(function() {  		
  		jQuery('.nav-tabs li').removeClass('active');
  		jQuery(this).addClass('active');
  	});

  	jQuery('.gallery .img-container').click(function() {  		
  		jQuery('.gallery .img-container').removeClass('active');
  		jQuery(this).addClass('active');
  		//var img = jQuery(this).find('img').attr('src');
  		//jQuery('.preview').find('img').attr('src', img);
  	});
});

