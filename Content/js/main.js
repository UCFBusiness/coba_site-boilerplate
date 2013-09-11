//Logs the start of the file.
console.log( "START: main.js" );

require([], function () {

    var width = parseInt($(this).width());
    var height = parseInt($(this).height());

    //disable right-click
    $(document).bind("contextmenu", function (e) {
        return false;
    });

    //check if cookies are enabled
    var dt = new Date();
    dt.setSeconds(dt.getSeconds() + 60);
    document.cookie = "cookietest=1; expires=" + dt.toGMTString();
    var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
    if (!cookiesEnabled) {
        
        //cookies are not enabled
        alert('cookies are not enabled');

    }

    //------------------------------------------------
    // On DOM Ready...
    //------------------------------------------------

    $(document).ready(function () {

        if (width < 481) //load mobile scripts
            require([], function () {
                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - mobile");
            });

        if ((width > 480) && (width < 1025)) //load tablet scripts
            require([], function () {
                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - tablet");
            });

        if (width > 1024) //load desktop scripts
            require([], function () {
                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - desktop");
            });
        //--------------------------------------------
    });//end


    //------------------------------------------------
    // On PageResize...
    //------------------------------------------------

    //-- Delayed response on resize (waits until user is done resizing the window)
    $(window).on('debouncedresize', function (event) {

        var width = parseInt($(this).width());
        var height = parseInt($(this).height());

        if (width < 481) //load mobile scripts
            require([], function () {
                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - mobile");
            });

        if ((width > 480) && (width < 1025)) //load tablet scripts
            require([], function () {
                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - tablet");
            });

        if (width > 1024) //load desktop scripts
            require([], function () {
                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - desktop");
            });
        //--------------------------------------------
    });//end


    //-- Instant response on resize (fires while the user resizes the window)
    $(window).resize(function (event) {

        //do something ...

        //--------------------------------------------
    });//end

    //------------------------------------------------
    //------------------------------------------------
    //------------------------------------------------

    //Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");

});

//Logs the end of the file.
console.log( "END: main.js" );