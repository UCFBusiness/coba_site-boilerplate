/*global Sly */
jQuery(function ($) {
    'use strict';

    var $feeds = new Array('#example1', '#example2', '#example3');
    var $num = parseInt($feeds.length, 10);

    for (var i = 0; i < $num; i++) {
        
        //alert($feeds[i]);

        var $example = $($feeds[i]);
        var $frame = $example.find('.frame'); window.frr = $frame;
        var sly = new Sly($frame, {
            horizontal: 1,
            itemNav: 'forceCentered',
            activateMiddle: 1,
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 2,
            scrollBar: $example.find('.scrollbar'),
            scrollBy: 1,
            pagesBar: $example.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            moveBy: 600,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Buttons
            forward: $example.find('.forward'),
            backward: $example.find('.backward'),
            prev: $example.find('.prev'),
            next: $example.find('.next'),
            prevPage: $example.find('.prevPage'),
            nextPage: $example.find('.nextPage')
        }).init();

        //if (i >= $num)
        //    break;
    }

    // ==========================================================================
    //   Header example
    // ==========================================================================
    //var $example = $('#example');
    //var $frame = $example.find('.frame'); window.frr = $frame;
    //var sly = new Sly($frame, {
    //    horizontal: 1,
    //    itemNav: 'forceCentered',
    //    activateMiddle: 1,
    //    smart: 1,
    //    activateOn: 'click',
    //    mouseDragging: 1,
    //    touchDragging: 1,
    //    releaseSwing: 1,
    //    startAt: 10,
    //    scrollBar: $example.find('.scrollbar'),
    //    scrollBy: 1,
    //    pagesBar: $example.find('.pages'),
    //    activatePageOn: 'click',
    //    speed: 300,
    //    moveBy: 600,
    //    elasticBounds: 1,
    //    dragHandle: 1,
    //    dynamicHandle: 1,
    //    clickBar: 1,

    //    // Buttons
    //    forward: $example.find('.forward'),
    //    backward: $example.find('.backward'),
    //    prev: $example.find('.prev'),
    //    next: $example.find('.next'),
    //    prevPage: $example.find('.prevPage'),
    //    nextPage: $example.find('.nextPage')
    //}).init();


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