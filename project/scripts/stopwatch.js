//STOPWATCH HANDLER
//Main Button
const start = document.getElementById("start");

//HTML Elements
const stopwatchMS = document.getElementById("stopwatchMS");
const stopwatchS = document.getElementById("stopwatchS");
const stopwatchM = document.getElementById("stopwatchM");

//Logic that decides wheter the stopwatch is active or not
let isTimerActive = false;

//Time handling variables
//Starting time
let startTimeCounter = 0;
//How much time has passed since the activation of the stopwatch
let timePassed = 0;

//Stopwatch variable has to be outside so it wont mess with the scope
let stopwatch

//Handles the stopwatch
start.addEventListener("click", () => {
	if (!isTimerActive) {
		//Handles whether the stopwatch is active or not
		isTimerActive = !isTimerActive;
		//Handles the stopwatch resume
		startTimeCounter = Date.now() - timePassed
		stopwatch = setInterval( () => { 
		
			timePassed = Date.now() - startTimeCounter
			
			const minutes = Math.floor((timePassed/1000/60)%60)
			const seconds = Math.floor((timePassed/1000)%60)
			const milliseconds = Math.floor(timePassed % 1000)
			
			stopwatchM.innerText = String(minutes).padStart(2,"0");
			stopwatchS.innerText = String(seconds).padStart(2,"0");
			stopwatchMS.innerText = String(milliseconds).padStart(3,"0");
		}, 10);
	//Manages the stop button
		start.innerHTML = "Stop"
	} else {
		isTimerActive = !isTimerActive;
		clearInterval(stopwatch);
		start.innerHTML = "Start"
	}
});

//LAP HANDLER
//Main Button
const lap = document.getElementById("lap");

//HTML elements

const lapContainer = document.getElementById("lapContainer");

lap.addEventListener("click", () => {
	const newMark = document.createElement("p");
	newMark.classList.add("lapClass");
	newMark.textContent = stopwatchM.innerText + ":" + stopwatchS.innerText + ":" + stopwatchMS.innerText;
	lapContainer.appendChild(newMark);
});

//RESET HANDLER

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
	//Resets the stopwatch
	const SWReset = () => {
		stopwatchM.innerText = String(0).padStart(2,"0");
		stopwatchS.innerText = String(0).padStart(2,"0");
		stopwatchMS.innerText = String(0).padStart(3,"0");
		timePassed = 0;
	}
	//If the stopwatch is currently running
	if (isTimerActive = true) {
		isTimerActive = !isTimerActive;
		clearInterval(stopwatch);
		start.innerHTML = "Start"
		
		SWReset();
	//If the stopwatch isn't currently running
	} else {
		SWReset();
	}
	//Resets the laps.
	const lapsChild = document.querySelectorAll(".lapClass");
	lapsChild.forEach ((lapRemoved) => {
		lapContainer.removeChild(lapRemoved);
	});
});