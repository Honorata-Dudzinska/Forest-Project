const burgerBtn = document.querySelector('.burger-icon')
const nav = document.querySelector('.nav-items')
const navItems = document.querySelectorAll('.nav-items__item')
const scrollSpySections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer-year')
const activePage = window.location.pathname

const handleNav = () => {
	document.body.classList.toggle('no-scroll')
	nav.classList.toggle('active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})
}

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			// console.log(window.scrollY);
			// console.log(section.offsetTop);
			// console.log(section.offsetHeight);

			if (window.scrollY <= section.offsetTop + section.offsetHeight - 80) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				navItems.forEach(item => item.classList.remove('nav-active'))
				activeSection.classList.add('nav-active')
			}

			if (window.scrollY < 300) {
				navItems.forEach(item => {
					item.classList.remove('nav-active')
					navItems[0].classList.add('nav-active')
				})
			}
		})
	}

	if (activePage == '/contact.html') {
		navItems[3].classList.add('nav-active')
	} else if (activePage == '/offer.html') {
		navItems[2].classList.add('nav-active')
	}
}

if (activePage == '/index.html') {
	navItems[0].classList.add('nav-active')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

burgerBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleScrollSpy)
