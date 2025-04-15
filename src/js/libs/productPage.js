import { addClass, isTargetElement, toggleClass, removeClass } from '../files/functions.js'
const favouriteLabel = document.querySelectorAll('.product-page__label')
const toggleLayoutBtn = document.querySelectorAll('.toggle__layout')

const pageSizeElArr = document.querySelectorAll('.product-page__page-count')
const changePageBtn = document.querySelector('.product-page__change-btn')
// const paginationPopUp = changePageBtn.parentElement.nextElementSibling
const pageNumberArr = document.querySelectorAll('.product-page__page-list > li > button')
const addCartBtnArr = document.querySelectorAll('.product-page__add-cart')
const removeFilterBtn = document.querySelector('.product-page__open-filter')
const filterLayout = document.querySelector('.product-page__filter')
const layoutElArr = document.querySelectorAll('[data-layout]')


const changeLayoutIcon = (currentBtn) => {
	const hasActiveClass = currentBtn.firstElementChild.matches('.change__img._active')

	if (!hasActiveClass) {
		addClass(currentBtn.firstElementChild, '_active')
		const typeOfLayout = currentBtn.getAttribute('id')
		if (typeOfLayout === 'list-layout') {
			layoutElArr.forEach((element) => {
				removeClass(element, 'card-layout')
				addClass(element, 'list-layout')
			})
		} else {
			layoutElArr.forEach((element) => {
				removeClass(element, 'list-layout')
				addClass(element, 'card-layout')
			})
		}

		toggleLayoutBtn.forEach((btn) => {
			if (btn !== currentBtn) {
				removeClass(btn.firstElementChild, '_active')
			}
		})
	}
}

// check favourite product

favouriteLabel.forEach((item) => {
	item.addEventListener('click', () => toggleClass(item, '_active'))
})

// add product in cart

addCartBtnArr.forEach((btn) => {
	btn.addEventListener('click', () => {
		toggleClass(btn, '_cart')
		if (btn.classList.contains('_cart')) {
			btn.textContent = 'В корзине'
		} else {
			btn.textContent = 'В корзину'
		}
	})
})

// change layout

toggleLayoutBtn.forEach((btn) => {
	btn.addEventListener('click', () => changeLayoutIcon(btn))
})

// change page number

const changePageNumber = () => {
	pageNumberArr.forEach((pageNumberEl) => {
		pageNumberEl.addEventListener('click', () => {
			for (let page of pageNumberArr) {
				removeClass(page, '_active')
			}
			addClass(pageNumberEl, '_active')
		})
	})
}

changePageNumber()

// page count select

const closePagination = (e) => {
	if (!isTargetElement(changePageBtn, e.target)) {
		removeClass(changePageBtn, '_active')
		removeClass(changePageBtn?.parentElement.nextElementSibling, '_active')
	}
}

changePageBtn?.addEventListener('click', (e) => {
	toggleClass(changePageBtn, '_active')
	toggleClass(changePageBtn?.parentElement.nextElementSibling, '_active')
	e.stopPropagation()
})

// add css class to one and remove from all

removeFilterBtn?.addEventListener('click', () => {
	toggleClass(filterLayout, '_active')
	toggleClass(removeFilterBtn, '_active')
	if (removeFilterBtn.classList.contains('_active')) {
		removeFilterBtn.textContent = 'Скрыть фильтр'
	} else {
		removeFilterBtn.textContent = 'Показать фильтр'
	}
})


pageSizeElArr.forEach((el) => {
	el.addEventListener('click', (e) => {
		if (e.target.hasAttribute('data-page')) {
			const pageValue = e.target.getAttribute('data-page')
			const pageCountElValue = el.previousElementSibling.lastElementChild.firstElementChild
			if (pageValue === pageCountElValue) {
				return
			} else pageCountElValue.textContent = pageValue
		} else return
	})
})

document.addEventListener('click', (e) => {
	e.stopPropagation()
	closePagination(e)
})
