import type { PaletteOptions, ThemeOptions } from "@mui/material";

const background: PaletteOptions["background"] = {
  paper: "#fff",
  default: "#fff",
};

const text: PaletteOptions["text"] = {
  primary: "rgba(0, 0, 0, 0.87)",
  secondary: "rgba(0, 0, 0, 0.6)",
  disabled: "rgba(0, 0, 0, 0.38)",
};

const divider: PaletteOptions["divider"] = "rgba(0, 0, 0, 0.12)";

const primary: PaletteOptions["primary"] = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};

const secondary: PaletteOptions["secondary"] = {
  main: "#9c27b0",
  light: "#ba68c8",
  dark: "#7b1fa2",
  contrastText: "#fff",
};

const info: PaletteOptions["info"] = {
  main: "#0288d1",
  light: "#03a9f4",
  dark: "#01579b",
  contrastText: "#fff",
};

const warning: PaletteOptions["warning"] = {
  main: "#ed6c02",
  light: "#ff9800",
  dark: "#e65100",
  contrastText: "#fff",
};

const error: PaletteOptions["error"] = {
  main: "#d32f2f",
  light: "#ef5350",
  dark: "#c62828",
  contrastText: "#fff",
};

const success: PaletteOptions["success"] = {
  main: "#2e7d32",
  light: "#4caf50",
  dark: "#1b5e20",
  contrastText: "#fff",
};

const action: PaletteOptions["action"] = {
  active: "rgba(0, 0, 0, 0.54)",
  hover: "rgba(0, 0, 0, 0.04)",
  hoverOpacity: 0.04,
  selected: "rgba(0, 0, 0, 0.08)",
  selectedOpacity: 0.08,
  disabled: "rgba(0, 0, 0, 0.26)",
  disabledBackground: "rgba(0, 0, 0, 0.12)",
  disabledOpacity: 0.38,
  focus: "rgba(0, 0, 0, 0.12)",
  focusOpacity: 0.12,
  activatedOpacity: 0.12,
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    background,
    primary,
    secondary,
    text,
    info,
    warning,
    error,
    success,
    divider,
    action,
  },
};
