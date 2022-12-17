import type { Theme, ThemeOptions } from "@mui/material/styles";
import { createTheme as createMuiTheme } from "@mui/material/styles";

import { baseTheme } from "./base";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export type ThemeType = "light" | "dark";

export const createTheme = (themeType: ThemeType): Theme => {
  let override: ThemeOptions = {};

  switch (themeType) {
    case "light":
      override = lightTheme;
      break;
    case "dark":
      override = darkTheme;
      break;
    default:
      break;
  }

  const theme = createMuiTheme(baseTheme, override);
  return theme;
};
