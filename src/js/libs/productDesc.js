const showAllText = document.querySelector('.product-desc__props-show')
const opacityText = document.querySelector('.product-desc__show-text')
const hiddenText = document.querySelector('.product-desc__hidden-text')
const labelBtn = document.querySelector('.product-page__label-btn')
const allChar = document.querySelector('.product-desc__prop-link')?.firstElementChild
const navItemArr = document.querySelectorAll('[data-nav]')
const sortItemArr = document.querySelectorAll('[data-sort]')
const sortBtn = document.querySelector('.product-desc__mobile-sort-btn')
const testimonialBtn = document.querySelector('.testimonial__button')
const ratingList = document.querySelector('.testimonial__rating')
const testimonialMark = document.querySelector('.testimonial__note')
const testimonialWarning = document.querySelector('.testimonial__note-warning')
const stars = ratingList?.querySelectorAll('li')
const testimonialCallBtn = document.querySelector('.product-desc__item-btn')
const connectionSelect = document.querySelector('.product-desc__connection-select')
const buttonArr = connectionSelect?.querySelectorAll('button')

const goScrollTo = (y) => {
	window.scrollTo({
		top: y,
		behavior: 'smooth'
	})
}

const toggleNav = (e) => {
	if (!e.target.classList.contains('_target')) {
		navItemArr.forEach((item) => item.firstElementChild.classList.remove('_target'))
		e.target.classList?.add('_target')
	} else {
		return
	}
}

const toggleSort = (e) => {
	if (!e.target.classList.contains('_target')) {
		sortItemArr.forEach((item) => {
			item.classList?.remove('_target')
			item.lastElementChild.classList?.remove('_target')
		})
		e.target.classList?.add('_target')
		e.target.lastElementChild?.classList?.add('_target')
	} else {
		return
	}
}

const closeSort = (e) => {
	if (sortBtn?.nextElementSibling.classList.contains('_open') && e.target !== sortBtn?.nextElementSibling) {
		sortBtn?.nextElementSibling.classList.remove('_open')
	}
}

navItemArr.forEach((item) =>
	item.addEventListener('click', (e) => {
		e.preventDefault()

		if (e.target.hasAttribute('data-char')) {
			goScrollTo(1000)
		}
		if (e.target.hasAttribute('data-product')) {
			goScrollTo(2000)
		}
		if (e.target.hasAttribute('data-analog')) {
			goScrollTo(2620)
		}
		if (e.target.hasAttribute('data-testimonial')) {
			goScrollTo(2900)
		}
		toggleNav(e)
		if (window.pageYOffset < 900) {
			navItemArr.forEach((item) => item.firstElementChild.classList.remove('_target'))
			navItemArr[0].firstElementChild.classList?.add('_target')
		} else {
			return
		}
	})
)

document?.addEventListener('click', (e) => {
	if (!e.target?.closest('.product-desc__sort-submenu') && sortBtn?.nextElementSibling.classList.contains('_open')) {
		sortBtn?.nextElementSibling.classList.remove('_open')
	}
})

sortBtn?.addEventListener('click', (e) => {
	e.stopPropagation()
	sortBtn.nextElementSibling?.classList?.toggle('_open')
})

labelBtn?.addEventListener('click', () => {
	labelBtn.classList?.toggle('_active')
})

sortItemArr.forEach((item) =>
	item.addEventListener('click', (e) => {
		toggleSort(e)
	})
)

showAllText?.addEventListener('click', () => {
	hiddenText.classList.toggle('_open')
	opacityText.classList.toggle('_open')
})

allChar?.addEventListener('click', () => {
	goScrollTo(1000)
})

testimonialCallBtn?.addEventListener('click', () => {
	testimonialMark.classList.remove('_active')
	testimonialWarning.classList.remove('_active')
	stars?.forEach((star) => {
		// Удаляем класс _active у всех звезд
		star.classList.remove('_active')
	})
})

testimonialBtn?.addEventListener('click', (e) => {
	e.preventDefault()
	delete testimonialBtn.dataset.close
	const firstElement = ratingList.querySelectorAll('li')[0]
	if (!firstElement.classList.contains('_active')) {
		testimonialMark.classList.add('_active')
		testimonialWarning.classList.add('_active')
	}
	if (firstElement.classList.contains('_active')) {
		testimonialBtn.dataset.close = true
	}
})

buttonArr?.forEach((button) => {
	button.addEventListener('click', function () {
		// Удаляем активный класс у всех кнопок
		buttonArr.forEach((btn) => btn.classList.remove('_active'))

		// Добавляем активный класс только нажатой кнопке
		this.classList.add('_active')
	})
})
