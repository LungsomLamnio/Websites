import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  // Fetch message from the backend API
  useEffect(() => {
    fetch("/api/hello") // This will be forwarded to http://localhost:8080/api/hello by Vite's proxy
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div className="App">
      <h1>Frontend and Backend Connection</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
