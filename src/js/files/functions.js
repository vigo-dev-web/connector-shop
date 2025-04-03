console.log('functions is ready')

const fetchData = async () => {
	const url = ''
	const response = await fetch(url)
	const data = await response.json()
}

export const addClass = (element, className) => {
	element.classList.add(className)
}

export const removeClass = (element, className) => {
	element.classList.remove(className)
}

export const toggleClass = (element, className) => {
	element.classList.toggle(className)
}

export const isTargetElement = (element, eventTarget) => {
	return element.contains(eventTarget) 		
}

