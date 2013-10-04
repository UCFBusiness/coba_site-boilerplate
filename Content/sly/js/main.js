jQuery(function($){
    'use strict';

    // -------------------------------------------------------------
	//   Custom: Using an Array
	// -------------------------------------------------------------
    // -------------------------------------------------------------
	//   Force Centered Navigation
	// -------------------------------------------------------------

    var $feed = new Array('#example1', '#example2', '#example3');
    var $num = parseInt($feed.length, 10);

    for (var i = 0; i < $num; i++) {
        
        var $section = $($feed[i]);
        var $frame = $section.find('.frame'); window.frr = $frame;
        var sly = new Sly($frame, {
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 3,
            scrollBar: $section.find('.scrollbar'),
            scrollBy: 1,
            pagesBar: $section.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'swing',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Buttons
            forward: $section.find('.forward'),
            backward: $section.find('.backward'),
            prev: $section.find('.prev'),
            next: $section.find('.next'),
            prevPage: $section.find('.prevPage'),
            nextPage: $section.find('.nextPage')

        }).init();

    }

    // =============================================================================


});