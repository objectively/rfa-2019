const Tooltip = {
  hoverCriteria() {
    $('.title').hover(function() {
      $(this).find("span.tooltip").css({"display": "inline", "opacity": "1"});
    },function() {
      $(this).find("span.tooltip").css( {"display": "inline", "opacity": "0"});
    });
  },
  init() {
    this.hoverCriteria();
  }
};

module.exports = Tooltip;
