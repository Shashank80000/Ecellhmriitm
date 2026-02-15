import { useEffect, useRef, useState } from 'react';
import './DecryptedText.css';

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 8,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  revealDirection = 'start',
  sequential = false,
  useOriginalCharsOnly = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const intervalRef = useRef(null);

  const getRandomChar = (originalChar) => {
    if (useOriginalCharsOnly && originalChar !== ' ') {
      return originalChar;
    }
    if (originalChar === ' ') return ' ';
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const decrypt = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const textLength = text.length;
    const indices = revealDirection === 'start' 
      ? Array.from({ length: textLength }, (_, i) => i)
      : Array.from({ length: textLength }, (_, i) => textLength - 1 - i);

    intervalRef.current = setInterval(() => {
      setDisplayText((current) => {
        return text
          .split('')
          .map((char, index) => {
            const revealThreshold = sequential 
              ? Math.floor((iteration / maxIterations) * textLength)
              : textLength;

            const shouldReveal = revealDirection === 'start'
              ? index < revealThreshold
              : index >= textLength - revealThreshold;

            if (shouldReveal || iteration >= maxIterations) {
              return char;
            }

            return getRandomChar(char);
          })
          .join('');
      });

      iteration++;

      if (iteration > maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsAnimating(false);
        if (animateOn === 'view') {
          setHasAnimated(true);
        }
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view' && !hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              decrypt();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [animateOn, hasAnimated]);

  useEffect(() => {
    if (animateOn === 'view' && !hasAnimated) {
      setDisplayText(
        text
          .split('')
          .map((char) => (char === ' ' ? ' ' : getRandomChar(char)))
          .join('')
      );
    }
  }, []);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      decrypt();
    }
  };

  return (
    <span
      ref={elementRef}
      className={`decrypted-text ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
    >
      <span className={`decrypted-text__content ${className} ${isAnimating ? encryptedClassName : ''}`}>
        {displayText}
      </span>
    </span>
  );
};

export default DecryptedText;
