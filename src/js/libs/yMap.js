ymaps.ready(init)
function init() {
	const myMap = new ymaps.Map('map', {
		center: [59.995111, 30.641813],
		zoom: 17,
		controls: ['zoomControl', 'geolocationControl']
	})
	const myPlacemark = new ymaps.Placemark(
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
	myMap.geoObjects.add(myPlacemark)
}
