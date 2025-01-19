'use client';
import { useEffect, useState, useRef } from "react";

const TypingEffect = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const textRef = useRef(text);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = indexRef.current;
      if (currentIndex < textRef.current.length) {
        setDisplayedText((prevText) => prevText + textRef.current[currentIndex]);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <p className={className} dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypingEffect;
