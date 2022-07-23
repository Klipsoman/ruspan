document.addEventListener('DOMContentLoaded', (e) => {
  const header = document.querySelector('#header');
  const headerContent = header.querySelector('.header__content');
  const burgerBtn = header.querySelector('#burger-btn');
  const menuMobile = header.querySelector('.header__menu-mobile');
  
  document.addEventListener('scroll', (e) => {
    if (header.offsetTop > 30) {
      headerContent.style.borderBottom = '1px solid #CACACA';
      return;
    }
    headerContent.style.borderBottom = 'none';
  })

  burgerBtn.addEventListener('click', (e) => {
    if (burgerBtn.classList.contains('open')) {
      burgerBtn.classList.remove('open');
      menuMobile.classList.remove('open');
      document.body.style.overflowY = '';
      return;
    }
    burgerBtn.classList.add('open');
    menuMobile.classList.add('open');
    document.body.style.overflowY = 'hidden';
  })
})