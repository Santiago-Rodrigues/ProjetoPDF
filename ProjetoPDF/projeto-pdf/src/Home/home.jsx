import { useState } from "react";
import { ButtonLine } from "../components/ButtonLine";
import MergePdf from "../components/MergePdf";
import "./home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(0);
  return (
    <>
      <div id="project">
        <div id="header">PDF</div>
        <div id="body">
          <ButtonLine handleChange={setIsVisible} />
        </div>
        <div id="mergePDF">
          {isVisible === 1 && <MergePdf />}
          {isVisible === 2 && "Converter PDF"}
          {isVisible === 3 && "Separar PDF"}
        </div>
      </div>
    </>
  );
};

export default Home;
