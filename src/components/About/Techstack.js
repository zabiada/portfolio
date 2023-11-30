import React from "react";
import { div, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div xs={4} md={2} className="tech-icons">
        C & C++
      </div>
      <div xs={4} md={2} className="tech-icons">
      HTML/CSS/Js/Bootstrap/Php
      </div>
      <div xs={4} md={2} className="tech-icons">
        ReactJS
      </div>
      <div xs={1} md={2} className="tech-icons">
        Microsoft Office programs
      </div>
      <div xs={1} md={2} className="tech-icons">
        Test
      </div>

      <div xs={6} md={2} className="tech-icons">
        Typing: Pashto, Dari, English
      </div>

      <div xs={4} md={2} className="tech-icons">
        Multimedia
      </div>
      <div xs={4} md={2} className="tech-icons">
        Adobe Audition
      </div>
      <div xs={1} md={2} className="tech-icons">
        Hardware, Networking
      </div>
      <div xs={4} md={2} className="tech-icons">
        Internet
      </div>
      <div xs={1} md={2} className="tech-icons">
        Professional with Windows (XP, 7, 8, 10)
      </div>
      <div xs={1} md={2} className="tech-icons">
        Proficient with MS Word, Excel, Power Point.
      </div>
      <div xs={1} md={2} className="tech-icons">
        Documents Skills
      </div>
      <div xs={1} md={2} className="tech-icons">
        Microsoft Office programs
      </div>
      <div xs={1} md={2} className="tech-icons">
        Internet, Social Media, E-Mail
      </div>

      <div xs={1} md={2} className="tech-icons">
        Typing: Pashto, Dari, English
      </div>
    </Row>
  );
}

export default Techstack;
