const Filter = {
  filterByAttribute() {
    const hiddenClass = 'examples-wrapper--hidden';
    document.querySelector('.issues-dropdown-filter__select').addEventListener('change', e => {
      const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
      const selectedIssue = selectedOption.value;
      document.querySelectorAll('.examples-wrapper').forEach(el => {
        const elIssues = el.getAttribute('data-examples');
        if (elIssues.indexOf(selectedIssue) == -1) {
          el.classList.add(hiddenClass);
        } else {
          el.classList.remove(hiddenClass);
        }
      });
    });
  },
  init() {
    this.filterByAttribute();
  }
};

module.exports = Filter;
