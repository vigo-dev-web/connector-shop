import { addClass, removeClass, isTargetElement, addPadding, removePadding} from '../files/functions.js'

const menuBtn = document.querySelector('.mobile__side-btn')
const mobileMenu = document.querySelector('#mobile__side')
const closeBtn = document.querySelector('.mobile__side-right').firstElementChild
const body = document.body
const initialPadding = window.getComputedStyle(body).paddingRight

const closeMenuOverlay = (e) => {
	if (
		(!isTargetElement(mobileMenu.firstElementChild, e.target) && !isTargetElement(menuBtn, e.target) && mobileMenu.classList.contains('_active')) ||
		e.target.hasAttribute('data-link') ||
		e.target.parentElement.hasAttribute('data-link')
	) {
		removeClass(mobileMenu, '_active')
		removePadding(body, initialPadding)
		body.style.overflowY = 'auto'	
	}
}

menuBtn.addEventListener('click', () => {
	addClass(mobileMenu, '_active')
	body.style.overflowY = 'hidden'
	addPadding(body)
})

closeBtn.addEventListener('click', () => {
	removeClass(mobileMenu, '_active')
	removePadding(body, initialPadding)
	body.style.overflowY = 'auto'
})

document.addEventListener('click', (e) => {
	e.stopPropagation()
	closeMenuOverlay(e)
})

console.log('Header menu has been connected...')
