import React, { useState, useEffect } from 'react';

const Text = () => {
  const [text, setText] = useState('');
  const message = "Welcome to the quiz. there is going to be a series of questions to test your knowledge in javascript. click on Start to begin. Good luck!";

  useEffect(() => {
    setTimeout(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= message.length) {
        setText(message.slice(0, currentIndex)+ "|");
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval to control the speed of appearance

    return () => clearInterval(interval);
    }, 500); // Adjust the delay to control the time before the text appears
  
  }, []);

  return (
    <p className="text-lg">
      {text}
    </p>
  );
};

export default Text;
