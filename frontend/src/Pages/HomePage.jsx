import React, { useState } from "react";
import "../styles/HomePage.css";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cqenfdk",
        "template_8lzgsae",
        e.target,
        "8vALFIyST5QuvqPO7"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const skills = [
    { src: "./src/assets/react.svg", alt: "React.js", name: "React.js" },
    { src: "./src/assets/nodejs.png", alt: "Node.js", name: "Node.js" },
    { src: "./src/assets/mongodb.png", alt: "MongoDB", name: "MongoDB" },
    {
      src: "./src/assets/expressjs.svg",
      alt: "Express.js",
      name: "Express.js",
    },
    { src: "./src/assets/html.png", alt: "HTML", name: "HTML" },
    { src: "./src/assets/css.png", alt: "CSS", name: "CSS" },
    { src: "./src/assets/JS.png", alt: "JavaScript", name: "JavaScript" },
    { src: "./src/assets/python.png", alt: "Python", name: "Python" },
    { src: "./src/assets/vscode.png", alt: "VS Code", name: "VS Code" },
    { src: "./src/assets/eclipse.png", alt: "Eclipse", name: "Eclipse" },
    { src: "./src/assets/pycharm.png", alt: "PyCharm", name: "PyCharm" },
    { src: "./src/assets/intellij.png", alt: "IntelliJ", name: "IntelliJ" },
    { src: "./src/assets/apache.png", alt: "Apache", name: "Apache Tomcat" },
    { src: "./src/assets/rest.png", alt: "REST", name: "RESTful API" },
    {
      src: "./src/assets/codeblocks.png",
      alt: "Code Blocks",
      name: "Code Blocks",
    },
    {
      src: "./src/assets/bootstrap.png",
      alt: "BootStrap",
      name: "BootStrap",
    },
    {
      src: "./src/assets/tailwind.png",
      alt: "TailWind",
      name: "TailWind CSS",
    },
    {
      src: "./src/assets/canva.png",
      alt: "Canva",
      name: "Canva",
    },
  ];

  const SkillsLoop = () => (
    <div className="skills" style={{ padding: "40px 20px" }}>
      <h2>Skills</h2>
      <p>Here are some of the technologies and tools I excel at:</p>
      <div className="scroll-container">
        <div className="scroll-content">
          {skills.map((tech, index) => (
            <div key={index} className="card">
              <img src={tech.src} alt={tech.alt} />
              <h3 style={{ fontSize: "18px", marginTop: "10px" }}>
                {tech.name}
              </h3>
            </div>
          ))}
          {skills.map((tech, index) => (
            <div key={`duplicate-${index}`} className="card">
              <img src={tech.src} alt={tech.alt} />
              <h3 style={{ fontSize: "18px", marginTop: "10px" }}>
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  return (
    <div className="home">
      <header>
        <div className="header-container">
          <div className="logo">LL</div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="intro" className="intro">
        <div className="intro-content">
          <div className="intro-text">
            <h1>Hello,</h1>
            <h1>I'm Lungsom Lamnio</h1>
            <p>Code Dreams to Reality!</p>
            <h2>Web Developer | MERN STACK</h2>
            <div className="social-links">
              <a
                href="https://github.com/LungsomLamnio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lungsom-lamnio-339914282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/lungsom.lamnio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://x.com/lungsom_lamnio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100036725803105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="intro-graphic">
            <div className="placeholder-design">
              <p>Add your creative designs here!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills" style={{ padding: "40px 20px" }}>
        <SkillsLoop />
      </section>

      <section
        id="experience"
        className="experience"
        style={{ padding: "40px 20px" }}
      >
        <h2>Experience</h2>
        <p>Here are some of the positions I have held:</p>
        <div style={containerStyle}>
          <div style={cardStyle} className="card">
            <h3>Software Developer | ABC Corp</h3>
            <p>Jan 2023 - Present</p>
            <ul>
              <li>
                Developing and maintaining web applications using React and
                Node.js
              </li>
              <li>
                Collaborating with teams to ensure seamless integration of
                systems
              </li>
              <li>
                Participating in code reviews and optimizing existing
                applications
              </li>
            </ul>
          </div>
          <div style={cardStyle} className="card">
            <h3>Web Developer Intern | XYZ Ltd</h3>
            <p>Jun 2022 - Dec 2022</p>
            <ul>
              <li>
                Assisted in building and testing frontend features using HTML,
                CSS, and JavaScript
              </li>
              <li>
                Contributed to backend development with Node.js and MongoDB
              </li>
              <li>Created documentation for new features and improvements</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="projects"
        style={{ padding: "40px 20px" }}
      >
        <h2>Projects</h2>
        <div style={containerStyle}>
          <div style={cardStyle} className="card">
            <h3>Project 1</h3>
            <p>A short description of your first project.</p>
          </div>
          <div style={cardStyle} className="card">
            <h3>Project 2</h3>
            <p>A short description of your second project.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </section>

      <footer>
        <p>© 2025 LL. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
