// // прилипающая шапка
let lastKnownScrollY = 0;
let ticking = false;

function headerChange() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    document.body.classList.add("header-sticky");
  } else {
    document.body.classList.remove("header-sticky");
  }

  ticking = false;
}

function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }

  ticking = true;
}

document.addEventListener("DOMContentLoaded", () => {

  headerChange();
  window.addEventListener("scroll", onScroll, { passive: true });

  // показ мобильного меню и кнопки
  const buttonMenu = document.querySelector('.button-menu');
  // const navigation = document.querySelector('.navigation');
  buttonMenu.addEventListener('click', function () {
    buttonMenu.classList.toggle('isActive');
    // navigation.classList.toggle('isActive');
    document.body.classList.toggle('menu-open');
  });


  // Гибридный аккордеон в мобильном меню
  if (document.documentElement.clientWidth <= 767) {
    // Поиск всех элементов с классом 'main-navigation__item'
    const menuItems = document.querySelectorAll('.navigation__item');

    menuItems.forEach(item => {
      const link = item.querySelector('.navigation__link');
      const sublist = item.querySelector('.navigation__sub-list');

      // Проверка, содержит ли элемент списка подсписок
      if (sublist) {
        // Отмена действия по умолчанию при клике на ссылку
        link.addEventListener('click', function (event) {
          event.preventDefault();

          // Добавление или удаление класса 'active' на ссылку
          this.classList.toggle('active');
        });
      }
    });

  };

  // СЛАЙДЕР ГЛАВНАЯ ПЕРВЫЙ ЭКРАН
    // Инициализация миниатюрного слайдера
    var swiperThumbs = new Swiper('.js-slider-home-first .hero-home__thumbs', {
      // Общие параметры
      slidesPerView: 4,
      spaceBetween: 0,
      freeMode: true,
      watchSlidesProgress: true,
      autoHeight: true,
      // Параметры для разных точек останова
      breakpoints: {
        // Когда ширина экрана меньше или равна 1023px
        1023: {
          direction: 'horizontal', // Горизонтальная ориентация
          autoHeight: false,
          slidesPerView: 'auto', // Автоматическое определение количества слайдов
        }
      }
    });
    // Инициализация основного слайдера
    var swiperHero = new Swiper(".js-slider-home-first .hero-home__slider", {
      loop: true,
      navigation: {
        nextEl: ".js-slider-home-first .swiper-button-next",
        prevEl: ".js-slider-home-first .swiper-button-prev",
      },
      thumbs: {
        swiper: swiperThumbs
      }
    });
  // КОНЕЦ СЛАЙДЕР ГЛАВНАЯ ПЕРВЫЙ ЭКРАН

  // МЕГА СЛАЙДЕР
  // Инициализация миниатюрного слайдера
  var swiperThumbs = new Swiper('.js-mega-slider .hero-home__thumbs', {
    // Общие параметры
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    watchSlidesProgress: true,
    // Параметры для разных точек останова
    breakpoints: {
      // Когда ширина экрана меньше или равна 1023px
      1023: {
        direction: 'horizontal', // Горизонтальная ориентация
        slidesPerView: 'auto', // Автоматическое определение количества слайдов
      }
    }
  });
  // Инициализация основного слайдера
  var swiperHero = new Swiper(".js-mega-slider .hero-home__slider", {
    loop: true,
    navigation: {
      nextEl: ".js-mega-slider .swiper-button-next",
      prevEl: ".js-mega-slider .swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumbs
    }
  });
  // КОНЕЦ МЕГА СЛАЙДЕР


  // табы с карточками и брендами
  const brandLinks = document.querySelectorAll('.logotype-list__link');
  const cards = document.querySelectorAll('.card-list__item');

  brandLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const brandName = this.getAttribute('data-brand');
      cards.forEach(card => {
        if (card.getAttribute('data-brand-card') === brandName) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  // //   // слайдер c карточками
  // if (document.querySelector('#card-slider-1 .mySwiper')) {
  //   console.log('Слайдер с карточками есть!');
  //   var homeScreenSwiper = new Swiper("#card-slider-1 .mySwiper", {
  //     slidesPerView: 2,
  //     spaceBetween: 25,
  //     breakpoints: {
  //       // when window width is >= 320px
  //       425: {
  //         slidesPerView: 1
  //       },
  //       // // when window width is >= 480px
  //       // 767: {
  //       //   slidesPerView: 2
  //       // },
  //       // 1023: {
  //       //   slidesPerView: 3
  //       // },
  //       // 1279: {
  //       //   slidesPerView: 4
  //       // },
  //       // when window width is >= 640px
  //       1750: {
  //         slidesPerView: 1
  //       }
  //     }
  //   });
  // };

  // //   // слайдер со статьями в карточке товара
  // if (document.querySelector('.product__articles-slider .mySwiper')) {
  //   console.log('Слайдер со статьями в карточке товара есть!');
  //   var productArticlesSlider = new Swiper(".product__articles-slider .mySwiper", {
  //     slidesPerView: 1,
  //     spaceBetween: 25,
  //     navigation: {
  //       nextEl: ".product__articles-slider .swiper-button-next",
  //       prevEl: ".product__articles-slider .swiper-button-prev",
  //     },
  //   });
  // };

  // //   // слайдер со статьями
  // if (document.querySelector('#card-slider-2 .mySwiper')) {
  //   console.log('Слайдер со статьями есть!');
  //   var homeScreenSwiper = new Swiper("#card-slider-2 .mySwiper", {
  //     slidesPerView: 2,
  //     spaceBetween: 25,
  //     breakpoints: {
  //       // when window width is >= 320px
  //       320: {
  //         slidesPerView: 1.2
  //       },
  //       // // when window width is >= 480px
  //       // 767: {
  //       //   slidesPerView: 2
  //       // },
  //       // 1023: {
  //       //   slidesPerView: 3
  //       // },
  //       // 1279: {
  //       //   slidesPerView: 4
  //       // },
  //       // when window width is >= 640px
  //       1750: {
  //         slidesPerView: 1.2
  //       }
  //     }
  //   });
  // };

  // //   // слайдер c отзывами
  // if (document.querySelector('.reviews .mySwiper')) {
  //   console.log('Слайдер с отзывами есть!');
  //   var homeScreenSwiper = new Swiper(".reviews .mySwiper", {
  //     slidesPerView: 2.3,
  //     spaceBetween: 25,
  //     breakpoints: {
  //       // when window width is >= 320px
  //       320: {
  //         slidesPerView: 1
  //       },
  //       // // when window width is >= 480px
  //       // 767: {
  //       //   slidesPerView: 2
  //       // },
  //       // 1023: {
  //       //   slidesPerView: 3
  //       // },
  //       768: {
  //         slidesPerView: 1.2
  //       },
  //       // when window width is >= 640px
  //       1750: {
  //         slidesPerView: 2.3
  //       }
  //     }
  //   });
  // };

  // //   // слайдер c документами
  // if (document.querySelector('.docs .mySwiper')) {
  //   console.log('Слайдер с документами есть!');
  //   var homeScreenSwiper = new Swiper(".docs .mySwiper", {
  //     slidesPerView: 4,
  //     spaceBetween: 80,
  //     navigation: {
  //       nextEl: ".docs .swiper-button-next",
  //       prevEl: ".docs .swiper-button-prev",
  //     },
  //     breakpoints: {
  //       // when window width is >= 320px
  //       320: {
  //         slidesPerView: 1.5,
  //         spaceBetween: 40
  //       },
  //       // // when window width is >= 480px
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 80
  //       },
  //       1024: {
  //         slidesPerView: 3,
  //       },
  //       // 1279: {
  //       //   slidesPerView: 4
  //       // },
  //       // when window width is >= 640px
  //       1750: {
  //         slidesPerView: 4
  //       }
  //     }

  //   });
  // };

  //   // слайдер с логотипами
  //   if (document.querySelector('.customers .mySwiper')) {
  //     console.log('Слайдер с логотипами есть!');
  //     var swiperCustomers = new Swiper(".customers .mySwiper", {
  //       // slidesPerView: 6,
  //       spaceBetween: 32,
  //       navigation: {
  //         nextEl: ".customers .swiper-button-next",
  //         prevEl: ".customers .swiper-button-prev",
  //       },
  //       breakpoints: {
  //         // when window width is >= 320px
  //         425: {
  //           slidesPerView: 1
  //         },
  //         // when window width is >= 480px
  //         767: {
  //           slidesPerView: 2
  //         },
  //         1023: {
  //           slidesPerView: 3
  //         },
  //         1279: {
  //           slidesPerView: 4
  //         },
  //         // when window width is >= 640px
  //         1600: {
  //           slidesPerView: 6
  //         }
  //       }
  //     });
  //   }
  //   // слайдер с фото
  //   if (document.querySelector('.photo-slider .mySwiper')) {
  //     console.log('Слайдер с фотографиями есть!');
  //     var swiperPhotoSlider = new Swiper(".photo-slider .mySwiper", {
  //       // slidesPerView: 6,
  //       spaceBetween: 32,
  //       navigation: {
  //         nextEl: ".photo-slider .swiper-button-next",
  //         prevEl: ".photo-slider .swiper-button-prev",
  //       },
  //       breakpoints: {
  //         // when window width is >= 320px
  //         425: {
  //           slidesPerView: 2
  //         },
  //         // when window width is >= 480px
  //         767: {
  //           slidesPerView: 2
  //         },
  //         1023: {
  //           slidesPerView: 2
  //         },
  //         1279: {
  //           slidesPerView: 2
  //         },
  //         // when window width is >= 640px
  //         1600: {
  //           slidesPerView: 2
  //         }
  //       }
  //     });
  //   }



  // Подключаем янекс карту на сайт
  // if (document.querySelector('.js-map')) {
  //   let center = [45.047739, 38.875191];

  //   function init() {
  //     let mapElement = document.querySelector('.js-map');
  //     let map = new ymaps.Map(mapElement, {
  //       center: center,
  //       zoom: 15
  //     });

  //     let placeMark = new ymaps.Placemark([45.047739, 38.875191], {
  //       hintContent: 'Средства защиты растений',
  //       balloonContentHeader: '«БАИС-ЮГ»',
  //       balloonContentFooter: 'г. Краснодар,ул. ВНИИБЗР, 1'
  //     }, {
  //       iconLayout: 'default#image',
  //       iconImageHref: './img/map/balun-1.svg',
  //       iconImageSize: [95, 95],
  //       iconImageOffset: [-19, -44]
  //     });

  //     map.controls.remove('geolocationControl');
  //     map.controls.remove('searchControl');
  //     map.controls.remove('trafficControl');
  //     map.controls.remove('typeSelector');
  //     map.behaviors.disable(['scrollZoom']);

  //     map.geoObjects.add(placeMark);

  //     placeMark.events.add('mouseenter', function (e) {
  //       e.get('target').options.set('iconImageHref', './img/map/balun-1.svg');
  //     });

  //     placeMark.events.add('mouseleave', function (e) {
  //       e.get('target').options.set('iconImageHref', './img/map/balun-1.svg');
  //     });
  //   }

  //   ymaps.ready(init);
  // };

  // Кастомная карта SVG
  // var customMap = document.querySelector('.custom-map');

  // Проверка наличия блока .custom-map
  // if (customMap) {
  //   var hints = customMap.querySelectorAll('.custom-map__hints-item');
  //   var icons = customMap.querySelectorAll('.custom-map__icon');

  //   // Делаем первые элементы активными
  //   if (hints.length > 0) {
  //     hints[0].classList.add('active');
  //   }
  //   if (icons.length > 0) {
  //     icons[0].classList.add('active');
  //   }

  //   // Обработка кликов по иконкам
  //   icons.forEach(function (icon) {
  //     icon.addEventListener('click', function () {
  //       // Удаляем активные классы у всех элементов
  //       hints.forEach(function (hint) {
  //         hint.classList.remove('active');
  //       });
  //       icons.forEach(function (el) {
  //         el.classList.remove('active');
  //       });

  //       // Добавляем активный класс к текущему элементу
  //       this.classList.add('active');

  //       // Находим и активируем соответствующую подсказку
  //       var correspondingHint = customMap.querySelector('.custom-map__hints-item[data-name="' + this.id + '"]');
  //       if (correspondingHint) {
  //         correspondingHint.classList.add('active');
  //       }
  //     });
  //   });

  //   // Обработка кликов вне иконок
  //   customMap.addEventListener('click', function (event) {
  //     if (!event.target.closest('.custom-map__icon')) {
  //       hints.forEach(function (hint) {
  //         hint.classList.remove('active');
  //       });
  //       icons.forEach(function (icon) {
  //         icon.classList.remove('active');
  //       });
  //     }
  //   });
  // }

  // Простой аккордеон
  // const titles = document.querySelectorAll('.accordion__title');
  // Функция для закрытия всех аккордеонов
  // function closeAllAccordions() {
  //   titles.forEach(otherTitle => {
  //     otherTitle.classList.remove('active');
  //     otherTitle.nextElementSibling.style.maxHeight = null;
  //   });
  // }
  // Инициализация первого аккордеона как активного
  // if (titles.length > 0) {
  //   titles[0].classList.add('active');
  //   titles[0].nextElementSibling.style.maxHeight = titles[0].nextElementSibling.scrollHeight + "px";
  // }
  // Прослушивание кликов на всех заголовках аккордеонов
  // titles.forEach(title => {
  //   title.addEventListener('click', () => {
  //     const accordionBody = title.nextElementSibling;
  //     const isActive = title.classList.contains('active');
  //     closeAllAccordions(); // Сначала закрываем все аккордеоны
  //     // Затем переключаем состояние нажатого аккордеона
  //     if (!isActive) {
  //       title.classList.add('active');
  //       accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
  //     }
  //   });
  // });

  // Работа с формами
  // const handleClickOrTouch = (element, callback) => {
  //   const touchendListener = (e) => {
  //     e.preventDefault();
  //     element.removeEventListener('touchend', touchendListener);
  //     callback(e);
  //   };

  //   element.addEventListener('click', callback);
  //   element.addEventListener('touchstart', (e) => {
  //     e.preventDefault();
  //     element.addEventListener('touchend', touchendListener);
  //   });
  // };

  // const setupBodyClickListener = () => {
  //   document.removeEventListener('click', bodyClickListener);

  //   function bodyClickListener(event) {
  //     let activeModal = document.querySelector('.modal.active');
  //     if (activeModal && (!event.target.closest('.modal__body') || event.target.closest('.js-close-modal'))) {
  //       activeModal.classList.remove('active');
  //       document.removeEventListener('click', bodyClickListener);
  //     }
  //   }

  //   document.addEventListener('click', bodyClickListener);
  // };

  // let showDialogButtons = document.querySelectorAll('[data-target]');
  // showDialogButtons.forEach(button => {
  //   handleClickOrTouch(button, function (event) {
  //     event.preventDefault();
  //     event.stopPropagation();

  //     let targetClass = event.currentTarget.getAttribute('data-target');
  //     let modal = document.getElementById(targetClass);

  //     if (modal) {
  //       modal.classList.add('active');
  //       setupBodyClickListener();
  //     }
  //   });
  // });

  // Закрытие активного модального окна
  // const closeActiveModal = () => {
  //   let activeModal = document.querySelector('.modal.active');
  //   if (activeModal) {
  //     activeModal.classList.remove('active');
  //   }
  // };

  // Показать модальное окно с сообщением об успешной отправке
  // const showSuccessModal = () => {
  //   let successModal = document.getElementById('successModal');
  //   if (successModal) {
  //     successModal.classList.add('active');
  //     setupBodyClickListener();
  //   }
  // };

  // Настройки маски для телефона
  // const maskOptions = {
  //   mask: '+{7}(000)000-00-00'
  // };

  // Находим все элементы ввода с типом 'tel'
  // const phoneInputs = document.querySelectorAll('input[type="tel"]');
  // phoneInputs.forEach(input => {
  //   const maskInstance = IMask(input, maskOptions);
  //   input.setAttribute('pattern', '\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}');
  //   input.setAttribute('title', 'Номер телефона должен содержать 11 цифр');

  //   function checkValue() {
  //     // Проверяем, есть ли что-то кроме маски
  //     if (maskInstance.unmaskedValue) {
  //       input.classList.add('has-value');
  //     } else {
  //       input.classList.remove('has-value');
  //     }
  //   }

  //   // Проверяем значение при потере фокуса и вводе данных
  //   input.addEventListener('blur', checkValue);
  //   input.addEventListener('input', checkValue);
  // });


});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
