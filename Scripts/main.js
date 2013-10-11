//Logs the start of the file.
console.log( "START: main.js" );

require.config({
    waitSeconds: 10,
    paths: {
        'sly': 'js/sly.min',
        'dmenu': 'js/jquery.dlmenu',
        'fittext': 'js/jquery.fittext',
        'waypoint': 'js/waypoints.min',
        'easing': 'js/jquery.easing.min',
        'equalh': 'js/jquery.equalheight',
        'resize': 'js/jquery.debouncedresize',
        'lockfix': 'js/jquery.lockfixed.min',
        //scripts
        'sly-main': 'js/sly.main'
    }
});

require(['fittext', 'easing', 'sly', 'sly-main', 'dmenu', 'lockfix'], function () {

    //----- Font Sizes-------------------------------
    $('body').fitText(1.2, { minFontSize: '12px', maxFontSize: '16px' });
    //-----------------------------------------------


    //-- navigation menu -----------------------------------
    $('.dl-menuwrapper').dlmenu({
        animationClasses: {
            classin: 'dl-animate-in-2',
            classout: 'dl-animate-out-2'
        }
    }); //------------------------------------------------------


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
    ); //-----------------------------------------------


    //-- lazy load images ---------------------------
    $("img.lz").fadeTo(0, 0);
    $(window).scroll(function (d, h) {
        $('img.lz').each(function (i) {
            a = $(this).offset().top + $(this).height() - 400;
            b = $(window).scrollTop() + $(window).height();
            if (a < b) $(this).fadeTo(500, 1);
        })
    }); //--------------------------------------------


    //-- easing -------------------------------------------
    $('ul.menu a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
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


    //-- global variables (not encouraged) ----------
    var width = parseInt($(this).width());
    var height = parseInt($(this).height());

    if (width < 501) //load mobile scripts
        require(['lockfix'], function () {

            //-- screensize -------------------------
            $("#message").html(width + " x " + height + " - mobile");
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu-2 ul", { forcemargin: true, offset: { top: 10, bottom: 10} });
            //------------------------------------------------

        });

    if ((width > 500) && (width < 1025)) //load tablet scripts
        require(['lockfix'], function () {

            //-- screensize -------------------------
            $("#message").html(width + " x " + height + " - tablet");
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu-2 ul", { forcemargin: true, offset: { top: 0, bottom: 1410} });
            //------------------------------------------------

        });

    if (width > 1024) //load desktop scripts
        require(['lockfix'], function () {

            //-- screensize -------------------------
            $("#message").html(width + " x " + height + " - desktop");
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu-2 ul", { forcemargin: true, offset: { top: 10, bottom: 410} });
            //------------------------------------------------

        });

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

        sly.reload();

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