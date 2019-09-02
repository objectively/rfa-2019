const FixedSection = {
  fixIndexTable() {
    console.log('scroll', $('.fixed-section'));

    const $window = $(window);
    if ($('.fixed-section').length > 0) {
      const $fixedSection = $('.fixed-section');
      const elTop = $fixedSection.offset().top;
      // const margin = $('.fixed-section__cell').height();
      const margin = 50;

      $window.scroll(() => {
        $fixedSection.toggleClass('fixed', $window.scrollTop() > elTop);
        if ($window.scrollTop() > elTop) {
          $fixedSection.addClass('fixed');
          $('.fixed-section__row:first-of-type').css('margin-top', margin);
          const fixedSectionWrapper = document.querySelector('.fixed-section-wrapper').getBoundingClientRect();
          const fixedSectionTop = Math.abs(fixedSectionWrapper.top) + margin / 2;
          const fixedSectionHeight = fixedSectionWrapper.height;
          // when offset top of wrapper = height of wrapper remove fixed
          if (fixedSectionHeight <= Math.abs(fixedSectionTop)) {
            $fixedSection.removeClass('fixed');
          }
        } else {
          $fixedSection.removeClass('fixed');
          $('.fixed-section__row:first-of-type').css('margin-top', 0);
        }
      });
    }
  },
  init() {
    const $window = $(window);
    if ($('.fixed-section').length > 0) {
      const $fixedSection = $('.fixed-section');
      const $fixedSectionWrapper = $('.fixed-section-wrapper');

      const elTop = $fixedSection.offset().top;
      const margin = 50;

      $window.scroll(() => {
        console.log($window.scrollTop() , elTop)
        // $fixedSection.toggleClass('fixed', $window.scrollTop() > elTop);
        if ($window.scrollTop() > elTop) {
          $fixedSection.addClass('fixed');
         
          // remove fixed header near bottom of examples grid
          const fixedSectionWrapper = document.querySelector('.fixed-section-wrapper').getBoundingClientRect();
          const fixedSectionTop = Math.abs(fixedSectionWrapper.top) + margin;
          const fixedSectionHeight = fixedSectionWrapper.height;
          // when offset top of wrapper = height of wrapper remove fixed
          if (fixedSectionHeight <= Math.abs(fixedSectionTop)) {
            $fixedSection.removeClass('fixed');
          }
          // $('.examples-grid__content-row:first-child > .examples-grid__content-cell ').css('padding-top', '60px');
          // $('.examples-grid__header').height()
        } else {
          $fixedSection.removeClass('fixed');
          // $('.examples-grid__content-row:first-child > .examples-grid__content-cell ').css('padding-top', '50px');
        }

      });
    }
    // if ($('.fixed-section').length > 0) {
    //   const $fixedSection = $('.fixed-section');
    //   const $fixedSectionWrapper = $('.fixed-section-wrapper');
    //   const elTop = $fixedSection.offset().top;
    //   const margin = $('.fixed-section__cell').height();
      
    //   const $window = $(window);
      
    //   $window.scroll(() => {
    //     // $fixedSection.toggleClass('fixed', $window.scrollTop() > elTop);
    //     // $('.fixed-section-wrapper').css('padding-bottom',( margin * 2));
        
    //     if ($window.scrollTop() > elTop) {
          
    //       $fixedSection.addClass('fixed');
    //       $('.fixed-section__row:first-of-type').css('margin-top', margin);
    //       const fixedSectionWrapper = document.querySelector('.fixed-section-wrapper').getBoundingClientRect();
    //       const fixedSectionTop = Math.abs(fixedSectionWrapper.top) + margin;
    //       const fixedSectionHeight = fixedSectionWrapper.height;
    //       // when offset top of wrapper = height of wrapper remove fixed
    //       if (fixedSectionHeight <= Math.abs(fixedSectionTop)) {
    //         $fixedSection.removeClass('fixed');
    //       }
    //     } else {
    //       $fixedSection.removeClass('fixed');
    //       $('.fixed-section__row:first-of-type').css('margin-top', 0);
    //     }
    //   });
    // }
  }
};

module.exports = FixedSection;

// $window.scroll(() => {
//   $fixedSection.toggleClass('fixed', $window.scrollTop() > elTop);
//   if ($window.scrollTop() > elTop) {
//     $fixedSection.addClass('fixed');
//     $('.fixed-section__row:first-of-type').css('margin-top', margin);
//     const fixedSectionWrapper = document.querySelector('.fixed-section-wrapper').getBoundingClientRect();
//     const fixedSectionTop = Math.abs(fixedSectionWrapper.top) + margin / 2;
//     const fixedSectionHeight = fixedSectionWrapper.height;
//     // when offset top of wrapper = height of wrapper remove fixed
//     if (fixedSectionHeight <= Math.abs(fixedSectionTop)) {
//       $fixedSection.removeClass('fixed');
//     }
//   } else {
//     $fixedSection.removeClass('fixed');
//     $('.fixed-section__row:first-of-type').css('margin-top', 0);
//   }
// });
