document.addEventListener("DOMContentLoaded", (e) => {
  const header = document.querySelector("#header");
  const headerContent = header.querySelector(".header__content");
  const burgerBtn = header.querySelector("#burger-btn");
  const menuMobile = header.querySelector(".header__menu-mobile");
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

  burgerBtn.addEventListener("click", (e) => {
    if (burgerBtn.classList.contains("open")) {
      burgerBtn.classList.remove("open");
      menuMobile.classList.remove("open");
      document.body.style.overflowY = "";
      return;
    }
    burgerBtn.classList.add("open");
    menuMobile.classList.add("open");
    document.body.style.overflowY = "hidden";
  });
  
  innerBtn.addEventListener("click", (e) => {
    modalForm.classList.add('modal-form__visible');
  })

  closeModalFormBtn.addEventListener('click', closeModal) 
  
  function closeModal() {
    modalForm.classList.remove('modal-form__visible');
  }

  // init sliders 
  const projectsSwiper = new Swiper("#projects__swiper", {
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
