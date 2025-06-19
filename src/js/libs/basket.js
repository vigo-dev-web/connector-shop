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
	const wrappers = document.querySelectorAll('.basket__order-item-wrapper, .basket__order-total-wrapper')

	wrappers.forEach((wrapper) => {
		const spans = wrapper.querySelectorAll('span')

		if (spans.length < 3) return

		const leftSpan = spans[0]
		const dotsSpan = spans[1]
		const rightSpan = spans[2]

		const wrapperWidth = wrapper.clientWidth
		const leftWidth = leftSpan.offsetWidth
		const rightWidth = rightSpan.offsetWidth

		const availableWidth = wrapperWidth - leftWidth - rightWidth
		const minGap = 5

		if (availableWidth > minGap) {
			const dotWidth = 5 // Примерная ширина одной точки
			const dotsCount = Math.floor(availableWidth / dotWidth)
			dotsSpan.textContent = '.'.repeat(dotsCount)
		} else {
			dotsSpan.textContent = '...'
		}
	})
}

document.addEventListener('DOMContentLoaded', function() {
  // Обработчик для всех кнопок счетчика
  document.querySelectorAll('[data-counter]').forEach(button => {
    button.addEventListener('click', function() {
      const action = this.getAttribute('data-counter');		
      const input = this.closest('.basket__item-counter-wrapper').querySelector('[data-counter="input"]');
      handleCounterAction(input, action);
    });
  });

  // Обработчик для ручного ввода в поле
  document.querySelectorAll('[data-counter="input"]').forEach(input => {
    input.addEventListener('input', function() {
      validateInput(this);
    });

    input.addEventListener('blur', function() {
      if (this.value === '' || parseInt(this.value) < 1) {
        this.value = '1';
      }
    });
  });
});

function handleCounterAction(input, action) {
  let value = parseInt(input.value) || 1;

  if (action === 'plus') {
    if (value < 9999) {
      value++;
    }
  } else if (action === 'minus') {
    if (value > 1) {
      value--;
    }
  }

  input.value = value;
}

function validateInput(input) {
  let value = input.value.replace(/[^0-9]/g, '');
  
  if (value === '' || parseInt(value) === 0) {
    input.value = value;
    return;
  }  
  let numValue = parseInt(value);
  if (numValue > 9999) {
    numValue = 9999;
  }
  
  input.value = numValue;
}

document.addEventListener('DOMContentLoaded', function() {
  const selectAllCheckbox = document.getElementById('select-all');
  const itemCheckboxes = document.querySelectorAll('input[name="select-item"]');
  
  selectAllCheckbox.addEventListener('change', function() {
    itemCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });
  
  itemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
      selectAllCheckbox.checked = allChecked;
    });
  });
});

window.addEventListener('load', generateDots)
window.addEventListener('resize', generateDots)
