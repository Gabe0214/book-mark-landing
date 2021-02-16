const burger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('#nav-bar');
let menuOpen = false;
burger.addEventListener('click', (e) => {
	menuOpen = !menuOpen;
	e.preventDefault();
	burger.classList.toggle('is-active');
	mobileMenu.classList.toggle('menu-active');
	console.log(navBar.style);
	menuOpen
		? (navBar.style.filter = 'grayscale(1) brightness(0.49) contrast(7) invert(1)')
		: (navBar.style.filter = 'none');
});
