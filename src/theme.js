import {
  highlight, actions,
  backgroundDark,
  backgroundLight, text, logo,
} from './colors.js';

export default {
  spacing: {
      iconSize: 24,
      desktopGutter: 24,
      desktopGutterMore: 32,
      desktopGutterLess: 16,
      desktopGutterMini: 8,
      desktopKeylineIncrement: 60,  // left-nav width = this * 4
      desktopDropDownMenuItemHeight: 32,
      desktopDropDownMenuFontSize: 15,
      desktopLeftNavMenuItemHeight: 30,
      desktopSubheaderHeight: 48,
      desktopToolbarHeight: 56,
    },
  fontFamily: 'Montserrat, sans-serif',
  palette: {
    primary1Color: actions,
    primary2Color: actions,
    primary3Color: actions,
    accent1Color: highlight,
    accent2Color: highlight,
    accent3Color: highlight,
    textColor: text,
    alternateTextColor: text,
    canvasColor: backgroundDark,
    borderColor: logo,
    disabledColor: backgroundLight,
    pickerHeaderColor: actions,
    clockCircleColor: actions,
    shadowColor: backgroundDark,
  },
};
