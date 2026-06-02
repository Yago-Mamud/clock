const horario = document.getElementById("horario");
const timer = setInterval(
	function() {
		const teste = new Date();
		horario.innerText = teste.getSeconds();
	}, 1000);