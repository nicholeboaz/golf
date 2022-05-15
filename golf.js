let golfText = document.getElementById("golf-text");
let emojiLeft = document.getElementById("emoji-left");
let emojiRight = document.getElementById("emoji-right");



function yesGolf() {
	golfText.id = "golf-text-yes";
	golfText.innerText = "Golf!";
	emojiLeft.innerText = "🎉";
	emojiRight.innerText = "⛳️"
}

function noGolf() {
	golfText.id = "golf-text-no";
	golfText.innerText = "Golf";
	emojiLeft.innerText = "🚫";
	emojiRight.innerText = "🚫";
}

