const FixedSection = {
  fixIndexTable() {
    const $window = $(window);
    if ($('.fixed-section').length > 0) {
      const $fixedSection = $('.fixed-section');
      const $fixedSectionWrapper = $('.fixed-section-wrapper');
      let elTop = $fixedSection.offset().top;
      // reassign elTop when read more is expanded
      $('.read-more').on('click', () => {
        elTop = $fixedSection.offset().top;
      });
      const margin = 50;

      $window.scroll(() => {
        if ($window.scrollTop() > elTop) {
          $fixedSection.addClass('fixed');
          // remove fixed header near bottom of examples grid
          const fixedSectionWrapper = document.querySelector('.fixed-section-wrapper').getBoundingClientRect();
          const fixedSectionTop = Math.abs(fixedSectionWrapper.top) + margin;
          const fixedSectionHeight = fixedSectionWrapper.height;
          // when offset top of wrapper = height of wrapper remove fixed
          $('.content-section').css('margin-top', $('.fixed-section').height());
          $('.examples-grid__content-row:first-of-type .examples-grid__content-cell').css('padding-top', '7rem');
          fixedSectionHeight <= Math.abs(fixedSectionTop)
            ? $fixedSection.css('opacity', 0)
            : $fixedSection.css('opacity', 1);
          $('.slide-panel__content').addClass('panel-fixed');

          const contentBottom = document.querySelector('.slide-panel__wrapper--compact').getBoundingClientRect().bottom;

          const keyBottom = document.querySelector('.slide-panel__content').getBoundingClientRect().bottom;

          if (Math.floor(keyBottom) > Math.floor(contentBottom)) {
            $('.slide-panel__content').removeClass('panel-fixed');
          } else {
            $('.slide-panel__content')
              .addClass('panel-fixed')
              .addClass('fixed-bottom');
          }
        } else {
          $fixedSection.removeClass('fixed');
          $('.content-section').css('margin-top', 'initial');
          $('.examples-grid__content-row:first-of-type .examples-grid__content-cell').css('padding-top', '3rem');
          $('.slide-panel__content')
            .removeClass('panel-fixed')
            .removeClass('fixed-bottom');
        }
      });
    }
  },
  positionKey() {
    const contentBottom = document.querySelector('.slide-panel__wrapper--compact').getBoundingClientRect().bottom;
    const keyBottom = document.querySelector('.slide-panel__content').getBoundingClientRect().bottom;
    if (Math.floor(keyBottom) > Math.floor(contentBottom)) {
      $('.slide-panel__content')
      .addClass('fixed-bottom').removeClass('panel-fixed');
    }
  },
  init() {
    this.fixIndexTable();

  }
};

module.exports = FixedSection;
