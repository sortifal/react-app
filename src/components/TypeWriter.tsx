import { useState, useEffect } from 'react';

interface Props {
  text: string;
  delay: number;
}

function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const Typewriter = ({ text, delay }: Props) => {
  const [currentText, setCurrentText] = useState('|');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDirection, setCurrentDirection] = useState<boolean>(true);
  const [currentSpeed, setCurrentSpeed] = useState(delay);

  useEffect(() => {
    if (currentDirection) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText.replace('|', text[currentIndex]) + '|'
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, currentSpeed);
        setCurrentSpeed(delay * getRandomFloat(0.25, 2));
        return () => clearTimeout(timeout);
      } else {
        const changeDirection = setTimeout(() => {
          setCurrentDirection((prev) => !prev);
        }, 1000);
        return () => clearTimeout(changeDirection);
      }
    } else {
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText.slice(0, -2) + '|');
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, delay / 2);

        return () => clearTimeout(timeout);
      } else {
        const changeDirection = setTimeout(() => {
          setCurrentDirection((prev) => !prev);
        }, 1000);
        return () => clearTimeout(changeDirection);
      }
    }
  }, [currentDirection, currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
