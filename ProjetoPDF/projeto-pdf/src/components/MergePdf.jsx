import { CButton, CForm, CFormInput } from "@coreui/react";
import { useState } from "react";

const MergePdf = () => {
  const [pdfFiles, setPdfFiles] = useState(null)
  const handleFileChange = (e) => {
    setPdfFiles(e.target.files)
}
console.log(pdfFiles)


  const handleMerge = async () => {
    console.log("")
  }
  return (
    <>
      <CFormInput
        type="file"
        id="pdf-file"
        name="pdf-file"
        accept="application/pdf"
        multiple
        className="w-auto"
        onChange={handleFileChange}
      />
      <br />
      <CButton onClick={handleMerge}>Mesclar</CButton>
    </>
  );
};

export default MergePdf;
