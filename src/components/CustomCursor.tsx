import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current && trailRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        trailRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.style.cursor = "none";

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => document.documentElement.classList.add("cursor-on-interactive"));
      el.addEventListener("mouseleave", () => document.documentElement.classList.remove("cursor-on-interactive"));
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "";

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => document.documentElement.classList.add("cursor-on-interactive"));
        el.removeEventListener("mouseleave", () => document.documentElement.classList.remove("cursor-on-interactive"));
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor bg-accent-blue mix-blend-difference pointer-events-none fixed top-0 left-0 rounded-full"
        style={{
          width: isClicking ? "20px" : "12px",
          height: isClicking ? "20px" : "12px",
          transition: "width 0.2s, height 0.2s, opacity 0.2s",
          zIndex: 50,
        }}
      />

      {/* Cursor Halo */}
      <div
        ref={trailRef}
        className="custom-cursor bg-white/20 blur-sm pointer-events-none fixed top-0 left-0 rounded-full"
        style={{
          width: "30px",
          height: "30px",
          transition: "transform 0.2s ease-out",
          zIndex: 49,
        }}
      />

      {/* Cursor Effect for Interactive Elements */}
      <style>{`
        .cursor-on-interactive .custom-cursor {
          width: 60px !important;
          height: 60px !important;
          background-color: white !important;
          opacity: 0.2;
        }
      `}</style>
    </>
  );
}
