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
			if (currentSecond >= 1) {
				currentSecond -= 1;
			} else {
				currentMinute -= 1
				currentSecond = 59;
			}
			timerMinute.innerHTML = currentMinute;
			timerSecond.innerHTML = currentSecond;
			//
		}, 1000);
	//Manages the stop button
		timerButton.innerHTML = "Stop"
	} else {
		timerActivationHandler = !timerActivationHandler;
		clearInterval(timerHandler);
		timerButton.innerHTML = "Start"
	}
});
