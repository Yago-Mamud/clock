const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timer = setInterval(
	function() {
		const teste = new Date();
		hours.innerText = teste.getHours();
		minutes.innerText = teste.getMinutes();
		seconds.innerText = teste.getSeconds();
	}, 1000);
	
//
const sw = document.getElementById("stopwatch");
function buttonHandler() {
	const stopwatch = setInterval(
		function() {
			let secondCounter;
			secondCounter += 1;
			sw.innerText = secondCounter;
		}, 1000);
}
const start = document.getElementById("start");
start.addEventListener("click", buttonHandler);