const Expandable = {
  toggleExpandable() {
    const expandableSection = document.querySelector('.expandable');
    $('.read-more').on('click', e => {
      const expandableTarget = e.currentTarget.closest('.expandable');
      expandableTarget.classList.contains('js-expandable-active') 
        ? expandableTarget.classList.remove('js-expandable-active')
        : expandableTarget.classList.add('js-expandable-active'); 
    })
  },
  init() {
    this.toggleExpandable();
  }
}

module.exports = Expandable;