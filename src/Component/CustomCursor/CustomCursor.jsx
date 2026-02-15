import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorTarget = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseDown = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.classList.add('cursor-dot--clicked');
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.classList.add('cursor-outline--clicked');
      }
    };

    const onMouseUp = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.classList.remove('cursor-dot--clicked');
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.classList.remove('cursor-outline--clicked');
      }
    };

    const animateOutline = () => {
      const dx = cursorTarget.current.x - outlinePos.current.x;
      const dy = cursorTarget.current.y - outlinePos.current.y;
      
      outlinePos.current.x += dx * 0.15;
      outlinePos.current.y += dy * 0.15;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = `${outlinePos.current.x}px`;
        cursorOutlineRef.current.style.top = `${outlinePos.current.y}px`;
      }

      requestAnimationFrame(animateOutline);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={cursorOutlineRef} className="cursor-outline" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
