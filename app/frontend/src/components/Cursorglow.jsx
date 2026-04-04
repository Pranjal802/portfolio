import { useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
          left: pos.x - 250,
          top: pos.y - 250,
        }}
      />
    </div>
  );
};

export default CursorGlow;