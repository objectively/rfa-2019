import CompactPanel from './compact-panel';
import Expandable from './expandable';
import Filter from './filter';
import FixedNav from './fixed-nav';
import FixedSection from './fixed-section';
import Overlay from './overlay';
import Nav from './nav';
import Scroll from './scroll';
import Search from './search';
import Sticky from './sticky';
import Tooltip from './tooltip';
import Utils from './utils';

CompactPanel.init();
Expandable.init();
FixedNav.init();
Nav.init();
Overlay.init();
Scroll.init();
Search.init();
Sticky.init();
Tooltip.init();
Utils.markdownLinksNewPage();


if (window.location.pathname === '/' || window.location.pathname === '/rfa-2019/') {
  FixedSection.init();
  Filter.init();
};
