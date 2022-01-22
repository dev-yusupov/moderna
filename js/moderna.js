const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items')

hamburger.onclick = function () {
	if (navItems.style.display != "initial") {
		navItems.style.display = "initial";
	}
	else {
		navItems.style.display = "none";
	}
}