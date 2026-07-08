import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

new Swiper('.mySwiper', {
  modules: [Pagination, Navigation],

  slidesPerView: 1,
  spaceBetween: 24,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});