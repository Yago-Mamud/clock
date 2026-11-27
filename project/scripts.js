// TAB SWITCHING HANDLER 
const buttons = document.querySelectorAll(".changeTab")
const containers = document.querySelectorAll(".container")
buttons.forEach((butt) => {
	butt.addEventListener("click", (pressedButton) => {
		let currentID = butt.getAttribute("data-target");
		containers.forEach((currentContainer) => {
			let currentCID = currentContainer.id;
			if (currentCID === currentID) {
				currentContainer.classList.add("visible");
			} else {
				currentContainer.classList.remove("visible")
			}
		})
		//the parameter is only being used for this
		if (!pressedButton.target.classList.contains("active")) {
			buttons.forEach((cb) => {
				cb.classList.remove("active");
			})
			pressedButton.target.classList.add("active");
		} else {
			pressedButton.target.classList.add("active");
		}
	});
});

// CLOCK HANDLER 
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const loop = setInterval( function() {
	const currentTime = new Date();
	if (currentTime.getHours() < 10) {
		hour.innerText = "0" + currentTime.getHours();
	} else {
		hour.innerText = currentTime.getHours();
	}
	if (currentTime.getMinutes() < 10) {
		minute.innerText = "0" + currentTime.getMinutes();
	} else {
		minute.innerText = currentTime.getMinutes();
	}
	if (currentTime.getSeconds() < 10) {
		second.innerText = "0" + currentTime.getSeconds();
	} else {
		second.innerText = currentTime.getSeconds();
	}

},1000)

//TIMER HANDLER
const timerInput = document.querySelectorAll(".timerInput");
//prevents wrong inputs by the user
timerInput.forEach((current) => {
	current.addEventListener("focus", () => {
		current.select();
	})
	current.addEventListener("input", () => {
		let digits = current.value.replace(/\D/g, "")
		if (digits !== "" && Number(digits)>59) {
			digits = "59";
		}
		current.value = digits
	});
	current.addEventListener("blur", () => {
		if (current.value.length === 1 ) {
			current.value = "0" + current.value
		}
	});
});

//handles the timer
const timerStartButton = document.getElementById("timerStartButton");
const timerH = document.getElementById("timerH");
const timerM = document.getElementById("timerM");
const timerS = document.getElementById("timerS");
let isTimerActive = false;
let timerLoop
timerStartButton.addEventListener("click", () => {
	if (!isTimerActive) {
		isTimerActive = !isTimerActive;
		timerInput.forEach((currentTimerInput) => {
			currentTimerInput.disabled = !currentTimerInput.disabled;
		});
		//handles the countdown
		let timerSValue = Number(timerS.value);
		if (timerS.value === "00" || timerS.value === "") {
			timerS.value = "";
			timerStopper();
			return;
		}
		timerLoop = setInterval(() => {
			timerSValue--;
			if (timerSValue < 10) {
				timerS.value = "0" + timerSValue;
			} else {
				timerS.value = timerSValue;
			}
			if (timerS.value === "00") {
				timerStopper();
				return
			} 
		},1000);
		timerStartButton.innerText = "STOP"
	} else {
		timerStopper();
	}
});
function timerStopper() {
	isTimerActive = !isTimerActive;
	clearInterval(timerLoop);
	timerS.value = ""
	//input handler
	timerInput.forEach((currentTimerInput) => {
		currentTimerInput.disabled = !currentTimerInput.disabled;
	});
	//button text handler
	timerStartButton.innerText = "START"
}