import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "MERN STACK"], // The words to be typed
      typeSpeed: 50, // Speed of typing
      backSpeed: 50, // Speed of erasing
      backDelay: 1000, // Delay before erasing starts
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop the typing effect
      showCursor: true, // Show typing cursor
    };

    const typed = new Typed("#element", options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span id="element"></span>
    </div>
  );
};

export default TypingEffect;
