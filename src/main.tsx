import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./theme/ThemeContextProvider.tsx";
import ThemeRigestry from "./theme/ThemeRigestry.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeContextProvider>
    <ThemeRigestry>
      <App />
    </ThemeRigestry>
  </ThemeContextProvider>

  // </React.StrictMode>,
);
