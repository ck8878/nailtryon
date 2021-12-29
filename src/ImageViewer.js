import React from "react";
import { useSelector } from "react-redux";
import { selectNailImage } from "./features/cameraSlice";

import "./ImageViewer.css";

function ImageViewer() {

    const nailImage = useSelector(selectNailImage);
    return (
        <div className="imageviewer">
            <img src={nailImage} alt="Nail art" />
        </div>
    );
}

export default ImageViewer;