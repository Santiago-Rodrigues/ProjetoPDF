import { CButton, CFormInput } from "@coreui/react";
import { useState } from "react";

export const ImageToPdf = () => {
  const [imageFiles, setImageFiles] = useState(null);

  const handleFileChange = (e) => {
    setImageFiles(e.target.files);
  };
  const handleConvert = async () => {
    if (!imageFiles || imageFiles.length === 0) {
      alert("Por favor, selecione pelo menos uma imagem (JPG ou PNG)!");
      return;
    }
    const pdfDoc = await window.PDFLib.PDFDocument.create();
    for (const file of imageFiles) {
      const imageBytes = await file.arrayBuffer();
      let pdfImage;
      if (file.type === "image/jpeg" || file.type === "image/jpg") {
        pdfImage = await pdfDoc.embedJpg(imageBytes);
      } else if (file.type === "image/png") {
        pdfImage = await pdfDoc.embedPng(imageBytes);
      } else {
        alert(`O arquivo ${file.name} não é uma imagem válida`);
        continue;
      }
      const { width, height } = pdfImage.scale(1);

      const page = pdfDoc.addPage([width, height]);

      page.drawImage(pdfImage, {
        x: 0,
        y: 0,
        width: width,
        height: height,
      });
    }

    const finalBytes = await pdfDoc.save();
    const blob = new Blob([finalBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Imagens_Convertidas.pdf";
    link.click();
  };
  return (
    <>
      <CFormInput
        type="file"
        accept="image/jpeg, image/png"
        multiple
        className="w-auto m-2"
        onChange={handleFileChange}
      />
      <CButton className="m-2" color="secondary" onClick={handleConvert}>
        Converter para PDF
      </CButton>
    </>
  );
};
