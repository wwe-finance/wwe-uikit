import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  headerBackground: lightColors.card,
  sidebarBackground: '#BDBDBD',
  childMenuBackground: '#969191',
  menuOverColor: '#dcb9c2',
  iconColor: '#C51924',
  textColor: '#851017',
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  headerBackground: '#ECA6B8',
  sidebarBackground: '#BDBDBD',
  childMenuBackground: '#d0cbcb',
  menuOverColor: '#dcb9c2',
  iconColor: '#C51924',
  textColor: '#851017',
  hover: "#473d5d",
};
