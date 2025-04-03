import { addClass, removeClass, toggleClass, isTargetElement } from '../files/functions.js'

const headerBottom = document.querySelector('.header__bottom')
const catalogueBtn = document.querySelector('.header__catalogue-btn')
const catalogueLayer = document.querySelector('.catalogue__layer')

const toggleMenu = () => {
	toggleClass(catalogueBtn.firstElementChild, '_active')
	toggleClass(catalogueLayer, '_active')
}

const closeMenuOverlay = (e) => {
	if (!isTargetElement(catalogueLayer, e.target) && !isTargetElement(catalogueBtn, e.target)) {
		removeClass(catalogueBtn.firstElementChild, '_active')
		removeClass(catalogueLayer, '_active')
	}
}

const scrollFixedHeader = () => {
   if (window.pageYOffset > 72) {
      addClass(headerBottom, '_scroll')
   } else {
      removeClass(headerBottom, '_scroll')
   }
}

catalogueBtn.addEventListener('click', toggleMenu)

document.addEventListener('click', (e) => {
	closeMenuOverlay(e)
})

window.addEventListener('scroll', scrollFixedHeader)
