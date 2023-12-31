import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./ThemeContextProvider";
const ThemeRigestry = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRigestry;
