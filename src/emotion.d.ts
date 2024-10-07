import "@emotion/react";

type Hex = `#${string}`;

declare module "@emotion/react" {
  export interface Theme {
    // refactor
    textColorPrimary: Hex;
    textColorSecondary: Hex;
    textColorDisabled: Hex;

    fillColorPrimary: Hex;
    fillColorSecondary: Hex;
    fillColorDisabled: Hex;

    scrollbarColorPrimary: Hex;
    scrollbarColorSecondary: Hex;

    strokeColorPrimary: Hex;

    shadowColorPrimary: Hex;

    yellowColorPrimary: Hex;
    greenColorPrimary: Hex;
    blueColorPrimary: Hex;
    redColorPrimary: Hex;
    // scrollbar: Hex;
    // scrollbarActive: Hex;
    // nav: Hex;
    // navItem: Hex;
    // navItemActive: Hex;
    // background: Hex;
    // color: Hex;
    // shadow: Hex;
    // border: Hex;
    // spinner: Hex;
    // footerTop: Hex;
    // footerBottom: Hex;
    // link: Hex;
    // yellow: Hex;
    // blue: Hex;
    // green: Hex;
    // red: Hex;
    // purple: Hex;
  }
}
