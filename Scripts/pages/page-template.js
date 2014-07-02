define(['jquery', 'debounced'], function ($)
{
    // runs 1st
    var screenwidth = parseInt($(this).width());
    var screenheight = parseInt($(this).height());
    var msg = "Hello World, this is a private method.";
    var gr = 1.618; // Golden Ratio

    var PrivateMessage = function () {
        return msg;
    };

    //-- Test jQuery
    $('#msg').text(' runs on jQuery');

    var PrivateMethods = {
        onLoad: function () // runs 2nd
        {
            //alert('runs 2nd');
            alert(PrivateMessage());

            if (screenwidth <= 600) // load mobile scripts
            {
                require([], function ()
                {
                    //------------------------------------------------
                });
            }

            if ((screenwidth > 600) && (screenwidth < 1000)) // load tablet scripts
            {
                require([], function ()
                {
                    //------------------------------------------------
                });
            }

            if (screenwidth >= 1000) // load desktop scripts
            {
                require([], function ()
                {
                    //------------------------------------------------
                });
            }
        },
        onResize: function () // runs 3rd
        {
            //alert('runs 3rd');
            alert(PrivateMessage());

            // ---------------------------------------------------
            // On Smart PageResize...
            // fires only after user is done resizing the window
            // ---------------------------------------------------            
            $(window).on('debouncedresize', function (event)
            {
                var screenwidth = parseInt($(this).width());
                var screenheight = parseInt($(this).height());

                if (screenwidth <= 600) // load mobile scripts
                {
                    require([], function ()
                    {
                        //------------------------------------------------
                    });
                }

                if ((screenwidth > 600) && (screenwidth < 1000)) // load tablet scripts
                {
                    require([], function ()
                    {
                        //------------------------------------------------
                    });
                }

                if (screenwidth >= 1000) // load desktop scripts
                {
                    require([], function ()
                    {
                        //------------------------------------------------
                    });
                }
            }); //end debouncedresize
        }
    };

    return PrivateMethods;
});