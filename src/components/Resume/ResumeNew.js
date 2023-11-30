import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume1 from "../../Assets/Projects/Resume1.png";
import resume2 from "../../Assets/Projects/Resume2.png";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{ display: "flex", flexDirection: "column", width: "80vw" }}
      >
        <img src={resume1}></img>
        <img src={resume2}></img>
      </Container>
    </div>
  );
}

export default ResumeNew;
