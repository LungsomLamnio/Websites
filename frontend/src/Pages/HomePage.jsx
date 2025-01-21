import React from "react";
import "../styles/HomePage.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header with navigation links */}
      <header className="hero">
        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
        <h1>Welcome to My Portfolio</h1>
        <p>Your one-stop destination to learn about my projects and skills.</p>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate web developer specializing in
          React.js and Node.js.
        </p>
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

      {/* Footer */}
      <footer>
        <p>© 2025 [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
