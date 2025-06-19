const deliveryItems = document.querySelectorAll('.delivery-company__item')
const paymentItems = document.querySelectorAll('.payment__item')
const phoneInputArr = document.querySelectorAll('#bussiness-phone, #person-phone');

phoneInputArr.forEach((input) => {
	input.addEventListener('input', function () {
		if (this.value.startsWith('+')) {
			this.value = '+' + this.value.slice(1).replace(/\D/g, '')
		} else {
			this.value = this.value.replace(/\D/g, '')
		}
	})
})

deliveryItems.forEach((item) => {
	const radio = item.querySelector('input[type="radio"]')
	item.addEventListener('click', function (e) {
		if (e.target !== radio) {
			radio.checked = true
		}
	})
})

paymentItems.forEach((item) => {
	const radio = item.querySelector('input[type="radio"]')
	item.addEventListener('click', function (e) {
		if (e.target !== radio) {
			radio.checked = true
		}
	})
})

function updateLabels() {
const personLabel = document.querySelector('[for="left-thumb-customer"]')
const bussinessLabel = document.querySelector('[for="right-thumb-customer"]')
  
  if (!personLabel || !bussinessLabel) {
    console.error('Не удалось найти элементы для обновления текста');
    return;
  }

  if (window.innerWidth < 576) {
    personLabel.textContent = 'Физ. лицо';
    bussinessLabel.textContent = 'Юр. лицо';
  } else {
    personLabel.textContent = 'Физическое лицо';
    bussinessLabel.textContent = 'Юридическое лицо';
  }
}

function generateDots() {
	// Получаем все контейнеры, которые нужно обработать
	const wrappers = document.querySelectorAll('.order__details-wrapper')

	wrappers.forEach((wrapper) => {
		// Находим все span элементы внутри текущего контейнера
		const spans = wrapper.querySelectorAll('span')

		// Пропускаем если нет нужного количества span элементов
		if (spans.length < 3) return

		const leftSpan = spans[0]
		const dotsSpan = spans[1]
		const rightSpan = spans[2]

		// Вычисляем доступную ширину
		const wrapperWidth = wrapper.clientWidth
		const leftWidth = leftSpan.offsetWidth
		const rightWidth = rightSpan.offsetWidth

		// Вычисляем доступное пространство для точек
		const availableWidth = wrapperWidth - leftWidth - rightWidth

		// Минимальный отступ (можно настроить)
		const minGap = 5

		if (availableWidth > minGap) {
			// Рассчитываем количество точек, которые поместятся
			const dotWidth = 5 // Примерная ширина одной точки
			const dotsCount = Math.floor(availableWidth / dotWidth)

			// Заполняем span точками
			dotsSpan.textContent = '.'.repeat(dotsCount)
		} else {
			// Если места совсем мало, оставляем минимальное количество точек
			dotsSpan.textContent = '...'
		}
	})
}

function setupFormSwitcher() {
	// Получаем радио-кнопки и контейнеры с контентом
	const personRadio = document.getElementById('left-thumb-customer')
	const businessRadio = document.getElementById('right-thumb-customer')
	const personContent = document.querySelector('.form-person__content')
	const businessContent = document.querySelector('.form-business__content')

	const deliveryRadio = document.getElementById('left-thumb-delivery')
	const pickupRadio = document.getElementById('right-thumb-delivery')
	const deliveryContent = document.querySelector('.delivery-content')
	const pickupContent = document.querySelector('.pickup-content')

	const orderCard = document.querySelector('.order__point-card')

	// Функция для переключения видимости контента
	function toggleContent(radioChecked, firstElement, secondElement) {
		if (radioChecked.checked) {
			firstElement.classList.add('_open')
			secondElement.classList.remove('_open')
		} else {
			secondElement.classList.add('_open')
			firstElement.classList.remove('_open')
		}
		if (firstElement === deliveryContent) {
			if (deliveryContent.classList.contains('_open')) {
				orderCard.classList.add('_open')
			} else {
				orderCard.classList.remove('_open')
			}
		}
	}

	// Вешаем обработчики на обе радио-кнопки
	personRadio.addEventListener('change', () => {
		toggleContent(personRadio, personContent, businessContent)
	})
	businessRadio.addEventListener('change', () => {
		toggleContent(personRadio, personContent, businessContent)
	})

	deliveryRadio.addEventListener('change', () => {
		toggleContent(deliveryRadio, deliveryContent, pickupContent)
	})
	pickupRadio.addEventListener('change', () => {
		toggleContent(deliveryRadio, deliveryContent, pickupContent)
	})

	// Инициализируем начальное состояние (показываем форму физ.лица)
	toggleContent(personRadio, personContent, businessContent)
	toggleContent(deliveryRadio, deliveryContent, pickupContent)
}

document.addEventListener('DOMContentLoaded', setupFormSwitcher)

window.addEventListener('load', generateDots)

updateLabels()
window.addEventListener('resize', updateLabels, generateDots)
