import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const TypewriterText = ({ text, delay = 80, className = '' }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span className={`${className} ${!isComplete ? 'typewriter-cursor' : ''}`}>
      {displayText}
    </span>
  );
};
