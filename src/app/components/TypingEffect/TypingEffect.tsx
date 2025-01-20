'use client';
import React, { useEffect, useState, useRef } from "react";

interface TypingEffectProps {
  text: string;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, className }) => {
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
        const nextChar = textRef.current[currentIndex];
        if (nextChar === "<") {
          // Handle the entire HTML tag
          const endOfTag = textRef.current.indexOf(">", currentIndex);
          if (endOfTag !== -1) {
            const fullTag = textRef.current.slice(currentIndex, endOfTag + 1);
            setDisplayedText((prevText) => prevText + fullTag);
            indexRef.current = endOfTag + 1;
          }
        } else {
          // Add regular characters
          setDisplayedText((prevText) => prevText + nextChar);
          indexRef.current += 1;
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <p className={className} dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypingEffect;