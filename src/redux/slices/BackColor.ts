import { createSlice } from "@reduxjs/toolkit";

type Colors = "#38858a" | "#ba4949" | "#397097";

interface ColorState {
  color: Colors;
}

const initialState: ColorState = {
  color: "#ba4949",
};

const BackColor = createSlice({
  initialState,
  name: "control-background-color",
  reducers: {
    changeColor: (state, action) => {
      if (action.payload == 0) {
        state.color = "#ba4949";
      } else if (action.payload == 1) {
        state.color = "#38858a";
      } else if (action.payload == 2) {
        state.color = "#397097";
      }
    },
  },
});

export const { changeColor } = BackColor.actions;
export default BackColor.reducer;
