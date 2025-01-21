import React from "react";
import "../styles/HomePage.css";

const Home = () => {
  return (
    <div className="home">
      {/* Simple Header */}
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          {/* Logo */}
          <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>LL</div>

          {/* Navigation Links */}
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li style={{ margin: "0 15px" }}>
                <a
                  href="#skills"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Skills
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a
                  href="#experience"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Experience
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a
                  href="#projects"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Projects
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a
                  href="#blogs"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Blogs
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a
                  href="#contact"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <p>Here are some of the technologies and tools I excel at:</p>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <p>Details about my professional experience and roles.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>A short description of your first project.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>A short description of your second project.</p>
          </li>
        </ul>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="blogs">
        <h2>Blogs</h2>
        <p>Read my latest articles and posts here.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via the following channels:</p>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: +1234567890</li>
          <li>
            LinkedIn: <a href="https://linkedin.com">My LinkedIn</a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 LL. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
