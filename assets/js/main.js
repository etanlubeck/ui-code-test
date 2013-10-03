$(document).ready(function(){
	var modal = function (ele, contents) {
		if (typeof contents === "undefined" || contents === null) {
			var content = "I'm going to explode";
		} else {
			var content = $('#'+contents).html();
		}

		var modal = '<div id="modal"><span class="close">x</span><div>'+content+'</div></div>';
		
		this.init = function () {
			if (typeof ele === "undefined") {
				ele = $('body');
			} else {
				ele = $(ele);
			}
				var left = Math.round(window.outerWidth / 3.5)+25,
					top = Math.round(window.outerHeight / 3.5),
					width = Math.round(window.outerWidth),
					height = Math.round(window.outerHeight);
					
					ele.prepend('<div class="overlay"></div>');
					ele.addClass('modal');
					ele.find('.overlay').css({width:width,height:height}).addClass('modal').before(modal);
					$('#modal').css({left:left+'px'}).animate({top:top+'px'}, 350, function(){
						$('#modal').attr('data-open', true);
					});
					
		};
			
		this.closeModal = function () {
			$('.overlay').removeClass('modal');
			$('#modal').animate({top:0, opacity:0}, 800);
			setTimeout(function(){
				$('#modal').remove();
				$('.overlay').remove();
			}, 800);
			$('body').removeClass('modal');
		};	

	};


	var home = new modal('body','home');
	
	
	$('#signin_nav, #sign_upin').on('click', '#signin button, span.signin, span.signup', function(){
		
		if(!$('body').find('.overlay').length) {
			home.init();
		}
	});

	$('body').on('click', '#modal .close', function(){
		
		home.closeModal();
		
	});

	$('body').on('click', 'button#action', function(e){
		$(e.target).after('Thanks for signing up!');

		setTimeout(function(){
			home.closeModal();
		}, 900);
		
		
	});


});
