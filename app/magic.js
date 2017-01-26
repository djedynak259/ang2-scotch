var message = 'hello';
function saySomething(message) {
    if (message === void 0) { message = 'whats up'; }
    console.log(message);
}
saySometing(message);
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'hi'; }
        return message + 'something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
