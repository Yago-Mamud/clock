//gets html elements
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
//sets the current time
const timer = setInterval(
	function() {
		const currentTime = new Date();
		if ( currentTime.getHours() < 10 ) {
			hours.innerText = "0"+currentTime.getHours();	
		} else {
			hours.innerText = currentTime.getHours();	
		}
		//
		if ( currentTime.getMinutes() < 10 ) {
			minutes.innerText = "0"+currentTime.getMinutes();
		} else {
			minutes.innerText = currentTime.getMinutes();
		}
		//
		if ( currentTime.getSeconds() < 10 ) {
			seconds.innerText = "0"+currentTime.getSeconds();	
		} else {
			seconds.innerText = currentTime.getSeconds();
		}
	}, 1000);