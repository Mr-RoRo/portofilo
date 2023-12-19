import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import { getDesignTokens } from "../Theme/theme";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>(
    localStorage.getItem("theme") as PaletteMode
  );

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  // const modifiedTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       ...theme,
  //       palette: {
  //         ...theme.palette,
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );
  localStorage.setItem("theme", mode);

  const modifiedTheme = React.useMemo(
    () =>
      createTheme(getDesignTokens(mode), {
        components: {
          MuiContainer: {
            defaultProps: {
              maxWidth: "xl",
            },
          },
        },
      }),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
