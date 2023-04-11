import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ selectedColor, setSelectedColor }) => {
    const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div>
      <SketchPicker color={selectedColor} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
