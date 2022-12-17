import type { PaletteOptions, ThemeOptions } from "@mui/material";

const background: PaletteOptions["background"] = {
  paper: "#121212",
  default: "#121212",
};

const text: PaletteOptions["text"] = {
  primary: "#fff",
  secondary: "rgba(255, 255, 255, 0.7)",
  disabled: "rgba(255, 255, 255, 0.5)",
};

const divider: PaletteOptions["divider"] = "rgba(255, 255, 255, 0.12)";

const primary: PaletteOptions["primary"] = {
  main: "#90caf9",
  light: "#e3f2fd",
  dark: "#42a5f5",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const secondary: PaletteOptions["secondary"] = {
  main: "#ce93d8",
  light: "#f3e5f5",
  dark: "#ab47bc",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const info: PaletteOptions["info"] = {
  main: "#29b6f6",
  light: "#4fc3f7",
  dark: "#0288d1",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const warning: PaletteOptions["warning"] = {
  main: "#ffa726",
  light: "#ffb74d",
  dark: "#f57c00",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const error: PaletteOptions["error"] = {
  main: "#f44336",
  light: "#e57373",
  dark: "#d32f2f",
  contrastText: "#fff",
};

const success: PaletteOptions["success"] = {
  main: "#66bb6a",
  light: "#81c784",
  dark: "#388e3c",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const action: PaletteOptions["action"] = {
  active: "#fff",
  hover: "rgba(255, 255, 255, 0.08)",
  hoverOpacity: 0.08,
  selected: "rgba(255, 255, 255, 0.16)",
  selectedOpacity: 0.16,
  disabled: "rgba(255, 255, 255, 0.3)",
  disabledBackground: "rgba(255, 255, 255, 0.12)",
  disabledOpacity: 0.38,
  focus: "rgba(255, 255, 255, 0.12)",
  focusOpacity: 0.12,
  activatedOpacity: 0.24,
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
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
