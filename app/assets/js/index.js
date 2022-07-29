import { checkMobile } from "./checkMobile.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // Homepage scripts
  const header = document.querySelector("#header");
  const headerContent = header.querySelector(".header__content");
  const burgerBtn = header.querySelector("#burger-btn");

  const innerBtn = document.querySelector('.inner__btn');
  const modalForm = document.querySelector('#modal-form');
  const closeModalFormBtn = document.querySelector('#modal-form .modal-form__close');
  
  document.addEventListener("scroll", (e) => {
    if (header.offsetTop > 30) {
      headerContent.style.borderBottom = "1px solid #CACACA";
      return;
    }
    headerContent.style.borderBottom = "none";
  });

  // Проверка устройства
  if (checkMobile.isMobile()) {
    let menuItems = header.querySelectorAll('.header__navigation > ul > li');
    let itemsFiltered = [...menuItems].filter((item) => {
      // есть ли подменю
      return item.children[1] ? true : false;
    });

    itemsFiltered.forEach((item) => {
      item.classList.add('hasSubmenu');
      item.addEventListener('click', (e) => {
        item.classList.toggle('submenu-active');
      })
    })

    document.body.classList.add('_mobile');
  } else {
    document.body.classList.add('_desktop');
  }

  // Mobile menu 
  burgerBtn.addEventListener("click", (e) => {
    if (headerContent.classList.contains("menuopen")) {
      burgerBtn.classList.remove("menuopen");
      headerContent.classList.remove('menuopen');
      document.body.style.overflowY = "";
      return;
    }
    burgerBtn.classList.add("menuopen");
    headerContent.classList.add('menuopen');
    document.body.style.overflowY = "hidden";
  });
  
  // Modal
  innerBtn.addEventListener("click", (e) => {
    modalForm.classList.add('modal-form__visible');
  })

  closeModalFormBtn.addEventListener('click', closeModal) 
  
  function closeModal() {
    modalForm.classList.remove('modal-form__visible');
  }

  // init sliders 
  const projectsSwiper = new Swiper("#projects__swiper", {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 3.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const sectorSwiper = new Swiper("#sector__swiper", {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 21,
    autoHeight: true,
  });

});
