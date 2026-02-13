import MergePdf from "../components/MergePdf";
import "./home.css";

const Home = () => {
  return (
    <>
      <div id="project">
        <div id="header">Projeto PDF</div>
        <div id="body"></div>
        <div id="mergePDF">
          <MergePdf />
        </div>
      </div>
    </>
  );
};

export default Home;
