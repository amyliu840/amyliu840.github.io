import React from "react";
import {
  Header,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from "semantic-ui-react";
import "./Project.css";

function Project() {
  return (
    <section id="project" className="project-container">
      <h2>Projects</h2>
      <Card>
        <Image src="./search.jpg" width="300" wrapped ui={false} />
        <CardContent>
          <CardHeader>GitHub User Search</CardHeader>
          <CardDescription>
            <a href="https://amyliu840.github.io/github-user-search/">
              <Header as="h4" color="blue">
                Project Link
              </Header>
            </a>
          </CardDescription>
        </CardContent>
      </Card>
      <br />
      <Card>
        <Image src="./car.jpg" width="300" wrapped ui={false} />
        <CardContent>
          <CardHeader>Car Dealer App</CardHeader>
          <CardDescription>
            <a
              href="https://github.com/amyliu840/car-dealer-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header as="h4" color="blue">
                Project Github Link
              </Header>
            </a>
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}

export default Project;
