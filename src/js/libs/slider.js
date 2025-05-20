import Swiper from 'swiper'
import { EffectFade, Pagination, Navigation, Autoplay, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper1 = new Swiper('.banner-slider', {
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

const sliderOpt = new Swiper('.opt-slider', {
	modules: [EffectFade, Navigation],
	navigation: {
		nextEl: '.swiper-button-next.opt',
		prevEl: '.swiper-button-prev.opt'
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

const swiper = new Swiper('.thumbSwiper', {
	loop: true,
	spaceBetween: 10,
	freeMode: true,
	watchSlidesProgress: true,
	slidesPerView: 4,
	breakpoints: {
		992: {
			slidesPerView: 5,
			direction: 'vertical'
		}
	}
})

const swiper2 = new Swiper('.photoSwiper', {
	modules: [EffectFade, Navigation, Thumbs, Pagination],
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next.prod',
		prevEl: '.swiper-button-prev.prod'
	},
	thumbs: {
		swiper: swiper
	},
	pagination: {
		el: '.swiper-pagination-thumb',
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

const sliderTestimonial = new Swiper('.testimonial-slider', {
	modules: [EffectFade, Navigation],
	navigation: {
		nextEl: '.swiper-button-next.testimonial',
		prevEl: '.swiper-button-prev.testimonial'
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
			slidesPerView: 8,
			spaceBetween: 20,
			slidesPerGroup: 4
		}
	}
})

console.log('Slider has been connected...')
