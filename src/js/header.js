const header = document.querySelector('[data-header]');
const aboutSection = document.querySelector('#about');

if (header) {
  const updateHeaderState = () => {
    const isScrolled = window.scrollY > 8;
    header.dataset.scrolled = isScrolled ? 'true' : 'false';

    if (!aboutSection) return;

    const headerHeight = header.offsetHeight;
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const isMenuOpen = document.body.dataset.menuOpen === 'true';

    const shouldHideHeader = aboutTop <= headerHeight && !isMenuOpen;

    header.dataset.hidden = shouldHideHeader ? 'true' : 'false';
  };

  updateHeaderState();

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('resize', updateHeaderState);
}