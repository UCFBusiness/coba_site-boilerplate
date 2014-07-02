/*! Avoid `console` errors in browsers that lack a console. */
(function () { for (var g, h = function () { }, f = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "), j = f.length, i = window.console = window.console || {}; j--; ) { g = f[j], i[g] || (i[g] = h) } })();
//-----------------------------------------------
// Logs the start of the file.
console.log( 'START: main.js' );
//-----------------------------------------------

// Configure RequireJS
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        /**-----------------------------------
         Frameworks/Libraries
        -----------------------------------**/

        'angular': [ // angular does not support AMD out of the box, put it in a shim
            '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
            // If CDN fails, load from this location
            'libs/angular.min'
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
            // If CDN fails, load from this location
            'libs/bootstrap.min'
        ],
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            // If CDN fails, load from this location
            'libs/jquery-2.0.3.min'
        ],
        'jquery-ui': [
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
            // If CDN fails, load from this location
            'libs/jquery-ui-1.10.3.min'
        ],
        'modernizr': [
            //'//ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.6.2',
            // If CDN fails, load from this location
            'libs/modernizr-2.6.2.min'
        ],
        'domReady': 'libs/domReady',

        /**-----------------------------------
         jQuery Plugins
        -----------------------------------**/
        'classie': 'libs/classie',
        'dlmenu': 'libs/jquery.dlmenu',
        'debounced': 'libs/jquery.debouncedresize',
        'echo': 'libs/echo.min',
        'lazyloader': 'libs/jquery.bttrlazyloading.min',
        'lockfix': 'libs/jquery.lockfixed.min',
        'stroll': 'libs/stroll.min',
        // offcanvas ---------------------------------
        'offcanvas': 'libs/jquery.offcanvas',
        'overthrow': 'libs/overthrow',
        'hammer': 'libs/hammer',
        'jhammer': 'libs/jquery.hammer',
        // pagescroll --------------------------------
        'mousewheel': 'libs/jquery.mousewheel',
        'mwintent': 'libs/mwheelIntent',
        'jscroll': 'libs/jquery.jscrollpane.min',
        // -------------------------------------------
        'pageslide': 'libs/jquery.pageslide',
        'transitions': 'js/pagetransitions',
        // sly ----------------------------------------
        'easing': 'libs/jquery.easing.min',
        'sly': 'libs/sly.min',
        //'sly-horizontal': 'js/sly.horizontal'
        // -------------------------------------------
    },
    shim:
    {
        'angular':
        {
            exports: 'angular'
        },
        'bootstrap':
        {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'jquery':
        {
            exports: '$'
        },
        'jquery-ui':
        {
            deps: ['jquery'],
            exports: 'jqueryui'
        },
        'modernizr':
        {
            exports: 'modernizr'
        },
        // -------------------------------------------
        'dlmenu':
        {
            deps: ['jquery']
        },
        'debounced':
        {
            deps: ['jquery']
        },
        'easing':
        {
            deps: ['jquery']
        },
        'jscroll':
        {
            deps: ['jquery', 'mousewheel', 'mwintent']
        },
        'lazyloader':
        {
            deps: ['jquery']
        },
        'lockfix':
        {
            deps: ['jquery']
        },
        'mousewheel':
        {
            deps: ['jquery']
        },
        'mwintent':
        {
            deps: ['mousewheel']
        },
        'pageslide':
        {
            deps: ['jquery']
        },
        'sly':
        {
            deps: ['easing'],
            exports: 'sly'
        },
        'transitions':
        {
            deps: ['jquery']
        }
        // -------------------------------------------
    }
});

// Enter global require code here...
require(['modernizr'], function ()
{
    require(['jquery', 'domReady'], function ($, domReady)
    {
        // Log that jquery was loaded into the global name-space
        console.log('jQuery', $.fn.jquery, 'loaded!');

        // Right-click disabled
        $(document).bind('contextmenu', function (e)
        {
            return false;
        });

        domReady(function ()
        {
            require(['angular', 'bootstrap', 'classie', 'dlmenu', 'easing', 'echo', 'lazyloader', 'offcanvas', 'overthrow', 'hammer', 'jhammer', 'transitions'], function ()
            {
                // Add off-canvas
                $("html").offcanvas({
                    hasSidebarRight: true
                });

                var screenheight = parseInt($(this).height());
                $(".pt-perspective").css("height", function (index)
                {
                    //var topBar = parseInt($('.topBar').height());
                    //return screenheight - topBar;
                    return screenheight;
                });

                // Lazyload website images
                $('.img-responsive').bttrlazyloading({
                    //placeholder: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
                    backgroundcolor: 'transparent',
                    animation: 'fadeIn',
                    container: '.scroll-pane'
                });




                //-- lazy load images ---------------------------
                Echo.init({
                    offset: 0,
                    throttle: 250
                });
    
                // Echo.render(); is also available for non-scroll callbacks
                //-----------------------------------------------


                //-- navigation menu ----------------------------
                $(".dl-menuwrapper").dlmenu({
                    animationClasses: {
                        classin: "dl-animate-in-2",
                        classout: "dl-animate-out-2"
                    }
                }); //-------------------------------------------

                //----- fade out fixed menu----------------------
                var nav = $("#nav");

                $(window).scroll(function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop != 0)
                        $(nav).stop().animate({ "opacity": "0.2" }, 400);
                    else
                        $(nav).stop().animate({ "opacity": "1" }, 400);
                });

                $(nav).hover(
                    function (e) {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop != 0) {
                            $(this).stop().animate({ "pacity": "1" }, 400);
                        }
                    },
                    function (e) {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop != 0) {
                            $(this).stop().animate({ "pacity": "0.2" }, 400);
                        }
                    }
                ); //--------------------------------------------

                //-- easing : menu navigation -----------------------------
                $("ul.menu a").bind("click", function (event) {
                    var $anchor = $(this);
                    $("html, body").stop().animate({
                        scrollTop: $($anchor.attr("href")).offset().top
                    }, 1500, "easeInOutExpo");
                    event.preventDefault();
                }); //-------------------------------------------

                //-- easing : next page -----------------------------
                $(".btnNext").bind("click", function (event) {
                    var $anchor = $(this);
                    $("html, body").stop().animate({
                        scrollTop: $($anchor.attr("href")).offset().top
                    }, 1500, "easeInOutExpo");
                    event.preventDefault();
                }); //-------------------------------------------

                //-- easing : back to top --------------------------------
                var offset = 220;
                var duration = 500;
                var topButton = $(".back-to-top");

                $(window).scroll(function () {
                    if ($(this).scrollTop() > offset) {
                        $(topButton).fadeIn(duration);
                    } else {
                        $(topButton).fadeOut(duration);
                    }
                });

                $(topButton).click(function (event) {
                    event.preventDefault();
                    $("html, body").animate({ scrollTop: 0 }, duration);
                    return false;
                });
                //-----------------------------------------------






                // Add scroll panes
                //$('.scroll-pane').jScrollPane();
                //----------------------------------------------- 

                // Logs the end of the file.
                console.log('END: main.js');
                //-----------------------------------------------
            });
        });
    });
});