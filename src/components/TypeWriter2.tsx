import { useEffect, useState } from 'react';

interface Props {
  delay: number;
  textList: string[];
}

function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const Typewriter2 = ({ textList, delay }: Props) => {
  const [currentText, setCurrentText] = useState('|');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDirection, setCurrentDirection] = useState<boolean>(true);
  const [currentSpeed, setCurrentSpeed] = useState(delay);
  const [activeText, setActiveText] = useState<number>(0);
  const [isLoopFinished, setIsLoopFinished] = useState<boolean>(false);

  useEffect(() => {
    isLoopFinished ? setActiveText((activeText + 1) % textList.length) : null;
  }, [isLoopFinished]);

  useEffect(() => {
    if (currentDirection) {
      setIsLoopFinished(false);
      if (currentIndex < textList[activeText].length) {
        console.log('going up');
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText) =>
              prevText.replace('|', textList[activeText][currentIndex]) + '|'
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, currentSpeed);
        setCurrentSpeed(delay * getRandomFloat(0.25, 2));
        return () => clearTimeout(timeout);
      } else {
        console.log('stopgoing up');
        const changeDirection = setTimeout(() => {
          console.log(currentDirection);
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
        setIsLoopFinished(true);

        return () => {
          clearTimeout(changeDirection);
        };
      }
    }
  }, [currentDirection, currentIndex, delay]);

  return <span>{currentText}</span>;
};

export default Typewriter2;
