import type { Theme } from "@emotion/react";

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    // refactor
    // text
    textColorPrimary: "#aaa",
    textColorSecondary: "#aaa",
    textColorDisabled: "#aaa",
    // fill
    fillColorPrimary: "#aaa",
    fillColorSecondary: "#aaa",
    fillColorDisabled: "#aaa",
    // old
    scrollbar: "#d9d9d9",
    scrollbarActive: "#cecece",
    nav: "#e5e5e5",
    navItem: "#797979",
    navItemActive: "#000",
    background: "#FEFEFA",
    color: "#000",
    border: "#dedede",
    shadow: "#cccccc33",
    spinner: "#797979",
    footerTop: "#F2F3F4",
    footerBottom: "#F2F3F4",
    link: "#aaa",
    yellow: "#845E05",
    blue: "#005B71",
    green: "#005544",
    red: "#AC2415",
    purple: "#63319F",
  },
  dark: {
    // refactor
    // text
    textColorPrimary: "#ffffff",
    textColorSecondary: "#aaaaaa",
    textColorDisabled: "#717171",
    // fill
    fillColorPrimary: "#1a1a1a",
    fillColorSecondary: "#0f0f0f",
    fillColorDisabled: "#2a2a2a",
    // scrollbar
    scrollbarColorPrimary: "#262626",
    scrollbarColorSecondary: "#313131",
    // stroke
    strokeColorPrimary: "#212121",

    // shadow
    shadowColorPrimary: "#11111133",

    // colors

    yellowColorPrimary: "#f8c54e",
    greenColorPrimary: "#00ffcc",
    blueColorPrimary: "#00ccff",

    // old
    // scrollbar: "#262626",
    // scrollbarActive: "#313131",
    // navItem: "#aaaaaa",
    // navItemActive: "#ffffff",
    // background: "#1a1a1a",
    // color: "#fff",
    // nav: "#1a1a1a",
    // border: "#212121",
    // shadow: "#11111133",
    // spinner: "#aaaaaa",
    // footerTop: "#1a1a1a",
    // footerBottom: "#0f0f0f",
    // link: "#aaaaaa", // #0cf  #00ffcc #7bfc01 #7d26cd
    // yellow: "#f8c54e",
    // blue: "#00ccff",
    // green: "#00ffcc",
    // red: "#f85d4d",
    // purple: "#8553cF",
    // navButton: "#313131",
    // card: "#2c2c2c",
    // innerCard: "#232323",
  },
};

export default themes;
