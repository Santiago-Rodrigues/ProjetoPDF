import { CButton, CForm, CFormInput } from "@coreui/react";
import { useState } from "react";

const MergePdf = () => {
  const [pdfFiles, setPdfFiles] = useState(null)
  const handleFileChange = (e) => {
    setPdfFiles(e.target.files)
}
console.log(pdfFiles)

  const handleMerge = async () => {
    if (!pdfFiles || pdfFiles.length === 0) {
        alert('Selecione arquivos para mesclar')
        return 
      }

    const newPdf = await window.PDFLib.PDFDocument.create()
    for(const file of pdfFiles) {
        const bytes = await file.arrayBuffer()
        const pdf = await window.PDFLib.PDFDocument.load(bytes)
        const copiedPages = await newPdf.copyPages(pdf, pdf.getPageIndices())
        copiedPages.forEach((page) => {
            newPdf.addPage(page)
        })
    }
    const mergeBytes = await newPdf.save()

    const blob = new Blob([mergeBytes], {type: 'application/pdf'})

    const link = document.createElement('a')

    link.href = URL.createObjectURL(blob)

    link.download = 'PDF_Mesclado.pdf'

    link.click()
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
