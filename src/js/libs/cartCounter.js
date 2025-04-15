// import { addClass, removeClass }from '../files/functions.js'

// const counterComponents = document.querySelectorAll('.cart__counter')
// const addCartBtn = document.querySelectorAll('.product-page__add-cart')


// counterComponents.forEach(counter => {
// 	let initNumber = 1
// 	counter.firstElementChild.addEventListener('click', () => {
// 		initNumber++
// 		console.log(initNumber);
// 		counter.firstElementChild.nextElementSibling.textContent = initNumber
// 	})
// 	counter.lastElementChild.addEventListener('click', () => {	
// 		if(initNumber > 1) {
// 			initNumber--
// 			counter.lastElementChild.previousElementSibling.textContent = initNumber
// 		}	else return
// 	})
// })


// addCartBtn.forEach(btn => {
// 	btn.addEventListener('click', () => {
// 		removeClass(btn, '._active')
// 		addClass(btn.nextElementSibling, '._active')
// 	})
// })