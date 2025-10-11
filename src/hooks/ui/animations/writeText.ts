import { useState, useEffect } from 'react';

const useTypeWriter = (text: string, speed: number = 30): string => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, speed, text]);

  return displayedText;
};

export default useTypeWriter;
