//Logs the start of the file.
console.log( "START: main.js" );

require.config({
    waitSeconds: 10,
    paths: {
        'sly': 'js/sly.min',
        'classie': 'js/classie',
        'sidebarfx': 'js/sidebarEffects',
        'pageslide': 'js/jquery.pageslide',
        'dmenu': 'js/jquery.dlmenu',
        'waypoint': 'js/waypoints.min',
        'easing': 'js/jquery.easing.min',
        'equalheight': 'js/jquery.equalheight',
        'debouncedresize': 'js/jquery.debouncedresize',
        'lockfix': 'js/jquery.lockfixed.min'
    }
});

require(['easing', 'dmenu', 'sly', 'classie', 'pageslide', 'sidebarfx', 'lockfix', 'debouncedresize'], function () {

    //-- navigation menu -----------------------------------
    $(".dl-menuwrapper").dlmenu({
        animationClasses: {
            classin: "dl-animate-in-2",
            classout: "dl-animate-out-2"
        }
    }); //------------------------------------------------------


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
    ); //-----------------------------------------------


    //-- lazy load images ---------------------------
    $(".wrappers img").fadeTo(0, 0);
    $(window).scroll(function (d, h) {
        $(".wrappers img").each(function (i) {
            a = $(this).offset().top + $(this).height() - 400;
            b = $(window).scrollTop() + $(window).height();
            if (a < b) $(this).fadeTo(500, 1);
        })
    }); //--------------------------------------------


    //-- easing -------------------------------------------
    $("ul.menu a").bind("click", function (event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    }); //--------------------------------------------


    //-- back to top --------------------------------
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


    //-- global variables (not encouraged) ----------
    var screenwidth = parseInt($(this).width());
    var screenheight = parseInt($(this).height());

    
    //-- Slide to the left; if slide is model, you'll have to call $.pageslide.close() to close
    $(".target_blank").pageslide({ direction: "left" });
    $("#pageslide").css("width", function (index) {
        var cover = parseInt($("aside.cover").width());
        return screenwidth - cover;
    });
    $("pageslide").css("height", screenheight);
    //------------------------------------------------


    if (screenwidth < 501) //load mobile scripts
        require(['lockfix'], function () {

            //-- screen-size ----------------------------------
            $(".message").html(screenwidth + " x " + screenheight + " - mobile");
            //------------------------------------------------

            //-- resize to fit -------------------------------
            //$('.cover').css('min-height', screenheight);
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu ul", { forcemargin: true, offset: { top: 10, bottom: 10} });
            //------------------------------------------------

        });

    if ((screenwidth > 500) && (screenwidth < 1025)) //load tablet scripts
        require(['lockfix'], function () {

            //-- screen-size ----------------------------------
            $(".message").html(screenwidth + " x " + screenheight + " - tablet");
            //------------------------------------------------

            //-- resize to fit -------------------------------
            //$('.cover').css('min-height', screenheight);
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu ul", { forcemargin: true, offset: { top: 0, bottom: 410} });
            //------------------------------------------------

        });

    if (screenwidth > 1024) //load desktop scripts
        require(['lockfix'], function () {

            //-- disable right-click ------------------------
            $(document).bind("contextmenu", function (e) {
                return false;
            }); //--------------------------------------------

            //-- check if cookies are enabled ---------------
            var dt = new Date();
            dt.setSeconds(dt.getSeconds() + 60);
            document.cookie = "cookietest=1; expires=" + dt.toGMTString();
            var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
            if (!cookiesEnabled) {
                //cookies are not enabled
                alert("cookies are not enabled");
            } //----------------------------------------------

            //-- screen-size ----------------------------------
            $(".message").html(screenwidth + " x " + screenheight + " - desktop");
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu ul", { forcemargin: true, offset: { top: 10, bottom: 410} });
            //------------------------------------------------

            //$('body').chardinJs('start');

        });

    //---------------------------------------------------
    // On Smart PageResize...
    // fires only after user is done resizing the window
    //---------------------------------------------------

    $(window).on('debouncedresize', function (event) {

        var screenwidth = parseInt($(this).width());
        var screenheight = parseInt($(this).height());

        if (screenwidth < 501) //load mobile scripts
            require([], function () {

                //-- screen-size ----------------------------------
                $(".message").html(screenwidth + " x " + screenheight + " - mobile");
                //------------------------------------------------

                //-- resize to fit -------------------------------
                //$('.cover').css('min-height', screenheight);
                //------------------------------------------------

            });

        if ((screenwidth > 500) && (screenwidth < 1025)) //load tablet scripts
            require([], function () {

                //-- screen-size ----------------------------------
                $(".message").html(screenwidth + " x " + screenheight + " - tablet");
                //------------------------------------------------

                //-- resize to fit -------------------------------
                //$('.cover').css('min-height', screenheight);
                //------------------------------------------------

            });

        if (screenwidth > 1024) //load desktop scripts
            require([], function () {

                //-- screen-size ----------------------------------
                $(".message").html(screenwidth + " x " + screenheight + " - desktop");
                //------------------------------------------------

                //-- resize to fit -------------------------------
                //$('.cover').css('min-height', screenheight);
                //------------------------------------------------

                //-- pageslide size adjust -------------------------------
                $('#pageslide').css("width", function (index) {
                    var cover = parseInt($("aside.cover").width());
                    return screenwidth - cover;
                });
                $("pageslide").css("height", screenheight);
                //------------------------------------------------

            });

    }); //end debouncedresize


    //Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");

});

//Logs the end of the file.
console.log( "END: main.js" );