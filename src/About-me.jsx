import React from "react";
import { Card } from "semantic-ui-react";
import "./About-me.css";

function AboutMe() {
  return (
    <section id="about-me" className="about-me-container">
      <Card className="card-content-container">
        <h2>About me</h2>
        <ul>
          <li>
            Diverse experience in software development (web and mobile
            applications)
          </li>
          <li>
            Expertise in user interaction design; user experience oriented
          </li>
          <li>
            Data analytics for large scale dataset; data visualization focused
          </li>
        </ul>
      </Card>
    </section>
  );
}

export default AboutMe;
