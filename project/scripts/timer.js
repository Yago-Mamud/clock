const timerButton = document.getElementById("timerButton");

const timerSecond = document.getElementById("timerSecond");

let timerActivationHandler = false;
let timerHandler;

timerButton.addEventListener("click", () => {
	if (!timerActivationHandler) {
		//Handles whether the timer is active or not
		timerActivationHandler = !timerActivationHandler;
		//
		let currentSecond = Number(timerSecond.innerHTML);
		timerHandler = setInterval( () => {
			currentSecond -= 1;
			timerSecond.innerHTML = currentSecond
		}, 1000);
	//Manages the stop button
		timerButton.innerHTML = "Stop"
	} else {
		timerActivationHandler = !timerActivationHandler;
		clearInterval(timerHandler);
		timerButton.innerHTML = "Start"
	}
});
