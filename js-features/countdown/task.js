const time = function() {
	const countSec = document.getElementById("timer");

	if (countSec.textContent >= 1) {
		countSec.textContent--;
	} else {
		alert("Вы победили в конкурсе");
	}
}

setInterval(time, 1000);