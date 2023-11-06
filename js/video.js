var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

