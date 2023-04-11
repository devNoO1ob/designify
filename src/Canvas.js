import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context, 25, 25, 10, 10, "red");
    draw(context, 50, 50, 20, 20, "blue");
  }, []);

  const handleClick = (event) => {
    const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const context = canvas.getContext("2d");
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    draw(context, x, y, 10, 10, "green");
    console.log(`Clicked at (${x}, ${y})`);
  };

  return (
    <canvas
      ref={canvasRef}
      style={{ backgroundColor: "#f5f5f5" }}
      {...props}
      onMouseDown={handleClick}
      className="w-full h-full rounded-xl"
    />
  );
};

export default Canvas;
