/*global Sly */
jQuery(function ($) {
    'use strict';

    // -------------------------------------------------------------
	//   Custom using Array
	// -------------------------------------------------------------

    var $feeds = new Array('#example1', '#example2', '#example3');
    var $num = parseInt($feeds.length, 10);

    for (var i = 0; i < $num; i++) {
        
        var $section = $($feeds[i]);
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
            startAt: 0,
            scrollBar: $section.find('.scrollbar'),
            scrollBy: 1,
            pagesBar: $section.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            moveBy: 600,
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

        //if (i >= $num)
        //    break;
    }

    // =============================================================================

    // Method calling buttons
    $example.on('click', 'button[data-action]', function () {
        var action = $(this).data('action');

        switch (action) {
            case 'add':
                sly.add('<li>' + sly.items.length + '</li>');
                break;
            case 'remove':
                sly.remove(-1);
                break;
            default:
                sly[action]();
        }
    });

    // =============================================================================


});