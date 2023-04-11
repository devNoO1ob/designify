import { useState, useEffect } from "react";

function Form({
  selectedElementToolbar,
  selectedColorToolbar,
  setSelectedElement,
}) {
  const[icon, setIcon] = useState(null);
  
    const handeSelectedElement = (form) => {
        setSelectedElement(form);
        console.log("formSelected: " + form);
    };

    const handleIconChange = (selectedElementToolbar) => {

      switch (selectedElementToolbar) {
        case "square":
          setIcon(
            <rect
              onClick={() => handeSelectedElement("square")}
              x="3"
              y="3"
              width="18"
              height="18"
            ></rect>
          );
          break;
        case "triangle":
          setIcon(
            <polygon
              onClick={() => handeSelectedElement("triangle")}
              points="12,3 3,21 21,21"
            ></polygon>
          );
          break;
        case "circle":
          setIcon(
            <circle
              onClick={() => handeSelectedElement("circle")}
              cx="12"
              cy="12"
              r="9"
            ></circle>
          );
          break;
        default:
          icon = null;
          break;
      }
    };
    
    useEffect(() => {
        handleIconChange(selectedElementToolbar);
    }, [selectedColorToolbar]);

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill={selectedColorToolbar}
      className="feather feather-triangle"
    >
          {icon}
    </svg>
  );
}

export default Form;
