//helper methods

exports.validateEmail = function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//print chatlog from json
exports.printChatlog = function printChatlog(chatlog) {
	let dialog = '';
	chatlog.forEach((data) => {
		if (data.type === 'text'){
			dialog += data.isBot ? 'Bot: ' : 'You: ';
			dialog += data.message+'\n';
		}
	});
	console.log("printed dialog: ", dialog);
	return dialog;
}
