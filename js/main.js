/* Lewis Heath — portfolio
   Reveals sections as they scroll into view. Without this script (or with
   reduced motion turned on) everything is simply shown as normal. */
(function () {
	var items = document.querySelectorAll('[data-reveal]');

	// Stagger children of [data-stagger] groups, e.g. data-stagger="110" = 110ms apart
	var groups = document.querySelectorAll('[data-stagger]');
	for (var g = 0; g < groups.length; g++) {
		var step = parseInt(groups[g].getAttribute('data-stagger'), 10) || 100;
		var kids = groups[g].children;
		var n = 0;
		for (var k = 0; k < kids.length; k++) {
			if (kids[k].hasAttribute('data-reveal')) {
				kids[k].style.setProperty('--reveal-delay', (n++ * step) + 'ms');
			}
		}
	}

	function showAll() {
		for (var i = 0; i < items.length; i++) items[i].classList.add('is-visible');
	}

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce || !('IntersectionObserver' in window)) {
		showAll();
		return;
	}

	var observer = new IntersectionObserver(function (entries) {
		for (var i = 0; i < entries.length; i++) {
			if (entries[i].isIntersecting) {
				entries[i].target.classList.add('is-visible');
				observer.unobserve(entries[i].target);
			}
		}
	}, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

	for (var i = 0; i < items.length; i++) observer.observe(items[i]);
})();
