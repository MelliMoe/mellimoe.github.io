$(document).ready(function() {
	var mixer = mixitup('#portfoliolist', {
		selectors: {
			target: ".portfolio",
			filter: ".filter"
		}
	});
	$("[data-fancybox]").fancybox({
		selector: "a.image-thumb:visible",
		loop: !0,
		hash: !0,
		buttons: ["thumbs", "close"],
		transitionEffect: "slide",
		preventCaptionOverlap: !0
	});
});