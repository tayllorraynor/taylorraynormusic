/*
* conotroller for my entire website
*/
$(document).ready(function(){	

    $('.contact-link').on('click', function() {
		if ($('#Contact').hasClass('hide')) {
			$('#Contact').removeClass('hide');
		}
	});

	$('.x-button').on('click', function() {
		closeStuff();
	});

	function closeStuff () {
		if (!($('#Contact').hasClass('hide'))) {
			$('#Contact').addClass('hide');
		}
		if (!($('#imageContainer').hasClass('hide'))) {
			$('#imageContainer').addClass('hide');
		}
	}

	$('.expandable-img').on('click', function() {
		$('#image').css('background-image', 'url("' + $(this).attr('src').replace('thumb', 'img').replace('jpg', 'JPG') + '")');
		$('#image').data('value', $(this).data('value'));
		$('#Caption').html($(this).data('caption'));
		$('#imageContainer').removeClass('hide');
	})

	$('.imgArrowBox').on('click', function() {
		navigateImages($(this).hasClass('left'));
	});

	function navigateImages(isLeftArrow) {
		if ($('#imageArrowBox').hasClass('hide'))
			return;

		var images,
			currentValue = $('#image').data('value'),
			newValue;

		images = $('#Media').find('.expandable-img');

		if (isLeftArrow) {
			newValue = (currentValue - 1 < 1) ? images.length : currentValue - 1;
		} else {
			newValue = (currentValue + 1 > images.length) ? 1 : currentValue + 1;
		}

		$('#image').css('background-image', 'url("' + $(images[newValue - 1]).attr('src').replace('thumb', 'img').replace('jpg', 'JPG') + '")');
		$('#Caption').html($(images[newValue - 1]).data('caption'));
		if( $(images[newValue - 1]).data('caption') === '' )
			$('#Caption').html('');
		$('#image').data('value', $(images[newValue - 1]).data('value'));
	}

	document.onkeydown = function(event) {
        if (!event)
            event = window.event;
        var code = event.keyCode;
        if (event.charCode && code == 0)
            code = event.charCode;
        switch(code) {
            case 27: 		//esc
                closeStuff();
                break;
            case 37: 		//left arrow
                navigateImages(true);
                break;
            case 39: 		//right arrow
                navigateImages(false);
                break;
        }
        event.preventDefault();
    };
});