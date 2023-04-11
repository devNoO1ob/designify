import './App.css';
import Header from './Header';
import ToolBar from "./ToolBar";
import { useState, useRef } from "react";
import Canvas from "./Canvas";
import CanvasKonva from "./CanvasKonva";

function App() {
  const [activeElement, setActiveElement] = useState(null);
  const [numObjects, setNumObjects] = useState(0);
  const [selectedElement, setSelectedElement] = useState("triangle");
  const [selectedColor, setSelectedColor] = useState("yellow");
  const [selectedText, setSelectedText] = useState("yellow");
  const [stageData, setStageData] = useState(null);
 const stageRef = useRef(null);

  const handleStageData = (data) => { 
    setStageData(data);
  }

  return (
    <div id="wrapper" className="p-3 h-screen">
      <Header activeElement={activeElement} numObjects={numObjects} />
      <div className="flex h-3/4">
        <ToolBar
          className="w-1/6"
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          activeElement={activeElement}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setSelectedText={setSelectedText}
          setStageData={handleStageData}
          stageRef={stageRef}
        />
        <CanvasKonva
          className="w-5/6"
          selectedColor={selectedColor}
          selectedElement={selectedElement}
          setNumObjects={setNumObjects}
          selectedText={selectedText}
          stageRef={stageRef}
          id="myCanvas"
        />
      </div>
    </div>
  ); 
}

export default App;
