import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptsearch: false
  },
  reducers: {
    toogleGptSearchView: (state) => {
      state.showgptsearch = !state.showgptsearch;
    }
  }
});

export const { toogleGptSearchView } = GptSlice.actions;
export default GptSlice.reducer;