import Swiper from 'swiper'
import { EffectFade, Pagination, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.thumbPhoto', {
	loop: true,
	spaceBetween: 20,
	freeMode: true,
	watchSlidesProgress: true,
	slidesPerView: 6,
	breakpoints: {
		360: {
			spaceBetween: 10,
			direction: 'horizontal',
			slidesPerView: 6,
		},
		641: {
			direction: 'vertical',
			slidesPerView: 6,
			spaceBetween: 20
		},
		992: {
			direction: 'vertical',
			slidesPerView: 7,
			spaceBetween: 20
		}
	}
})

const swiper2 = new Swiper('.mainSwiper', {
	modules: [EffectFade, Navigation, Thumbs],
	loop: true,
	spaceBetween: 200,
	navigation: {
		nextEl: '.swiper-button-next.photo',
		prevEl: '.swiper-button-prev.photo'
	},
	thumbs: {
		swiper: swiper
	},
	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '</span>'
		}
	},
	breakpoints: {
		360: {
			pagination: {
				enabled: true
			}
		},
		575: {
			pagination: {
				enabled: false
			}
		}
	}
})
