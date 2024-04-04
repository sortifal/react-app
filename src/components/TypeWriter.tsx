import React, { useState, useEffect } from 'react';

interface Props
{
    text: string,
    delay: number
}

const Typewriter = ({ text, delay } : Props) => {
  const [currentText, setCurrentText] = useState('|');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.replace('|', text[currentIndex]) + '|');
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;