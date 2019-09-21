const Filter = {
  filterExamples(selected) {
    const hiddenClass = 'examples-wrapper--hidden';
    const emptyClass = 'filterable--empty';
    document.querySelectorAll('.examples-wrapper').forEach(el => {
      const elIssues = el.getAttribute('data-examples');
      if (elIssues.indexOf(selected) == -1) {
        el.classList.add(hiddenClass);
      } else {
        el.classList.remove(hiddenClass);
      }
      const parentCell = el.parentElement;
      if (this.hasVisibleElements(parentCell)) {
        parentCell.classList.remove(emptyClass)
      } else {
        parentCell.classList.add(emptyClass);
      }
    });
  },
  filterByAttribute() {
    document.querySelector('.issues-dropdown-filter__select').addEventListener('change', e => {
      const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
      const selectedIssue = selectedOption.value;
      this.filterExamples(selectedIssue);
    });
  },
  
  filterByUI() {
    const filterValue= document.querySelector('.issues-dropdown-filter__select').value;
    this.filterExamples(filterValue);
  },
  hasVisibleElements(cell) {
    return Array.from(cell.children).filter(el => $(el).is(":visible")).length
  },
  init() {
    this.filterByAttribute();
    this.filterByUI();
  }
};

module.exports = Filter;
