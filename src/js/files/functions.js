console.log('functions is ready')

const fetchData = async () => {
	const url = ''
	const response = await fetch(url)
	const data = await response.json()
}

export const getLog = (text, value) => {
	console.log(`${text} ${value}`)
} 

export const addClass = (element, className) => {
	element?.classList.add(className)
}

export const removeClass = (element, className) => {
	element?.classList.remove(className)
}

export const toggleClass = (element, className) => {
	element?.classList.toggle(className)
}

export const isTargetElement = (element, eventTarget) => {
	return element?.contains(eventTarget) 		
}

export const decrementCounter = (initialValue, renderValueEl) => {
	if (initialValue > 1) {
		initialValue--

	}
	renderValueEl.textContent = initialValue
	return initialValue
}

export const addPadding = (htmlElem) => {
	const htmlElemPadding = parseInt(window.getComputedStyle(htmlElem).paddingRight, 10)
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth
	const totalPadding = scrollBarWidth + htmlElemPadding + 'px'
	htmlElem.style.paddingRight = totalPadding
}

export const removePadding = (htmlElem, initialPadding) => {
	htmlElem.style.paddingRight = initialPadding
}



