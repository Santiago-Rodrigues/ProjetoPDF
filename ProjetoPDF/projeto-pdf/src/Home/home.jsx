import { useState } from "react";
import { ButtonLine } from "../components/ButtonLine";
import MergePdf from "../components/MergePdf";
import "./home.css";
import { SplitPdf } from "../components/SplitPdf";
import { ImageToPdf } from "../components/ImageToPdf";

const Home = () => {
  const [isVisible, setIsVisible] = useState(0);
  return (
    <>
      <div id="project">
        <div id="header">PDF Tools</div>
        <div id="body">
          <ButtonLine handleChange={setIsVisible} />
        </div>
        <div id="functionPDF">
          {isVisible === 1 && <MergePdf />}
          {isVisible === 2 && <SplitPdf />}
          {isVisible === 3 && <ImageToPdf />}
        </div>
      </div>
      <div id="footer"
        style={{
          display: 'flex',
          justifyContent:'space-between',
          position: "fixed",
          color: "white",
        }}
      >
        <h6>Created by: Santiago Rodrigues</h6>
        <a target="_blank" href="https://www.linkedin.com/in/santiago-silva-rodrigues">LinkedIn</a>
      </div>
    </>
  );
};

export default Home;
