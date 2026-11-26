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

//handler the timer
const timerStartButton = document.getElementById("timerStartButton");

timerStartButton.addEventListener("click", () => {
	timerInput.forEach((currentTimerInput) => {
		currentTimerInput.disabled = !currentTimerInput.disabled;
	});
	timerStartButton.innerText = timerStartButton.innerText === "START" ? "STOP" : "START"
});
