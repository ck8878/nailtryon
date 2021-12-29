import React, { useState } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate } from "react-router-dom";
import { selectCameraImage, setNailImage } from "./features/cameraSlice";

import "./Preview.css";

function Preview() {

    const cameraImage = useSelector(selectCameraImage);
    const [nailImage, setnailImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    const uploadphoto = React.useCallback(() => {
        var data = new FormData();

        var file = dataURLtoFile(cameraImage, 'imageUpload.png');

        data.append('image', file);

        var config = {
            method: 'POST',
            url: 'http://192.46.209.9/api/v1/nail_tryon/',
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setnailImage(response.data);
                dispatch(setNailImage("data:image/png;base64," + response.data));
                navigate("/imageviewer");
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [cameraImage, dispatch, navigate]);

    let image;
    if (nailImage != null) {
        image = <img src={"data:image/png;base64," + nailImage} alt="preview" />;
    } else {
        image = null
    }

    return (
        <div className="preview">
            <img src={cameraImage} alt="" />
            <UploadIcon
                className="upload__icon"
                onClick={uploadphoto}
                fontSize="large"
            />
            {image}
        </div>
    );
}

export default Preview;