import React from "react";

const TextToolbar = ({ setStageData, setSelectedText, setSelectedElement }) => {
  const handleTextChange = (event) => {
    const text = event.target.value;
    setSelectedText(text);
    setSelectedElement("text");
  };

  return (
    <div className="p-4 bg-gray-100">
      <label className="mr-2 font-semibold">Text:</label>
      <input type="text" onChange={handleTextChange} />
    </div>
  );
};

export default TextToolbar;
