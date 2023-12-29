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


  // простой слайдер
  var custSlider = new Swiper(".cust-slider .swiper", {
    // slidesPerView: 1,
    pagination: {
      el: ".cust-slider .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".cust-slider .swiper-button-next",
      prevEl: ".cust-slider .swiper-button-prev",
    },
  });


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

  // Кастомные селекты
  var customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach(function (select) {
    var selected = select.querySelector(".custom-select__selected");
    var options = select.querySelector(".custom-select__options");

    selected.addEventListener("click", function () {
      select.classList.toggle("open");
    });

    var selectOptions = options.querySelectorAll(".custom-select__option");
    selectOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        var value = this.getAttribute("data-value");
        selected.textContent = this.textContent;
        select.classList.remove("open");
        var input = select.querySelector("input[type=hidden]");
        input.value = value;
      });
    });

    var defaultValue = select.getAttribute("data-default");
    if (defaultValue) {
      selected.textContent = defaultValue;
      var defaultOption = options.querySelector('.custom-select__option[data-value="' + defaultValue + '"]');
      if (defaultOption) {
        var defaultOptionValue = defaultOption.getAttribute("data-value");
        var input = select.querySelector("input[type=hidden]");
        input.value = defaultOptionValue;
      }
    }

    document.addEventListener("click", function (event) {
      if (!select.contains(event.target)) {
        select.classList.remove("open");
      }
    });
  });
  // Кастомные селекты конец


  // Работа с модальными окнами
  const handleClickOrTouch = (element, callback) => {
    const touchendListener = (e) => {
      e.preventDefault();
      element.removeEventListener('touchend', touchendListener);
      callback(e);
    };

    element.addEventListener('click', callback);
    element.addEventListener('touchstart', (e) => {
      e.preventDefault();
      element.addEventListener('touchend', touchendListener);
    });
  };

  const setupBodyClickListener = () => {
    document.removeEventListener('click', bodyClickListener);

    function bodyClickListener(event) {
      let activeModal = document.querySelector('.modal.active');
      if (activeModal && (!event.target.closest('.modal__body') || event.target.closest('.js-close-modal'))) {
        activeModal.classList.remove('active');
        document.removeEventListener('click', bodyClickListener);
      }
    }

    document.addEventListener('click', bodyClickListener);
  };

  let showDialogButtons = document.querySelectorAll('[data-target]');
  showDialogButtons.forEach(button => {
    handleClickOrTouch(button, function (event) {
      event.preventDefault();
      event.stopPropagation();

      let targetClass = event.currentTarget.getAttribute('data-target');
      let modal = document.getElementById(targetClass);

      if (modal) {
        modal.classList.add('active');
        setupBodyClickListener();
      }
    });
  });

  // Закрытие активного модального окна
  const closeActiveModal = () => {
    let activeModal = document.querySelector('.modal.active');
    if (activeModal) {
      activeModal.classList.remove('active');
    }
  };

  // Показать модальное окно с сообщением об успешной отправке
  const showSuccessModal = () => {
    let successModal = document.getElementById('successModal');
    if (successModal) {
      successModal.classList.add('active');
      setupBodyClickListener();
    }
  };

  // Настройки маски для телефона
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  // Находим все элементы ввода с типом 'tel'
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    IMask(input, maskOptions);
    input.setAttribute('pattern', '\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}');
    input.setAttribute('title', 'Номер телефона должен содержать 11 цифр');
  });

  // Находим все формы на странице
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Проверка валидации формы перед отправкой
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      // Закрытие текущего модального окна
      closeActiveModal();

      // Показать модальное окно с сообщением об успешной отправке
      showSuccessModal();
    });
  });


});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
