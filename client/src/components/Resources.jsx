import React from "react";

const Resources = () => {
  return (
    <>
      <main>
        <section className="container">
          <h1 className="page-title">Helpful Resources</h1>
          <h4>Click on the card to be taken to reference web site.</h4>
          <section className="content">
            {/* Existing resources */}
            <h2>Windows Subsystem for Linux (WSL)</h2>
            <div className="card">
              <a
                href="https://docs.microsoft.com/en-us/windows/wsl/install"
                target="_blank"
              >
                <p>
                  <a
                    href="https://docs.microsoft.com/en-us/windows/wsl/install"
                    target="_blank"
                  >
                    Windows Subsystem for Linux (WSL) allows you to run a Linux
                    environment directly on Windows. By installing Ubuntu
                    through WSL, you can access Linux tools and utilities
                    seamlessly alongside your Windows applications.
                  </a>
                </p>
              </a>
            </div>

            <h2>Visual Studio Code (VS Code)</h2>
            <div className="card">
              <a href="https://code.visualstudio.com/" target="_blank">
                <p>
                  <a href="https://code.visualstudio.com/" target="_blank">
                    Visual Studio Code is a lightweight but powerful source code
                    editor which runs on your desktop and is available for
                    Windows, macOS and Linux. It comes with built-in support for
                    JavaScript, TypeScript and Node.js and has a rich ecosystem
                    of extensions for other languages and runtimes.
                  </a>
                </p>
              </a>
            </div>

            <h2>Sublime Text</h2>
            <div className="card">
              <a href="https://www.sublimetext.com/" target="_blank">
                <p>
                  <a href="https://www.sublimetext.com/" target="_blank">
                    Sublime Text is a sophisticated text editor for code,
                    markup, and prose. It offers a slick user interface along
                    with a host of features such as Goto Anything, multiple
                    selections, command palette, and more, making coding faster
                    and more efficient.{" "}
                  </a>{" "}
                </p>
              </a>
            </div>

            <h2>Chrome DevTools</h2>
            <div className="card">
              <p>
                <a
                  href="https://developer.chrome.com/docs/devtools"
                  target="_blank"
                >
                  Chrome DevTools is a set of web developer tools built into the
                  Google Chrome browser, providing various features for
                  debugging and optimizing web pages.Chrome DevTools
                  Documentation: Provides detailed documentation and guides on
                  using Chrome DevTools for web development tasks.
                </a>
              </p>
            </div>

            <h2>HTML</h2>
            <div className="card">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                  >
                    HTML (HyperText Markup Language) is the standard markup
                    language for creating web pages. You can learn HTML from the
                    Mozilla Developer Network (MDN) documentation.
                  </a>
                </p>
              </a>
            </div>

            <h2>CSS</h2>
            <div className="card">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    {" "}
                    CSS (Cascading Style Sheets) is a style sheet language used
                    for describing the presentation of a document written in
                    HTML. You can learn CSS from the MDN documentation.
                  </a>
                </p>
              </a>
            </div>

            <h2>JavaScript</h2>
            <div className="card">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    JavaScript is a programming language that enables you to
                    create dynamically updating content, control multimedia,
                    animate images, and much more. You can learn JavaScript from
                    the MDN documentation.
                  </a>
                </p>
              </a>
            </div>
            <h2>Lorem Ipsum and Picture Ipsum</h2>
            <div className="card">
              <p>
              Lorem Ipsum is commonly used as placeholder text in web development to simulate the appearance of written content without distracting the viewer with meaningful text. It allows designers and developers to focus solely on the layout and design aspects of a webpage. Similarly, Picture Ipsum serves the same purpose but with images, enabling designers to visualize how images will fit into the layout before finalizing the actual content.
              </p>
              <p>
                <a href="https://baconipsum.com/" target="_blank">
                Bacon Ipsum :Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
                </a>
              </p>
              <p>
                <a href="https://hipsum.co/" target="_blank">
                  Hipsum: Ipsum the Hipster way!.
                </a>
              </p>
              <p>
                <a href="https://loremipsum.io/" target="_blank">
                 Lorem Ipsum : Classic Lorem Ipsum from the best!
                </a>
              </p>
              <p>
                <a href="https://picsum.photos/" target="_blank">
                  Lorem Picsum: Placeholder images.
                </a>
              </p>
            </div>

            <h2>npm</h2>
            <div className="card">
              <a href="https://docs.npmjs.com/" target="_blank">
                <p>
                  {" "}
                  <a href="https://docs.npmjs.com/" target="_blank">
                    npm (Node Package Manager) is the default package manager
                    for the JavaScript runtime environment Node.js. It's an
                    indispensable tool for modern web development. Learn more
                    about npm from the official npm documentation.
                  </a>
                </p>
              </a>
            </div>

            <h2>Morgan</h2>
            <div className="card">
              <a href="https://github.com/expressjs/morgan" target="_blank">
                <p>
                  <a href="https://github.com/expressjs/morgan" target="_blank">
                    {" "}
                    Morgan is a popular HTTP request logger middleware for
                    Node.js, perfect for monitoring requests during development.
                    Find documentation and usage information onGitHub.
                  </a>
                </p>
              </a>
            </div>

            <h2>dotenv</h2>
            <div className="card">
              <a href="https://github.com/motdotla/dotenv" target="_blank">
                <p>
                  <a href="https://github.com/motdotla/dotenv" target="_blank">
                    {" "}
                    dotenv is a module that loads environment variables from a
                    .env file into process.env, simplifying the management of
                    configuration settings. Documentation and usage information
                    are available on GitHub
                  </a>
                </p>
              </a>
            </div>

            <h2>UUID</h2>
            <div className="card">
              <a href="https://www.npmjs.com/package/uuid" target="_blank">
                <p>
                  <a href="https://www.npmjs.com/package/uuid" target="_blank">
                    UUID (Universally Unique Identifier) provides a way to
                    generate unique identifiers, essential for ensuring data
                    uniqueness across components. Documentation is available on
                    npm
                  </a>
                  .
                </p>
              </a>
            </div>

            <h2>Git</h2>
            <div className="card">
              <a href="https://git-scm.com/documentation" target="_blank">
                <p>
                  {" "}
                  <a href="https://git-scm.com/documentation" target="_blank">
                    Git is the backbone of version control for developers,
                    allowing you to track and manage code changes.{" "}
                  </a>
                </p>
              </a>
            </div>

            <h2>GitHub</h2>
            <div className="card">
              <a href="https://docs.github.com/en" target="_blank">
                <p>
                  {" "}
                  <a href="https://docs.github.com/en" target="_blank">
                    GitHub extends Git's capabilities with online hosting,
                    making it easier to collaborate on projects.{" "}
                  </a>
                </p>
              </a>
            </div>

            <h2>Netlify</h2>
            <div className="card">
              <a href="https://docs.netlify.com/" target="_blank">
                <p>
                  <a href="https://docs.netlify.com/" target="_blank">
                    Netlify offers hosting and serverless backend services for
                    static websites and web applications with continuous
                    deployment from Git across all of Netlify’s CDN.{" "}
                  </a>
                </p>
              </a>
            </div>

            <h2>Render</h2>
            <div className="card">
              <a href="https://render.com/docs" target="_blank">
                <p>
                  <a href="https://render.com/docs" target="_blank">
                    Render is a comprehensive cloud platform offering a range of
                    services from static site hosting to PostgreSQL databases,
                    emphasizing ease of use and automation. Documentation is
                    available on{" "}
                  </a>
                </p>
              </a>
            </div>

            <h2>JSON</h2>
            <div className="card">
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/JSON"
                target="_blank"
              >
                <p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/JSON"
                    target="_blank"
                  >
                    JSON (JavaScript Object Notation) is a lightweight data
                    interchange format commonly used in web development for
                    transmitting data between a server and a web application.
                    It's human-readable and easy for both humans and machines to
                    understand.Mozilla Developer Network (MDN) - JSON: Provides
                    detailed information and documentation about JSON.
                  </a>
                </p>
              </a>
            </div>

            <h2>APIs</h2>
            <div className="card">
              <p>
                APIs (Application Programming Interfaces) are tools that enable
                different software applications to communicate with each other,
                allowing them to exchange data and functionality.
              </p>
              <p>
                <a href="https://www.postman.com/" target="_blank">
                  Postman: A platform for API development that allows developers
                  to design, test, and document APIs easily.
                </a>
              </p>
              <p>
                <a href="https://insomnia.rest/" target="_blank">
                  Insomnia: An open-source API testing platform that provides a
                  user-friendly interface for debugging, testing, and sharing
                  APIs.
                </a>
              </p>
            </div>

            <h2>Mind Mapping</h2>
            <div className="card">
              <a href="https://www.mindmup.com/" target="_blank">
                <p>
                  <a href="https://www.mindmup.com/" target="_blank">
                    Mind mapping is a technique used to visually organize
                    information, ideas, and concepts, helping users to
                    brainstorm, plan, and manage projects effectively. MindMup:
                    An online tool for creating mind maps that offers a simple
                    and intuitive interface for organizing and visualizing
                    thoughts and ideas.
                  </a>
                </p>
              </a>
            </div>

            <h2>Wireframing</h2>
            <div className="card">
              <a href="https://wireframe.cc/" target="_blank">
                <p>
                  <a href="https://wireframe.cc/" target="_blank">
                    {" "}
                    Wireframing involves creating basic visual representations
                    (wireframes) of web pages or applications to outline their
                    structure and layout.Wireframe.cc: An online tool for
                    creating wireframes with a minimalist interface, making it
                    easy for designers and developers to sketch out website
                    layouts quickly.
                  </a>
                </p>
              </a>
            </div>

            <h2>Minimum Viable Product (MVP)</h2>
            <div className="card">
              <a
                href="https://en.wikipedia.org/wiki/Minimum_viable_product"
                target="_blank"
              >
                <p>
                  <a
                    href="https://en.wikipedia.org/wiki/Minimum_viable_product"
                    target="_blank"
                  >
                    A Minimum Viable Product (MVP) is a version of a product
                    with the minimum features required to gather feedback and
                    validate assumptions before full-scale development.Wikipedia
                    - Minimum Viable Product: Provides an overview and detailed
                    information about Minimum Viable Products.
                  </a>
                </p>
              </a>
            </div>

            <h2>Testing</h2>
            <div className="card">
              <p>
                Testing frameworks are tools used by developers to write and run
                tests for their code to ensure its functionality and
                reliability.
              </p>
              <p>
                <a href="https://jestjs.io/" target="_blank">
                  Jest: A JavaScript testing framework designed for simplicity
                  and ease of use.
                </a>
              </p>
              <p>
                <a href="https://mochajs.org/" target="_blank">
                  Mocha: A feature-rich JavaScript test framework that runs on
                  Node.js and in the browser.
                </a>
              </p>
              <p>
                <a href="https://www.chaijs.com/" target="_blank">
                  Chai: A BDD/TDD assertion library for Node.js and browsers
                  that can be paired with any JavaScript testing framework.
                </a>
              </p>
            </div>

            <h2>Design Tools</h2>
            <div className="card">
              <p>
                Design tools are software applications used by designers to
                create and prototype user interfaces and graphics.
              </p>
              <p>
                <a href="https://www.figma.com/" target="_blank">
                  Figma: A collaborative interface design tool that allows teams
                  to design, prototype, and collaborate in real-time.
                </a>
              </p>
              <p>
                <a href="https://coolors.co/" target="_blank">
                  Coolors: A color scheme generator that helps designers
                  discover and create beautiful color palettes for their
                  projects.
                </a>
              </p>
            </div>

            <h2>Favicons</h2>
            <div className="card">
              <p>
                <a href="https://favicon.io/" target="_blank">
                  Favicons are small icons displayed in the browser tab and
                  bookmarks bar to represent a website.Favicon.io: An online
                  tool for generating favicons from images or text, allowing
                  website owners to customize their site's favicon easily.
                </a>
              </p>
            </div>

            {/* Add more resources as needed */}
          </section>
        </section>
      </main>
    </>
  );
};

export default Resources;
