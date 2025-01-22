import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "../styles/HomePage.css";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  // Card style for skills/projects
  const cardStyle = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  return (
    <div className="home">
      {/* Header */}
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

      {/* Introduction */}
      <section id="intro" className="intro">
        <h1>Hello, I am Lungsom Lamnio</h1>
        <p>
          Welcome to my personal portfolio. Here you'll find more about my
          skills, experience, and projects.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills" style={{ padding: "40px 20px" }}>
        <h2>Skills</h2>
        <p>Here are some of the technologies and tools I excel at:</p>
        <div style={containerStyle}>
          <div style={cardStyle} className="card">
            <h3>React.js</h3>
            <p>Building dynamic, user-friendly interfaces.</p>
          </div>
          <div style={cardStyle} className="card">
            <h3>Node.js</h3>
            <p>Building scalable backend applications.</p>
          </div>
          <div style={cardStyle} className="card">
            <h3>MongoDB</h3>
            <p>Database management and NoSQL solutions.</p>
          </div>
          <div style={cardStyle} className="card">
            <h3>Express.js</h3>
            <p>Framework for building server-side applications.</p>
          </div>
          <div style={cardStyle} className="card">
            <h3>HTML, CSS, JavaScript</h3>
            <p>Core web technologies for front-end development.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

        {/* Contact Form */}
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

        {/* Status Message */}
        {status && <p className="status-message">{status}</p>}
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 LL. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
