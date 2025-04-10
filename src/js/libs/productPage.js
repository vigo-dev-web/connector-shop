import { addClass, toggleClass, removeClass } from '../files/functions.js'
const favouriteLabel = document.querySelectorAll('.product-page__label')
const gridTemplate = document.getElementById('layout')
const toggleLayoutBtn = document.querySelectorAll('.toggle__layout')
// const listLayoutBtn = document.getElementById('list-layout')
const cardLayoutElement = document.querySelectorAll('.card-layout')
const currentSelected = null

favouriteLabel.forEach((item) => {
	item.addEventListener('click', () => toggleClass(item, '_active'))
})


// add css class to one and remove from all
const changeLayoutIcon = (currentBtn) => {
	const hasActiveClass = currentBtn.firstElementChild.matches('.change__img._active')
	if (!hasActiveClass) {
      addClass(currentBtn.firstElementChild, '_active')
      
      toggleLayoutBtn.forEach( btn => {
         if(btn !== currentBtn) {
            removeClass(btn.firstElementChild, '_active')
         }
      }  )
	}
}

toggleLayoutBtn.forEach((btn) => {
	btn.addEventListener('click', () => changeLayoutIcon(btn))
})
