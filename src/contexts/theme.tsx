import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store";
import type { ThemeType } from "theme";
import { createTheme } from "theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");
  const theme = useSelector((state: RootState) => state.app.theme);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <MuiThemeProvider theme={createTheme(currentTheme)}>
      {children}
    </MuiThemeProvider>
  );
};
