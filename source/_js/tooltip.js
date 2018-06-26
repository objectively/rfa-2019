const Tooltip = {
  hoverCriteria() {
    $('.title').hover(function() {
      $(this).find("span.tooltip").css({"display":"inline", "opacity":"1", "visibility":"visible"});
    },function() {
      $(this).find("span.tooltip").css( {"display":"inline", "opacity":"0", "visibility":"hidden"});
    });
  },
  init() {
    this.hoverCriteria();
  }
};

module.exports = Tooltip;
