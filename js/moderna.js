const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const nav = document.querySelector('#nav');

//Function for Toggling Classes in this project
function toggleClass(element, className, existingClass) {
	if(element.classList.contains(className)) {
		element.classList.remove(className);
		element.classList.add(existingClass);
	}else{
		element.classList.add(className);
		element.classList.remove(existingClass);
	}
}

hamburger.onclick = function () {
	toggleClass(navItems, 'nav-items-active', 'nav-items');
}

nav.onscroll = function() {
	nav.classList.add('nav-active');
}