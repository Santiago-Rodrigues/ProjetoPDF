import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home/home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./index.css";
import backgroundVideo from "./assets/background.mp4";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <video src={backgroundVideo} 
    autoPlay muted loop playsInline 
    />
    <Home />
  </StrictMode>,
);
