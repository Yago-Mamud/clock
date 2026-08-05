//Elements
const buttons = document.querySelectorAll(".swapButton");
const containers = document.querySelectorAll(".clockContainer");
//Handler
buttons.forEach((butt) => {
	butt.addEventListener('click', () => {
		const idButton = butt.getAttribute("data-target");
		//Adds the notVisible 
		containers.forEach((cont) => {
			cont.classList.add("notVisible");
			return;
		});
		//Removes the notvisible
		containers.forEach((cont) => {
			const idContainer = cont.getAttribute("data-vis")
			if (idContainer === idButton) {
				cont.classList.remove("notVisible");
			}
			else {
				return;
			}
		});
	});
});