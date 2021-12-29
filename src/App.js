import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Preview from "./Preview";
import ImageViewer from "./ImageViewer";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebcamCapture />} />
        <Route path="preview" element={<Preview />} />
        <Route path="imageviewer" element={<ImageViewer />} />
      </Routes>
    </div>
  );
}

export default App;
