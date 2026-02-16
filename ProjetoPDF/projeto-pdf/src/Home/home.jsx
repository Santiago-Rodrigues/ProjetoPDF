import { useState } from "react";
import { ButtonLine } from "../components/ButtonLine";
import MergePdf from "../components/MergePdf";
import "./home.css";
import { SplitPdf } from "../components/SplitPdf";

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
          {isVisible === 2 && <SplitPdf/>}
          {isVisible === 3 && "Converter"}
        </div>
      </div>
    </>
  );
};

export default Home;
