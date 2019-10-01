
const FixedNav = {
  fixNav: () => {
    const $window = $(window);
    if ($('.page-section--nav').length > 0) {
      const $fixedNav = $('.page-section--nav');
      const elTop = $fixedNav.offset().top;

      $window.scroll(() => {
        $fixedNav.toggleClass('fixed', $window.scrollTop() > elTop);
      });
    }
  },
  handleRedirectDropdownSelect() {
    document.querySelector('.criteria-dropdown-nav__select').addEventListener('change', (e) => {
      const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
      const urlPath = selectedOption.getAttribute('data-path');
      window.location.href = urlPath;
    })
  },
  init() {
    const hasCriteriaDropdown = document.querySelector('.criteria-dropdown-nav__select');
    this.fixNav();
    if (hasCriteriaDropdown) {
      this.handleRedirectDropdownSelect();
    }
  }
};

module.exports = FixedNav;
