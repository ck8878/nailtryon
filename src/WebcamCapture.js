import React, { useRef } from "react";
import Webcam from "react-webcam";
import CameraIcon from '@mui/icons-material/Camera';
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";
import './WebcamCapture.css'

const videoConstraints = {
  width: 360,
  height: 600,
  facingMode: "user"
}

function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    navigate("/preview");
  }, [webcamRef, dispatch, navigate]);

  return (
    <div className="webcamCapture">
      <Webcam
        mirrored={true}
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <CameraIcon
        className="webcamCapture__icon"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
}

export default WebcamCapture;