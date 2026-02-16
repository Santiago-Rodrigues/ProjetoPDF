import { CButton } from "@coreui/react";
import { useState } from "react";

export const ButtonLine = ({handleChange}) => {
  const [isVisible, setIsVisible] = useState(0);

  return (
    <>
      <h3>Escolha sua opção</h3>
      <div
        style={{
          display: "flex",
          margin: "50px",
          justifyContent: "space-evenly",
        }}
      >
        <CButton onClick={() => handleChange(1)}>Converter PDF</CButton>
        <CButton onClick={() => handleChange(2)}>Mesclar PDF</CButton>
        <CButton onClick={() => handleChange(3)}>Separar PDF</CButton>
      </div>
    </>
  );
};
