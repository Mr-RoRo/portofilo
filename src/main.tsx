import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./components/ThemeRegistry/ThemeContextProvider.tsx";
import ThemeRigestry from "./components/ThemeRegistry/ThemeRigestry.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeContextProvider>
    <ThemeRigestry>
      <App />
    </ThemeRigestry>
  </ThemeContextProvider>

  // </React.StrictMode>,
);
