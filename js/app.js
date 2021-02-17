const burger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('#nav-bar');
const tabs = document.querySelectorAll('.option');
const tabImage = document.querySelector('#tab-image');
const tabTitle = document.querySelector('#tab-title');
const tabText = document.querySelector('#tab-text');
let menuOpen = false;

console.log(tabImage);
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
