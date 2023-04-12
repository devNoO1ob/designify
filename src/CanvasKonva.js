import React, { useState } from "react";
import { Stage, Layer, Circle, Text, Rect, RegularPolygon } from "react-konva";

const CanvasKonva = ({
  selectedText,
  setNumObjects,
  selectedColor,
  selectedElement,
  stageRef,
}) => {
  const [shapes, setShapes] = useState([]);
  const [texts, setTexts] = useState([]);

  const handleTextClick = (e) => {
    const textId = e.target.attrs.id;
    const newShapes = shapes.map((shape) => {
      if (shape.id === textId) {
        return { ...shape, isSelected: true };
      } else {
        return { ...shape, isSelected: false };
      }
    });
    setShapes(newShapes);
  };

  const handleTextDragEnd = (e) => {
    const textId = e.target.attrs.id;
    const newShapes = shapes.map((shape) => {
      if (shape.id === textId) {
        return { ...shape, x: e.target.x(), y: e.target.y() };
      } else {
        return shape;
      }
    });
    setShapes(newShapes);
  };

  const renderText = (text) => {
    return (
      <Text
        key={text.id}
        id={text.id}
        x={text.x}
        y={text.y}
        text={text.text}
        fontSize={text.fontSize}
        fontFamily={text.fontFamily}
        fill={text.color}
        draggable={true}
        onClick={handleTextClick}
        onDragEnd={handleTextDragEnd}
        shadowBlur={10}
        opacity={text.isSelected ? 0.5 : 1}
      />
    );
  };

  const handleShapeClick = (e) => {
    const shapeId = e.target.attrs.id;
    const newShapes = shapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, isSelected: true };
      } else {
        return { ...shape, isSelected: false };
      }
    });
    setShapes(newShapes);
  };

  const handleShapeDragEnd = (e) => {
    const shapeId = e.target.attrs.id;
    const newShapes = shapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, x: e.target.x(), y: e.target.y() };
      } else {
        return shape;
      }
    });
    setShapes(newShapes);
  };

  const handleCanvasClick = (e) => {
    if (selectedElement === "text") {
      const newTextShape = {
        id: shapes.length,
        x: e.evt.layerX,
        y: e.evt.layerY,
        type: selectedElement,
        color: selectedColor,
        text: selectedText, // hier sollte der eingegebene Text eingefügt werden
        isSelected: false,
      };
      setTexts([...texts, newTextShape]);
      setNumObjects(shapes.length + 1 + (texts.length + 1));
    } else {
      const newShape = {
        id: shapes.length,
        x: e.evt.layerX,
        y: e.evt.layerY,
        type: selectedElement, // change this to 'rect' or 'triangle' for different shapes
        color: selectedColor, // change this to any valid color string
        isSelected: false,
      };
      setShapes([...shapes, newShape]);
      setNumObjects(shapes.length + 1);
    }
  };

  const renderShape = (shape) => {
    switch (shape.type) {
      case "circle":
        return (
          <Circle
            key={shape.id}
            id={shape.id}
            x={shape.x}
            y={shape.y}
            radius={50}
            fill={shape.color}
            draggable={true}
            onClick={handleShapeClick}
            onDragEnd={handleShapeDragEnd}
            shadowBlur={10}
            opacity={shape.isSelected ? 0.5 : 1}
          />
        );
      case "square":
        return (
          <Rect
            key={shape.id}
            id={shape.id}
            x={shape.x}
            y={shape.y}
            width={100}
            height={100}
            fill={shape.color}
            draggable={true}
            onClick={handleShapeClick}
            onDragEnd={handleShapeDragEnd}
            shadowBlur={10}
            opacity={shape.isSelected ? 0.5 : 1}
          />
        );
      case "triangle":
        return (
          <RegularPolygon
            key={shape.id}
            id={shape.id}
            x={shape.x}
            y={shape.y}
            sides={3}
            radius={50}
            fill={shape.color}
            draggable={true}
            onClick={handleShapeClick}
            onDragEnd={handleShapeDragEnd}
            shadowBlur={10}
            opacity={shape.isSelected ? 0.5 : 1}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      className="bg-gray-100 w-full rounded-xl border-gray-400 border-2"
      onClick={handleCanvasClick}
      ref={stageRef}
    >
      <Layer>
        {shapes.map((shape) => renderShape(shape))}
        {texts.map((text) => renderText(text))}
      </Layer>
    </Stage>
  );
};

export default CanvasKonva;
