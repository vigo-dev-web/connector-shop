const favoriteBtnArr = document.querySelectorAll('[data-favorite="add"]')
const removeBtnArr = document.querySelectorAll('[data-favorite="remove"]')

favoriteBtnArr.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (!btn.classList.contains('_active')) {
			btn.classList.add('_active')
		} else return
	})
})

removeBtnArr.forEach((btn) => {
    btn.addEventListener('click', () => {
        const favoriteBtn = btn.closest('.basket__item-favorites-wrapper')?.querySelector('[data-favorite="add"]');
        if (favoriteBtn?.classList.contains('_active')) {
            favoriteBtn.classList.remove('_active');
        }
    });
});

function generateDots() {
	// Получаем все контейнеры, которые нужно обработать
	const wrappers = document.querySelectorAll('.basket__order-item-wrapper, .basket__order-total-wrapper')

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

window.addEventListener('load', generateDots)
window.addEventListener('resize', generateDots)
