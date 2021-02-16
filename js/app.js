const burger = document.querySelector('.hamburger');

burger.addEventListener('click', (e) => {
	e.preventDefault();
	burger.classList.toggle('is-active');
});
