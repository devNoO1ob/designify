import { useState, useRef } from "react";
import ColorPicker from "./ColorPicker";
import Form from "./Form";
import TextToolbar from "./TextToolbar";

function ToolBar({
  selectedElement,
  setSelectedElement,
  setSelectedColor,
  selectedColor,
  setSelectedText,
  setStageData,
  stageRef,
}) {
  const handleExport = () => {
    const dataURL = stageRef.current.toDataURL();
      setStageData(dataURL);
      console.log(dataURL);
        const link = document.createElement("a");
        link.download = "stage.png";
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-100 h-full p-4 mr-7 rounded-xl grid justify-items-center border-gray-400 border-2">
      <div id="formCollection" className="grid justify-items-center">
        <Form
          selectedElementToolbar={"triangle"}
          selectedColorToolbar={"black"}
          setSelectedElement={setSelectedElement}
        />
        <Form
          selectedElementToolbar={"square"}
          selectedColorToolbar={"black"}
          setSelectedElement={setSelectedElement}
        />
        <Form
          selectedElementToolbar={"circle"}
          selectedColorToolbar={"black"}
          setSelectedElement={setSelectedElement}
        />
      </div>

      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <p>
        <b>color___</b>
        {selectedColor}
      </p>
      <p>
        <b>element___</b>
        {selectedElement}
      </p>

      <TextToolbar
        setSelectedText={setSelectedText}
        setSelectedElement={setSelectedElement}
      />

      <button
        className="bg-gray-400/50 border-gray-400/70 border-2 rounded-full text-white px-4"
        onClick={handleExport}
      >
        Export as Image
      </button>
    </div>
  );
}

export default ToolBar;
