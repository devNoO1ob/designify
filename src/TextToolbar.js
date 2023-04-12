import React from "react";

const TextToolbar = ({ setStageData, setSelectedText, setSelectedElement }) => {
  const handleTextChange = (event) => {
    const text = event.target.value;
    setSelectedText(text);
    setSelectedElement("text");
  };

  return (
    <div class="p-4 bg-gray-100">
      <input
        type="text"
        class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        onChange={handleTextChange}
      />
    </div>
  );
};

export default TextToolbar;
