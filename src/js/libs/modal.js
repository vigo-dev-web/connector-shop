const modals = document.querySelectorAll('[data-modal]')
const modalCallBtns = document.querySelectorAll('[data-modal-link]')
const body = document.body

  const passwordInput = document.getElementById('input-password');
  const toggleButton = document.getElementById('toggle-password');
  const icon = toggleButton.querySelector('img');
  
  // Обработчик ввода в поле пароля
  passwordInput.addEventListener('input', function() {
   if(passwordInput.value.length > 0) {
      toggleButton.classList.add('_active')
   } else {
      toggleButton.classList.remove('_active')
   }
  });
  
  // Обработчик клика по кнопке переключения
  toggleButton.addEventListener('click', function() {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    icon.src = isPassword 
      ? './img/icons/password-eye.svg' 
      : './img/icons/password-eye-cross.svg';
  });

const getScrollbarWidth = () => {
	return window.innerWidth - document.documentElement.clientWidth
}

const setBodyStyle = () => {
	const scrollbarWidth = getScrollbarWidth()
	body.style.overflowY = 'hidden'
	body.style.position = 'fixed'
	body.style.top = `-${scrollPosition}px`
	body.style.width = '100%'
	body.style.paddingRight = `${scrollbarWidth}px`
}

const setBodyStyleDefault = () => {
	body.style.overflowY = 'auto'
	body.style.position = ''
	body.style.top = ''
	body.style.width = ''
	body.style.paddingRight = '0'
}

let scrollPosition = 0

const openModal = (modal) => {
	if (!modal.classList.contains('_open')) {
		scrollPosition = window.scrollY || document.documentElement.scrollTop
		setBodyStyle()
		modal.classList.add('_open')
	}
}

const closeModal = (modal) => {
	modal.classList.remove('_open')
	setBodyStyleDefault()
	window.scrollTo(0, scrollPosition)
}

if (modals.length > 0) {
	modalCallBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const modalName = btn.dataset.modalLink
			const targetModal = document.querySelector(`[data-modal="${modalName}"]`)
			if (targetModal) {
				openModal(targetModal)
			} else {
				console.error(`Модальное окно с data-modal="${modalName}" не найдено!`)
			}
		})
	})

	modals.forEach((modalWindow) => {
		modalWindow.addEventListener('click', (e) => {
			if (e.target.dataset.close) {
				closeModal(modalWindow)
			}
		})
	})
}

console.log('Modal is ready...')
