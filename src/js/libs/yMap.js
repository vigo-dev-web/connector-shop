function createMap(mapId, zoom, controls) {
	return new ymaps.Map(mapId, {
		center: [59.995111, 30.641813],
		zoom: zoom,
		controls: controls
	})
}

function createPlacemark() {
	return new ymaps.Placemark(
		[59.995111, 30.641813],
		{
			hintContent: 'ООО «КевТек»',
			balloonContent: 'г. Всеволожск, улица Аэропортовская, 14'
		},
		{
			preset: 'islands#blueHomeCircleIcon',
			iconOffset: [0, -30]
		}
	)
}

function initContactMap() {
	if (document.getElementById('map')) {
		const myMap = createMap('map', 17, ['zoomControl', 'geolocationControl'])
		const myPlacemark = createPlacemark()
		myMap.geoObjects.add(myPlacemark)
	}
}

function initOrderMap() {
	if (document.getElementById('map-order')) {
		const myMap = createMap('map-order', 16, [])
		const myPlacemark = createPlacemark()
		myMap.geoObjects.add(myPlacemark)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	ymaps.ready(() => {
		try {
			initContactMap()
			initOrderMap()
		} catch (error) {
			console.error('Ошибка инициализации карты:', error)
		}
	})
})
