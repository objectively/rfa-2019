const Nav = {
  slideContainer: $('.nav'),
  slideTarget: $('.nav__container'),
  overlay: document.querySelector('#overlay'),
  direction: document.querySelector('.js-trigger-nav').getAttribute('data-direction'),
  mainMenu() {
    Nav.slideTarget.animate({ [Nav.direction]: '-100%' }, 'slow').fadeOut(5);
    Nav.slideContainer.removeClass('is-visible');

    document.querySelector('.js-trigger-nav').addEventListener('click', () => {
      Nav.slideTarget.animate({ [Nav.direction]: '0%' }, 500).css('display', 'block');
      Nav.slideContainer.addClass('is-visible');
      Nav.overlay.classList.add('js-active');
    });
  },
  closeMenuButton() {
    document.querySelector('.js-close-nav').addEventListener('click', () => {
      Nav.slideTarget.animate({ [Nav.direction]: '-100%' }, 700).fadeOut(5);
      Nav.slideContainer.removeClass('is-visible');
      Nav.overlay.classList.remove('js-active');
    });
  },
  closeMenuOverlay() {
    document.querySelector('#overlay').addEventListener('click', () => {
      Nav.slideTarget.animate({ [Nav.direction]: '-100%' }, 700).fadeOut(5);
      Nav.slideContainer.removeClass('is-visible');
      Nav.overlay.classList.remove('js-active');
    });
  },
  init() {
    this.mainMenu();
    this.closeMenuButton();
    this.closeMenuOverlay();
  }
};

module.exports = Nav;
