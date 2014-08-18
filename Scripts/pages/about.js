define([], function ()
{
    var msg = "This is a private method.";

    var toPrivateMessage = function ()
    {
        return msg;
    };

    var Application = function ()
    {
        this.id = 123;
    };

    Application.prototype.toString = function ()
    {
        //alert(toPrivateMessage());
        return this.id;
    };

    return Application;
});