
(function($) {
	$.fn.vertigo = function(options) {
		$(this).addClass("vertigo");
		var list = $('.vertigo li');
		var totallist = list.length;

		$(this).after('<a href="#pre" class="btn-pre">Pre</a> <a href="#next" class="btn-next">Next</a>');
		$('.vertigo li').each(function(i) {
			$(this).addClass("item"+(i+1));
		});

		var total = 1;

		// Settings
		var settings = $.extend({
			play  : false,
			timer : 5000
		}, options);

		if ( settings.play ) {
			var playx = settings.play;
		}
		if ( settings.timer ) {
			var timerx = settings.timer;
		}

		if(playx == true){
			setInterval(function() {

				if ( total <= (totallist - 1)) {
					var nlisth = $('.item'+total).outerHeight();
					$('.vertigo li').animate({'top':'-='+nlisth+'px'});
					total++;
					//console.log(total);
				}
			}, timerx);
		}

		$('.btn-pre').click(function(){
			var plisth = $('.item'+(total-1)).outerHeight();
			if ( total !== 1 && total <= totallist) {
				total--;
				$('.vertigo li').animate({'top':'+='+plisth+'px'});
			}
		});

		$('.btn-next').click(function(){
			var nlisth = $('.item'+total).outerHeight();
			if ( total <= (totallist - 1)) {
				total++;
				$('.vertigo li').animate({'top':'-='+nlisth+'px'});
			}
		});

	}

	return false;

}(jQuery));
