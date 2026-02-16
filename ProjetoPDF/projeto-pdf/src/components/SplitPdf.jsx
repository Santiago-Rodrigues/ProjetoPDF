import { useState } from "react"


const SplitPdf = () => {
    const [pdfFile, setPdfFile] = useState(null)
    const [startPage, setStarPage] = useState('')
    const [endPage, setEndPage] = useState('')

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0])
    }

    const handleSplit = async () => {
        return ''
    }
}