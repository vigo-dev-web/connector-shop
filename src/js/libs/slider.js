import Swiper from 'swiper'
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.banner-slider', {
	modules: [EffectFade, Pagination, Autoplay],
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '</span>'
		}
	}
})

const swiperProduct = new Swiper('.product-page-slider', {
	modules: [EffectFade, Pagination],
	loop: false,
	grabCursor: false,
	pagination: {
		el: '.swiper-pagination-product',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '</span>'
		}
	}
})

const sliderNews = new Swiper('.news-slider', {
	modules: [EffectFade, Navigation],
	navigation: {
		nextEl: '.swiper-button-next.news',
		prevEl: '.swiper-button-prev.news'
	},
	loop: true,
	breakpoints: {
		360: {
			slidesPerView: 2,
			spaceBetween: 8
		},
		680: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	}
})

const articles = new Swiper('.articles-slider', {
	modules: [EffectFade, Navigation],
	navigation: {
		nextEl: '.swiper-button-next.articles',
		prevEl: '.swiper-button-prev.articles'
	},
	loop: true,
  breakpoints: {
		360: {
			slidesPerView: 2,
			spaceBetween: 8
		},
		680: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	}
})

const docs = new Swiper('.documents-slider', {
	modules: [EffectFade, Navigation],
	navigation: {
		nextEl: '.swiper-button-next.documents',
		prevEl: '.swiper-button-prev.documents'
	},
	loop: true,
  breakpoints: {
		360: {
			slidesPerView: 2,
			spaceBetween: 8
		},
		680: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	}
})

const brands = new Swiper('.brands-slider', {
	modules: [EffectFade, Navigation],
	navigation: {
		nextEl: '.swiper-button-next.brands',
		prevEl: '.swiper-button-prev.brands'
	},
	loop: true,
  breakpoints: {
		360: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 6,
			spaceBetween: 20
		}
	}
})

console.log('Slider has been connected...')
