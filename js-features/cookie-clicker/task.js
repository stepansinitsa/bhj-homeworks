const cookieImg = document.getElementById("cookie");
const cookieCounter = document.getElementById("clicker__counter");

cookieImg.onclick = function() {
	let currentClicks = parseInt(cookieCounter.textContent);
	let currentWidth = parseInt(cookieImg.width);

	cookieCounter.textContent = currentClicks + 1;

	if (currentWidth === 200) {
		cookieImg.width = 250;
	} else {
		cookieImg.width = 200;
	}
};