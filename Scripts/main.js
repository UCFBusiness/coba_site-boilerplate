//Logs the start of the file.
console.log( "START: main.js" );

require.config({
    waitSeconds: 10,
    paths: {
        'sly': '../content/sly/js/main',
        'fittext': '../content/js/jquery.fittext',
        'waypoint': '../content/js/waypoints.min',
        'easing': '../content/js/jquery.easing.min',
        'equalh': '../content/js/jquery.equalheight',
        'resize': '../content/js/jquery.debouncedresize'
    }
});

require(['fittext', 'easing', 'sly'], function () {

    // http://stackoverflow.com/questions/3698200/window-onload-vs-document-ready
    // http://4loc.wordpress.com/2009/04/28/documentready-vs-windowload/

    //---------------------------------------------------
    // On PageReady...
    // occurs as early as possible after the HTML document has loaded.
    //---------------------------------------------------

    $(document).ready(function () {

        //----- Font Sizes-------------------------------
        $('body').fitText(1.2, { minFontSize: '12px', maxFontSize: '14px' });
        //-----------------------------------------------

        //----- fade out fixed menu----------------------
        var nav = $('#nav');

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop != 0)
                $(nav).stop().animate({ 'opacity': '0.2' }, 400);
            else
                $(nav).stop().animate({ 'opacity': '1' }, 400);
        });

        $(nav).hover(
            function (e) {
                var scrollTop = $(window).scrollTop();
                if (scrollTop != 0) {
                    $(this).stop().animate({ 'opacity': '1' }, 400);
                }
            },
            function (e) {
                var scrollTop = $(window).scrollTop();
                if (scrollTop != 0) {
                    $(this).stop().animate({ 'opacity': '0.2' }, 400);
                }
            }
        );
        //-----------------------------------------------

        //-- lazy load images ---------------------------
        $("body img").fadeTo(0, 0);
        $(window).scroll(function (d, h) {
            $('body img').each(function (i) {
                a = $(this).offset().top + $(this).height() - 400;
                b = $(window).scrollTop() + $(window).height();
                if (a < b) $(this).fadeTo(500, 1);
            })
        }); //--------------------------------------------

        //-- disable right-click ------------------------
        $(document).bind("contextmenu", function (e) {
            return false;
            //-------------------------------------------
        }); //--------------------------------------------

        //-- check if cookies are enabled ---------------
        var dt = new Date();
        dt.setSeconds(dt.getSeconds() + 60);
        document.cookie = "cookietest=1; expires=" + dt.toGMTString();
        var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
        if (!cookiesEnabled) {
            //cookies are not enabled
            alert('cookies are not enabled');
        } //----------------------------------------------

        //-- back to top --------------------------------
        var offset = 220;
        var duration = 500;
        var topButton = $('.back-to-top');

        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $(topButton).fadeIn(duration);
            } else {
                $(topButton).fadeOut(duration);
            }
        });

        $(topButton).click(function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
        //-----------------------------------------------

    }); //end ready


    $(document).ready(function () {

        //-- global variables (not encouraged) ----------
        var width = parseInt($(this).width());
        var height = parseInt($(this).height());

        if (width < 481) //load mobile scripts
            require([], function () {
                //-- screensize -------------------------
                $("#message").html(width + " x " + height + " - mobile");
            });

        if ((width > 480) && (width < 1025)) //load tablet scripts
            require([], function () {
                //-- screensize -------------------------
                $("#message").html(width + " x " + height + " - tablet");
            });

        if (width > 1024) //load desktop scripts
            require([], function () {
                //-- screensize -------------------------
                $("#message").html(width + " x " + height + " - desktop");
            });

    }); //end ready


    //---------------------------------------------------
    // On PageLoad...
    // occurs later, when all content has also been loaded. (e.g. images)
    //---------------------------------------------------

    $(window).load(function () {
        // do something...
    }); //end load


    //---------------------------------------------------
    // On Smart PageResize...
    // fires once after the user is done resizing
    //---------------------------------------------------

    $(window).on('debouncedresize', function (event) {

        var width = parseInt($(this).width());
        var height = parseInt($(this).height());

        if (width < 481) //load mobile scripts
            require([], function () {
                //-- screensize -------------------------
                $("#message").html(width + " x " + height + " - mobile");
            });

        if ((width > 480) && (width < 1025)) //load tablet scripts
            require([], function () {
                //-- screensize -------------------------
                $("#message").html(width + " x " + height + " - tablet");
            });

        if (width > 1024) //load desktop scripts
            require([], function () {
                //-- screensize -------------------------
                $("#message").html(width + " x " + height + " - desktop");
            });

    }); //end debouncedresize


    //---------------------------------------------------
    // On Standard PageResize...
    // fires several times while the user resizes
    //---------------------------------------------------

    $(window).resize(function (event) {
        //do something ...
    }); //end resize


    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------


    //Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");

});

//Logs the end of the file.
console.log( "END: main.js" );