// import { PaletteMode, Shadows, createTheme } from "@mui/material";

// export const theme = createTheme({
//   palette: {
//     mode: localStorage.getItem("theme") as PaletteMode,
//     primary: {
//       main: "#0551da",
//       light: "#f2f7fd",
//     },
//     secondary: {
//       main: "#8590b9",
//     },
//     background: {
//       paper:
//         (localStorage.getItem("theme") as PaletteMode) === "dark"
//           ? "#171717"
//           : "#f2f7fd",
//     },
//   },
//   typography: {
//     fontFamily: `'Kanit', sans-serif`,
//     h1: {
//       fontSize: "36px",
//       fontWeight: "bold",
//     },
//     h2: {
//       fontSize: "24px",
//       fontWeight: "semibold",
//     },
//     h3: {
//       fontSize: "18px",
//       fontWeight: "500",
//     },
//     body1: {
//       fontSize: "16px",
//     },
//     body2: {
//       fontSize: "16px",
//       fontWeight: "500",
//     },
//   },

//   shadows: Array(25)
//     .fill("")
//     .map((_, index) =>
//       index === 1
//         ? "0px 1px 4px 0px rgba(0, 0, 0, 0.25)"
//         : index === 2
//         ? "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
//         : index === 3
//         ? "0px 2px 9px 0px rgba(0, 0, 0, 0.2)"
//         : ""
//     ) as Shadows,
//   components: {
//     MuiContainer: {
//       defaultProps: {
//         maxWidth: "xl",
//       },
//     },
//   },
// });
import { PaletteMode, Shadows } from "@mui/material";

const theme = {};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode: mode,
    primary: {
      main: "#0551da",
      light: "#f2f7fd",
    },
    secondary: {
      main: "#8590b9",
    },
    background: {
      paper: mode === "dark" ? "#171717" : "#f2f7fd",
    },
  },
  typography: {
    fontFamily: `'Vazirmatn', sans-serif`,
    h1: {
      fontSize: "36px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "semibold",
    },
    h3: {
      fontSize: "18px",
      fontWeight: "500",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: "500",
    },
  },

  shadows: Array(25)
    .fill("")
    .map((_, index) =>
      index === 1
        ? "0px 1px 4px 0px rgba(0, 0, 0, 0.25)"
        : index === 2
        ? "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
        : index === 3
        ? "0px 2px 9px 0px rgba(0, 0, 0, 0.2)"
        : ""
    ) as Shadows,
});

export default theme;
