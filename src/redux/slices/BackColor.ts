import { createSlice } from "@reduxjs/toolkit";

enum Colors {
  "Pomodoro" = "#ba4949",
  "Short Break" = "#38858a",
  "Long Break" = "#397097"
}

interface ColorState {
  color: string;
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
        state.color = Colors["Pomodoro"]
      } else if (action.payload == 1) {
        state.color = Colors["Short Break"]
      } else if (action.payload == 2) {
        state.color = Colors["Long Break"]
      }
    },
  },
});

export const { changeColor } = BackColor.actions;
export default BackColor.reducer;
