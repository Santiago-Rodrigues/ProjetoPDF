import { CButton } from "@coreui/react";

export const ButtonLine = ({ handleChange }) => {
  return (
    <>
      <h3>Escolha sua opção</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          flexWrap: "wrap",
          margin: 50,
          gap: "12px",
          justifyContent: "center",
        }}
      >
        <CButton color="secondary" onClick={() => handleChange(1)}>
          Mesclar PDF
        </CButton>
        <CButton color="secondary" onClick={() => handleChange(2)}>
          Separar PDF
        </CButton>
        <CButton color="secondary" onClick={() => handleChange(3)}>
          Converter PDF
        </CButton>
      </div>
    </>
  );
};
