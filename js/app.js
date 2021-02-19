const burger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('#nav-bar');
const tabs = document.querySelectorAll('.option');
const tabImage = document.querySelector('#tab-image');
const tabTitle = document.querySelector('#tab-title');
const tabText = document.querySelector('#tab-text');
const dropDownOptionsText = document.querySelectorAll('.tab-info');
const faqTabs = document.querySelectorAll('.question-arrow-container');
const arrows = document.querySelectorAll('.arrow');
const input = document.querySelector('#email-input');
const errorImg = document.querySelector('.error');
const errorMessage = document.querySelector('.error-message');
let menuOpen = false;

console.log(input);
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

// feature section image and info changes when tab is clicked

const tabsInfo = {
	simple: {
		title: 'Simple Bookmarking',
		text:
			'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.'
	},
	speedy: {
		title: 'Intelligent Search',
		text:
			'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
	},
	easy: {
		title: 'Share your bookmarks',
		text:
			'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
	}
};

tabs.forEach((tab) => {
	tab.addEventListener('click', changeTab);
});

function changeTab(e) {
	removeMark();
	const node = e.target;
	node.classList.add('active-tab');
	if (node.id == 'speedy') {
		tabImage.setAttribute('src', '../images/illustration-features-tab-2.svg');
		tabTitle.innerHTML = tabsInfo.speedy.title;
		tabText.innerHTML = tabsInfo.speedy.text;
	}
	if (node.id == 'simple') {
		tabImage.setAttribute('src', '../images/illustration-features-tab-1.svg');
		tabTitle.innerHTML = tabsInfo.simple.title;
		tabText.innerHTML = tabsInfo.simple.text;
	}
	if (node.id == 'easy') {
		tabImage.setAttribute('src', '../images/illustration-features-tab-3.svg');
		tabTitle.innerHTML = tabsInfo.easy.title;
		tabText.innerHTML = tabsInfo.easy.text;
	}
}

function removeMark() {
	tabs.forEach((tab) => tab.classList.remove('active-tab'));
}

// faq tabs functionality

faqTabs.forEach((tab) => {
	tab.addEventListener('click', openTab);
});

function openTab(e) {
	e.preventDefault();
	const node = e.target;
	console.log(node);
	if (node.id == 'tab-1') {
		dropDownOptionsText[0].classList.toggle('is-open');
		arrows[0].classList.toggle('arrow-up');
	}
	if (node.id == 'tab-2') {
		dropDownOptionsText[1].classList.toggle('is-open');
		arrows[1].classList.toggle('arrow-up');
	}
	if (node.id == 'tab-3') {
		dropDownOptionsText[2].classList.toggle('is-open');
		arrows[2].classList.toggle('arrow-up');
	}

	if (node.id == 'tab-4') {
		dropDownOptionsText[3].classList.toggle('is-open');
		arrows[3].classList.toggle('arrow-up');
	}
}

input.addEventListener('input', onChange);

const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function onChange(e) {
	const node = e.target;

	if (!re.test(node.value)) {
		node.style.border = '#fa5757 2px solid';
		errorImg.style.display = 'block';
		errorMessage.classList.add('show-message');
	} else {
		node.style.border = 'none';
		errorImg.style.display = 'none';
		errorMessage.classList.remove('show-message');
	}
}
