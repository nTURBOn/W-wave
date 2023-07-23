let head_search_input = document.querySelector(".head__search--input")
let head_search_button = document.querySelector(".head__search--button")

let active_btn_first = document.querySelector(".navigation__active--first")
let play_btn_first = document.querySelector(".navigation__play--first")
let stop_btn_first = document.querySelector(".navigation__stop--first")

let active_btn_second = document.querySelector(".navigation__active--second")
let play_btn_second = document.querySelector(".navigation__play--second")
let stop_btn_second = document.querySelector(".navigation__stop--second")

let navigation_menu_btn = document.querySelector(".navigation__menu--btn")
let navigation_menu = document.querySelector(".navigation__menu")

let head_live = document.querySelector(".head__live")
let head = document.querySelector(".head")
let head_live_img = document.querySelector(".head__live--img")

const element = document.querySelector('.broadcast__autor--select');
const choices = new Choices(element, {
  searchEnabled: false,
});

jQuery(document).ready(function($){
  $("#my-accordion").accordionjs();
});

const tabs = new GraphTabs('tab');

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.aboutus__arrow--next',
    prevEl: '.aboutus__arrow--prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    708: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1004: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1288: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.aboutus__inputs', {
    errorLabelStyle: {
      color: '#D52B1E',
    },
  });

  validation
    .addField('#comment', [{
      rule: 'required',
      value: true,
      errorMessage: "Ошибка"
    },
    ])

    .addField('#name', [{
      rule: 'required',
      value: true,
      errorMessage: "Ошибка"
    },
    ])

    .addField('#email', [{
      rule: 'required',
      value: true,
      errorMessage: "Ошибка"
    },
    ])

    .addField('#aboutus__checkbox--alarm', [{
      rule: 'required',
      value: true,
      errorMessage: "Ошибка"
    },
    ])
})

head_search_button.addEventListener('click',
function() {
  head_search_input.classList.toggle('head__search--active');
})

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.head__search--input') && !target.closest('.head__search--button')) {
head_search_input.classList.remove('head__search--active')
  }
})

play_btn_first.addEventListener('click',
function() {
  play_btn_first.classList.toggle('navigation__active--first');
  stop_btn_first.classList.toggle('navigation__active--first');
})

stop_btn_first.addEventListener('click',
function() {
  play_btn_first.classList.toggle('navigation__active--first');
  stop_btn_first.classList.toggle('navigation__active--first');
})

play_btn_second.addEventListener('click',
function() {
  play_btn_second.classList.toggle('navigation__active--second');
  stop_btn_second.classList.toggle('navigation__active--second');
})

stop_btn_second.addEventListener('click',
function() {
  play_btn_second.classList.toggle('navigation__active--second');
  stop_btn_second.classList.toggle('navigation__active--second');
})

navigation_menu_btn.addEventListener('click',
function() {
  navigation_menu.classList.toggle('navigation__menu--active');
})

head_live.addEventListener('click',
function() {
  head.classList.toggle('head__live--active');
  head_live.classList.toggle('head__live--active');
  head_live_img.classList.toggle('head__live--active');
})

let scrollpos = window.scrollY
const header = document.querySelector("header")
const scrollChange = 1
const remove_class_on_scroll = () => navigation_menu.classList.remove('navigation__menu--active');
const remove_class_on_scroll1 = () => $("#navigation__menu--toggle").prop('checked', false);

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) { remove_class_on_scroll()
    remove_class_on_scroll1() }
})


document.querySelectorAll('.podcasts__play--btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.podcasts__play--btn').forEach(function(btn){
btn.classList.remove('podcasts__play--btn--active')});
  e.currentTarget.classList.add('podcasts__play--btn--active');
  document.querySelectorAll('.podcasts__item').forEach(function(tabsBtn){
tabsBtn.classList.remove('podcasts__item--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('podcasts__item--active');
  });
});
