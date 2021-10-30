/* eslint-disable @typescript-eslint/no-non-null-assertion */
const former = console.log;
const msgs: Node[] = [];

console.log = (msg) => {
	former(msg);

	const log = document.getElementsByClassName('log')[0];

	while (log.firstChild) {
		log.removeChild(log.lastChild!);
	}

	const div = document.createElement('span');
	div.innerHTML = msg;

	msgs.unshift(div);

	if (msgs.length > 35) {
		msgs.pop();
	}

	log.append(...msgs);
};

window.onerror = function (message, url, linenumber) {
	console.log(
		'JavaScript error: ' + message + ' on line ' + linenumber + ' for ' + url
	);
};
