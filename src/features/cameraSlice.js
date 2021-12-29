import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
    name: 'camera',
    initialState: {
        cameraImage: null,
    },
    reducers: {
        setCameraImage: (state, action) => {
            state.cameraImage = action.payload;
        },
        resetCameraImage: (state) => {
            state.cameraImage = null;
        },
        setNailImage: (state, action) => {
            state.nailImage = action.payload;
        },
        resetNailImage: (state) => {
            state.nailImage = null;
        }
    }
});

export const { setCameraImage, resetCameraImage, setNailImage, resetNailImage } = cameraSlice.actions;

export const selectCameraImage = (state) => state.camera.cameraImage;

export const selectNailImage = (state) => state.camera.nailImage;

export default cameraSlice.reducer;
