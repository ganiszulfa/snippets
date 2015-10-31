// ==UserScript==
// @name        Reddit Sub Filter
// @namespace   http://*.reddit.*/r/all*
// @version     1.01
// @grant       none
// @description:en Filter subs from r/all.
// @description Filter subs from r/all.
// ==/UserScript==

// code taken from https://greasyfork.org/en/scripts/7882-reddit-sub-filter

// This list based on: https://gist.github.com/kimagure/4490644
// Edit to your Reddit preferences.
horriblesubreddits = [
	'trees',
	'wtf',
	'fffffffuuuuuuuuuuuu',
	'adviceanimals',
	'firstworldanarchists',
	'ImGoingToHellForThis',
	'TwoXChromosomes',
	'BlackPeopleTwitter',
	'creepy'
];

var shitty_subs = document.getElementsByClassName("subreddit");

for (var i = shitty_subs.length - 1; i > -1; i--) {
	var url = shitty_subs[i].href.toLowerCase();
	
	for (var j = 0; j < horriblesubreddits.length; j++) {
		if (url.indexOf(horriblesubreddits[j].toLowerCase()) != -1) {
            var entry = shitty_subs[i].parentNode.parentNode;
            entry.parentNode.innerHTML = "";
		}
	}
}
