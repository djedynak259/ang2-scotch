var message = 'hello';

function saySomething(message: string = 'whats up') {
	console.log(message);
}

saySometing(message);


class Greeter {
	
	saySomething(message: string = 'hi'){
		return message + 'something';
	}
}

var greeter = new Greeter();
greeter.saySomething('hello');