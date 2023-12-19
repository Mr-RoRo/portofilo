import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./Theme/ThemeContextProvider.tsx";
import ThemeRigestry from "./Theme/ThemeRigestry.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeContextProvider>
    <ThemeRigestry>
      <App />
    </ThemeRigestry>
  </ThemeContextProvider>

  // </React.StrictMode>,
);
