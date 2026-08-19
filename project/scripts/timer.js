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
		let secondNumberValue = Number(timerSecond.innerHTML);
		let minuteNumberValue = Number(timerMinute.innerHTML);
		
		let secondToAdd = secondNumberValue + buttonValue;
		
		if (secondToAdd > 59) {
			let remainingSeconds = (secondToAdd/60)
			minuteNumberValue = Math.floor(minuteNumberValue + remainingSeconds);
			secondToAdd =+ secondToAdd % 60
		}
		
		timerMinute.innerHTML = String(minuteNumberValue).padStart(2,"0");
		timerSecond.innerHTML = String(secondToAdd).padStart(2,"0");
	});
});

//Timer reset handler
const timerResetButton = document.getElementById("timerResetButton");

timerResetButton.addEventListener("click", () => {
	timerMinute.innerHTML = "00"
	timerSecond.innerHTML = "00"
});

//Mini value change handler

const minValueChange = document.querySelectorAll(".minValueChange");
minValueChange.forEach((mvButt) => {
	mvButt.addEventListener("click", () => {
		if (timerActivationHandler === false) {
			let mvButtValue = mvButt.getAttribute("data-minValueChange");
			let valueToChange = Number(timerMinute.innerHTML);
			if (mvButtValue === "+") {
					timerMinute.innerHTML = String(valueToChange + 1).padStart(2,"0");;
			} else {
				if (valueToChange != 0) {
					timerMinute.innerHTML = String(valueToChange - 1).padStart(2,"0");;
				} else {
					return;
				}
			}
		} else {
			return;
		}
	});
});