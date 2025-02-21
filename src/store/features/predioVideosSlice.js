import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  predioVideos: [],
};

export const predioVideosSlice = createSlice({
  name: "predioVideos",
  initialState,
  reducers: {
    getPredioVideos: (state, action) => {
      return { ...state, predioVideos: action.payload };
    },
    addPredioVideo: (state, action) => {
      return {
        ...state,
        predioVideos: [action.payload, ...state.predioVideos],
      };
    },
    deletePredioVideo: (state, action) => {
      const arrayAux = [...state.predioVideos];
      const predioVideos = arrayAux.filter(
        (predioVideos) => predioVideos.id != action.payload.id
      );
      return { ...state, predioVideos };
    },
  },
});

export const {
  getPredioVideos,
  addPredioVideo,
  editPredioVideo,
  deletePredioVideo,
} = predioVideosSlice.actions;

export default predioVideosSlice.reducer;
