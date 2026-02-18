import { CButton, CFormInput } from "@coreui/react";
import { useState } from "react";

export const SplitPdf = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [startPage, setStartPage] = useState("");
  const [endPage, setEndPage] = useState("");

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSplit = async () => {
    if (!pdfFile) {
      alert("Por favor, selecione um PDF");
      return;
    }
    if (
      !startPage ||
      !endPage ||
      startPage < 0 ||
      endPage < 0 ||
      endPage < startPage
    ) {
      alert("Por favor, informe um intervalo de páginas válido");
      return;
    }

    const start = parseInt(startPage, 10);
    const end = parseInt(endPage, 10);

    const bytes = await pdfFile.arrayBuffer();
    const originalPdf = await window.PDFLib.PDFDocument.load(bytes);
    const newPdf = await window.PDFLib.PDFDocument.create();

    const totalPages = originalPdf.getPageCount();
    if (end > totalPages) {
      alert(`Erro: O PDF possui apenas ${totalPages} páginas!`);
      return;
    }
    const numberPages = [];
    for (let i = start - 1; i < end; i++) {
      numberPages.push(i);
    }
    const extractedPages = await newPdf.copyPages(originalPdf, numberPages);
    extractedPages.forEach((page) => newPdf.addPage(page));

    const pdfBytes = await newPdf.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Paginas_${start}_ate_${end}.pdf`;
    link.click();
  };

  return (
    <>
      <CFormInput
        type="file"
        accept="application/pdf"
        className="w-auto m-2"
        onChange={handleFileChange}
      />

      <div className="d-flex gap-3 m-2">
        <CFormInput
          type="number"
          placeholder="Página inicial"
          value={startPage}
          style={{ width: "auto" }}
          onChange={(e) => {
            setStartPage(e.target.value);
          }}
        />
        <CFormInput
          type="number"
          placeholder="Página final"
          value={endPage}
          style={{ width: "auto" }}
          onChange={(e) => {
            setEndPage(e.target.value);
          }}
        />
      </div>

      <CButton className="m-2" color="secondary" onClick={handleSplit}>
        Extrair
      </CButton>
    </>
  );
};
