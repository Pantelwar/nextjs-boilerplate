import type { PaletteOptions, ThemeOptions } from "@mui/material";
import { darkScrollbar } from "@mui/material";

/*
 * IMPORTANT
 * This is the base theme for the application.
 * There shouldn't be any colors in this object except the neutral colors.
 * All the colors should go in their respective theme file.
 * All the components should be styled here.
 * No component styling should be done in specific theme files.
 */

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    // This will be the global styles for the whole application
    styleOverrides: (theme) => ({
      // Removing double reveal icons on passwords fields on microsoft edge
      "::-ms-reveal": {
        display: "none",
      },

      // Styling nprogress bar
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        backgroundColor: theme.palette.primary.main,
        height: "3px",
        left: "0px",
        position: "fixed",
        top: "0px",
        width: "100%",
        zIndex: 2000,
      },

      // Styling scrollbar
      // "*::-webkit-scrollbar": {
      //   width: 4,
      //   height: 4,
      //   backgroundColor: theme.palette.background.default,
      // },
      // "*::-webkit-scrollbar-track": {
      //   WebkitBoxShadow: "inset 0 0 6px transparent",
      //   backgroundColor: theme.palette.background.default,
      // },
      // "*::-webkit-scrollbar-thumb": {
      //   backgroundColor: theme.palette.divider,
      //   outline: "1px solid transparent",
      //   borderRadius: 4,
      //   width: 4,
      // },

      // Setting the color scheme
      ":root": {
        colorScheme: "mode",
      },

      // Styling body
      body: {
        ...(theme.palette.mode === "dark" ? darkScrollbar() : {}),
        backgroundColor: theme.palette.background.default,
        margin: 0,
      },

      // Height adjustment
      "html, body, #__next": {
        height: "100%",
      },
    }),
  },
  MuiInputBase: {
    styleOverrides: {
      input: ({ theme }) => ({
        // removing autofill color
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset !important`,
          WebkitTextFillColor: `${theme.palette.text.primary} !important`,
        },
      }),
    },
  },
  MuiCircularProgress: {
    defaultProps: {
      size: 26,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
      disableRipple: true,
      disableFocusRipple: true,
      disableTouchRipple: true,
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "p",
        subtitle2: "p",
        body1: "p",
        body2: "p",
      },
    },
  },
};

const breakpoints: ThemeOptions["breakpoints"] = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  unit: "px",
};

const grey: PaletteOptions["grey"] = {
  "50": "#fafafa",
  "100": "#f5f5f5",
  "200": "#eeeeee",
  "300": "#e0e0e0",
  "400": "#bdbdbd",
  "500": "#9e9e9e",
  "600": "#757575",
  "700": "#616161",
  "800": "#424242",
  "900": "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
};

const shadows: ThemeOptions["shadows"] = [
  "none",
  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
  "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
  "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
  "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
  "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
  "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
  "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
  "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
  "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
  "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
  "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
  "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
  "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
  "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
  "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
  "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
];

const zIndex: ThemeOptions["zIndex"] = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

const typography: ThemeOptions["typography"] = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: 48,
    fontWeight: 800,
  },
  h2: {
    fontSize: 38,
    fontWeight: 700,
  },
  h3: {
    fontSize: 26,
    fontWeight: 700,
  },
  h4: {
    fontSize: 22,
    fontWeight: 600,
  },
  h5: {
    fontSize: 20,
    fontWeight: 600,
  },
  h6: {
    fontSize: 18,
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 500,
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    textTransform: "inherit",
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
  },
  overline: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: "16px",
  },
};

export const baseTheme: ThemeOptions = {
  breakpoints,
  palette: { grey },
  components,
  shadows,
  typography,
  zIndex,
};
