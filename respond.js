(function ($) {
	// Write code here
	
	var getBrowserWidth = function(){
		if(window.innerWidth < 900){
			// Extra Small Device
            $('.column').css('width','100%');
            $('.image').css('width','100%');
		} 
	};
	
	getBrowserWidth();
	
	$(window).on('resize',function(){
		getBrowserWidth();
	});
	
}(jQuery));