$(function() {
        $("#portfoliolist").mixItUp({selectors:{target:".portfolio",filter:".filter"}});
    });
    $(document).ready(function(){$("[data-fancybox]").fancybox({selector:"a.image-thumb:visible",loop:!0,hash:!0,buttons:["thumbs","close"],transitionEffect:"slide",preventCaptionOverlap:!0})});