import React from "react";

import Navbar from "./Navbar";

const Planning = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <h1 className="page-title">Planning Tips</h1>
          <section className="content">
            {/* Problem Solving Process */}
            <h2>Code Problem Solving Process</h2>
            <div className="card">
              <h3>Understand the Problem:</h3>
              <p>Read carefully and identify the key components.</p>
              <p>
                Use resources like{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://stackoverflow.com/" target="_blank">
                    {" "}
                    Stack Overflow
                  </a>{" "}
                </p>{" "}
                <p>or</p>{" "}
                <p>
                  <label>Click here: </label>
                  <a
                    href="https://developer.mozilla.org/en-US/"
                    target="_blank"
                  >
                    {" "}
                    MDN Web Docs{" "}
                  </a>
                </p>{" "}
                to clarify doubts.
              </p>
              <h3>Plan:</h3>
              <p>
                {" "}
                Write pseudocode or create flowcharts to outline your solution.
                Tools like{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://www.lucidchart.com/pages" target="_blank">
                    {" "}
                    Lucidchart
                  </a>
                </p>
                <p>or</p>{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://www.drawio.com/" target="_blank">
                    {" "}
                    draw.io
                  </a>{" "}
                </p>{" "}
                can be very helpful for visual planning.
              </p>
              <h3>Execute:</h3>
              <p>
                {" "}
                Code with focus, using VS Code or Sublime Text for a better
                coding experience. Both editors support extensions and plugins
                that can facilitate your coding process.
              </p>
              <h3>Review:</h3>
              <p>
                Test your code thoroughly. Use Git for version control to manage
                changes and collaborate with others. GitHub offers actions and
                CI/CD workflows to automate your testing and deployment
                processes.
              </p>
            </div>

            {/* Project Proposal Preparation */}

            <h2>Project Planning and Proposal:</h2>
            <div className="card">
              <h3>Project Proposal:</h3>{" "}
              <p>
                Start with a clear and concise paragraph. Tools like Google Docs
                can be useful for drafting and sharing documents.
              </p>
              <h3>MVP Definition:</h3>
              <p>
                {" "}
                Define the scope of your MVP to ensure you have a focused and
                attainable goal.{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://trello.com/" target="_blank">
                    {" "}
                    Trello
                  </a>
                </p>{" "}
                <p>or</p>{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://asana.com/" target="_blank">
                    {" "}
                    Asana
                  </a>
                </p>{" "}
                can be used for project management and to track progress.{" "}
              </p>
              <h3>User Story Mapping:</h3>
              <p>
                {" "}
                Describe the user journey through your application to identify
                key features and functionalities. Tools like{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://storiesonboard.com/" target="_blank">
                    {" "}
                    StoriesOnBoard
                  </a>
                </p>{" "}
                can help visualize this process.{" "}
              </p>
              <h3>Mind Mapping:</h3>
              <p>
                {" "}
                Plan your application's architecture and components.{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://www.mindmeister.com/" target="_blank">
                    {" "}
                    MindMeister
                  </a>
                </p>{" "}
                <p>or</p>{" "}
                <p>
                  <label>Click here: </label>
                  <a href="https://coggle.it/" target="_blank">
                    {" "}
                    Coggle
                  </a>
                </p>{" "}
                are great tools for creating mind maps and visualizing your
                project structure.{" "}
              </p>
              <p>
                By following these guidelines and utilizing the suggested tools
                and resources, you can enhance your development workflow, from
                problem-solving to project planning and execution.
              </p>
            </div>

            {/* Agile and Scrum */}
            <h2>Agile and Scrum</h2>
            <div className="card">
              <p>
                Understanding Agile and Scrum is crucial for modern software
                development. These methodologies promote adaptive planning,
                evolutionary development, and flexibility.
                <p>
                  <label>Click here: </label>
                  <a href="https://agilemanifesto.org/" target="_blank">
                    {" "}
                    Learn more about Agile from the Agile Manifesto
                  </a>
                </p>{" "}
                <p></p>
                <label>Click here: </label>{" "}
                <a
                  href="https://www.scrum.org/resources/what-is-scrum"
                  target="_blank"
                >
                  {" "}
                  Scrum from Scrum.org
                </a>
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Planning;
