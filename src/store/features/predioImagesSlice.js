import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  predioImages: [],
};

export const predioImagesSlice = createSlice({
  name: "predioImages",
  initialState,
  reducers: {
    getPredioImages: (state, action) => {
      return { ...state, predioImages: action.payload };
    },
    addPredioImage: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        predioImages: [action.payload, ...state.predioImages],
      };
    },
    editPredioImage: (state, action) => {
      let auxArray = [...state.predioImages];
      console.log(auxArray, action.payload.id);
      let index = auxArray.findIndex((item) => item.id == action.payload.id);
      auxArray[index] = action.payload;
      return { ...state, predioImages: auxArray };
    },
    deletePredioImage: (state, action) => {
      const arrayAux = [...state.predioImages];
      const predioImages = arrayAux.filter(
        (predioImages) => predioImages.id != action.payload.id
      );
      return { ...state, predioImages };
    },
  },
});

export const {
  getPredioImages,
  addPredioImage,
  editPredioImage,
  deletePredioImage,
} = predioImagesSlice.actions;

export default predioImagesSlice.reducer;
