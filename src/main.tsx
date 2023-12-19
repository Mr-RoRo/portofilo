import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "./Theme/Theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider theme={Theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>
  // </React.StrictMode>,
);
