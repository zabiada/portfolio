import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zabiada Arman </span>
            from <span className="purple"> Heart , Afghanistan .</span>
            <br /> I am a computer science student at Heart university .
             and full stack student at code to inspire(cti).
            <br />
            Additionally, I am currently student  at  a web developer at
           WASSA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Study Books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zabiada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
