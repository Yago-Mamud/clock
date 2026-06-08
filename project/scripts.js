const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timer = setInterval(
	function() {
		const teste = new Date();
		if ( teste.getHours() < 10 ) {
			hours.innerText = "0"+teste.getHours();	
		} else {
			hours.innerText = teste.getHours();	
		}
		//
		if ( teste.getMinutes() < 10 ) {
			minutes.innerText = "0"+teste.getMinutes();
		} else {
			minutes.innerText = teste.getMinutes();
		}
		//
		if ( teste.getSeconds() < 10 ) {
			seconds.innerText = "0"+teste.getSeconds();	
		} else {
			seconds.innerText = teste.getSeconds();
		}
	}, 1000);
	
//
const sw = document.getElementById("stopwatch");
var secondCounter = 0;
function buttonHandler() {
	const stopwatch = setInterval(
		function() {
			secondCounter += 1;
			sw.innerText = secondCounter;
		}, 1000);
}
const start = document.getElementById("start");
start.addEventListener("click", buttonHandler);