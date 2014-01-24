//Logs the start of the file.
console.log( "START: main.js" );

require.config({
    waitSeconds: 10,
    paths: {
        'classie': 'js/classie',
        'debouncedresize': 'js/jquery.debouncedresize',
        'dmenu': 'js/jquery.dlmenu',
        'easing': 'js/jquery.easing.min',
        'echo': 'js/echo.min',
        'lockfix': 'js/jquery.lockfixed.min',
        'pageslide': 'js/jquery.pageslide',
        'sidebarfx': 'js/sidebarEffects',
        'sly': 'js/sly.min',
        'stroll': 'js/stroll.min'
    }
});

require(['debouncedresize', 'easing', 'dmenu', 'sly', 'echo', 'sidebarfx', 'classie'], function () {

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


    //-- lazy load images ---------------------------
    Echo.init({
        offset: 0,
        throttle: 250
    });
    
    // Echo.render(); is also available for non-scroll callbacks
    //-----------------------------------------------


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


    //-- global variables (not encouraged) ----------
    var screenwidth = parseInt($(this).width());
    var screenheight = parseInt($(this).height());

    if (screenwidth < 581) //load mobile scripts
        require(['pageslide', 'lockfix'], function () {

            //-- screen-size ----------------------------------
            $("#message").html(screenwidth + " x " + screenheight + " - mobile");
            //------------------------------------------------

            //-- resize to fit -------------------------------
            $('.cover').css('min-height', screenheight);
            //------------------------------------------------

            //-- Slide to the left; if slide is model, you'll have to call $.pageslide.close() to close
            $(".target_blank").pageslide({ direction: "left" });
            $("#slidecontent").css("height", screenheight);
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu ul", { forcemargin: true, offset: { top: 10, bottom: 10} });
            //------------------------------------------------

        });

    if ((screenwidth > 580) && (screenwidth < 999)) //load tablet scripts
        require(['pageslide', 'lockfix'], function () {

            //-- screen-size ----------------------------------
            $("#message").html(screenwidth + " x " + screenheight + " - tablet");
            //------------------------------------------------

            //-- resize to fit -------------------------------
            //$('.cover').css('min-height', screenheight);
            //------------------------------------------------

            //-- Slide to the left; if slide is model, you'll have to call $.pageslide.close() to close
            $(".target_blank").pageslide({ direction: "left" });
            $("#slidecontent").css("height", screenheight);
            //------------------------------------------------

            //-- page menu -----------------------------------
            $.lockfixed("#menu ul", { forcemargin: true, offset: { top: 0, bottom: 410} });
            //------------------------------------------------

        });

    if (screenwidth > 1000) //load desktop scripts
        require(['pageslide', 'lockfix'], function () {

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
            $("#message").html(screenwidth + " x " + screenheight + " - desktop");
            //------------------------------------------------

            //-- Slide to the left; if slide is model, you'll have to call $.pageslide.close() to close
            $(".target_blank").pageslide({ direction: "left" });
            $("#pageslide").css("width", function (index) {
                var cover = parseInt($("aside.cover").width());
                return screenwidth - cover;
            });
            $("#slidecontent").css("height", screenheight);
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

        if (screenwidth < 581) //load mobile scripts
            require([], function () {

                //-- screen-size ----------------------------------
                $("#message").html(screenwidth + " x " + screenheight + " - mobile");
                //------------------------------------------------

                //-- resize to fit -------------------------------
                //$('.cover').css('min-height', screenheight);
                //------------------------------------------------

            });

        if ((screenwidth > 580) && (screenwidth < 999)) //load tablet scripts
            require([], function () {

                //-- screen-size ----------------------------------
                $("#message").html(screenwidth + " x " + screenheight + " - tablet");
                //------------------------------------------------

                //-- resize to fit -------------------------------
                //$('.cover').css('min-height', screenheight);
                //------------------------------------------------

            });

        if (screenwidth > 1000) //load desktop scripts
            require(['pageslide'], function () {

                //-- screen-size ----------------------------------
                $("#message").html(screenwidth + " x " + screenheight + " - desktop");
                //------------------------------------------------

                //-- resize to fit -------------------------------
                //$('.cover').css('min-height', screenheight);
                //------------------------------------------------

                //-- pageslide size adjust -------------------------------
                $('#pageslide').css("width", function (index) {
                    var cover = parseInt($("aside.cover").width());
                    return screenwidth - cover;
                });
                $("#slidecontent").css("height", screenheight - 34);
                //------------------------------------------------
                 
            });

    }); //end debouncedresize


    //Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");

});

//Logs the end of the file.
console.log( "END: main.js" );