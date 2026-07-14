//Main Button
const start = document.getElementById("start");

//HTML Elements
const stopwatchMS = document.getElementById("stopwatchMS");
const stopwatchS = document.getElementById("stopwatchS");
const stopwatchM = document.getElementById("stopwatchM");

//Counters
var counterMS = 0;
var counterS = 0;
var counterM = 0;

//Logic that decides wheter the stopwatch is active or not
let isTimerActive = false;

//Stopwatch variable has to be outside so it wont mess with the scope
let stopwatch

//Handles the stopwatch
start.addEventListener("click", () => {
	if (!isTimerActive) {
		isTimerActive = !isTimerActive;
		stopwatch = setInterval( () => {
			//Manages minutes
			if (counterS>59) {
				counterS = 0;
				counterM+=1
				stopwatchM.innerText = String(counterM).padStart(2,"0");
				//seconds updater has to be here or it will exhibit the "60" in the stopwatch
				stopwatchS.innerText = String(counterS).padStart(2,"0");
			}
			//Manages seconds
			if (counterMS>999) {
				counterMS = 0;
				counterS+=1
				stopwatchS.innerText = String(counterS).padStart(2,"0");
			}
			//Manages milliseconds
			//milliseconds have to be updated last so the stopwatch won't flicker
			counterMS += 5;
			stopwatchMS.innerText = String(counterMS).padStart(3,"0");
		}, 5);
	//Manages the stop button
		start.innerHTML = "Stop"
	} else {
		isTimerActive = !isTimerActive;
		clearInterval(stopwatch);
		start.innerHTML = "Start"
	}
});