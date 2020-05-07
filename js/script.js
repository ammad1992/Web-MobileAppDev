$(document).ready(function(){
$('.without-caption').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

$('.with-caption').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		zoom: {
			enabled: true
		}
	});
	
	$('.popup-youtube').magnificPopup({
    type: 'iframe',
    iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

      id: 'v=', // String that splits URL in a two parts, second part should be %id%
      // Or null - full URL will be returned
      // Or a function that should return %id%, for example:
      // id: function(url) { return 'parsed id'; }

      src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    },
	} ,
		
	
	
		srcAction: 'iframe_src',
	}
    });
$('.popup-vimeo').magnificPopup({
    type: 'iframe',
    iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: 'https://player.vimeo.com/video/%id%?autoplay=1'
    },
	} ,
		
	
	
		srcAction: 'iframe_src',
	}
    });
$('.popup-dailymotion').magnificPopup({
    type: 'iframe',
    iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    vimeo: {
      index: 'dailymotion.com/',
      id: '/',
      src: 'https://www.dailymotion.com/embed/video/%id%?autoplay=1'
    },
	} ,
		
	
	
		srcAction: 'iframe_src',
	}
    });
		
$('.popup-gmaps').magnificPopup({
    type: 'iframe',
    iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    gmaps: {
      index: '//maps.google.',
      src: 'https://www.google.com/maps/embed?%id%?autoplay=1'
    }
	},
	
		srcAction: 'iframe_src',
	}
    });

});

  
