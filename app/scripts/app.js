(function(document) {
	'use strict';

	var app = document.getElementById('app');

	app.addEventListener('dom-change', function() {
		// our app is ready to rock

		var splash = document.getElementById('splash');

		splash.className = 'remove';

		setTimeout(function() {
			splash.parentNode.removeChild(splash);
		}, 500); // the CSS transition takes .4s, so we wait .5s then remove the element
	});

	window.addEventListener('WebComponentsReady', function() {
		// imports are loaded and elements have been registered
	});
})(document);