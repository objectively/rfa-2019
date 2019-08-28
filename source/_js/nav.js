const Nav = {
  mainMenu() {
    // Main Menu Click Behavior
    $('.js-trigger-menu').click(e => {
      $(e.currentTarget)
        .next()
        .addClass('js-active-menu');
      $('#overlay').addClass('js-active');
    });
  },
  closeMenu() {
    $('.js-close-menu').click(() => {
      $('.js-active').removeClass('js-active');
      $('.js-active-menu').removeClass('js-active-menu');
    })
  },
  init() {
    this.mainMenu();
    this.closeMenu();
  }
};

module.exports = Nav;
