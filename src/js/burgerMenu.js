// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });

const header = document.querySelector('[data-header]');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-menu]');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

if (header) {
  const handleHeaderScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();
}

if (openMenuBtn && closeMenuBtn && mobileMenu) {
  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  mobileMenu.addEventListener('click', event => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}