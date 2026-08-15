const timerButton = document.getElementById("timerButton");

const timerSecond = document.getElementById("timerSecond");
const timerMinute = document.getElementById("timerMinute");

let timerActivationHandler = false;
let timerHandler;

timerButton.addEventListener("click", () => {
	if (!timerActivationHandler) {
		//Handles whether the timer is active or not
		timerActivationHandler = !timerActivationHandler;		
		//
		timerHandler = setInterval( () => {
			//
			let currentSecond = Number(timerSecond.innerHTML);
			let currentMinute = Number(timerMinute.innerHTML);
			//
			if (currentMinute === 0 && currentSecond === 0) {
				stopHandler();
				return;
			}
			//
			if (currentSecond >= 1) {
				currentSecond -= 1;
			} else {
				currentMinute -= 1
				currentSecond = 59;
			}
			timerMinute.innerHTML = String(currentMinute).padStart(2,"0");
			timerSecond.innerHTML = String(currentSecond).padStart(2,"0");
			//
		}, 1000);
	//Manages the stop button
		timerButton.innerHTML = "Stop"
	} else {
		stopHandler();
	}
});

function stopHandler() {
	timerActivationHandler = !timerActivationHandler;
	clearInterval(timerHandler);
	timerButton.innerHTML = "Start"
}

//Time adder handler
const timeButtons = document.querySelectorAll(".timeAdder");
timeButtons.forEach((tButt) => {
	tButt.addEventListener("click", () => {
		let buttonValue = Number(tButt.getAttribute("data-timeValue"));
		let currentTimeValue = Number(timerSecond.innerHTML);
		let timeToAdd = currentTimeValue + buttonValue;
		timerSecond.innerHTML = String(timeToAdd).padStart(2,"0");
	});
});