import { createSlice } from "@reduxjs/toolkit";

const defaultInfo = {
  backgroundColor: "#000000",
  fontColor: "#ffffff",
  fontSize: 16,
};
export const colorSlice = createSlice({
  name: "colorFulTodo",
  initialState: defaultInfo,
  reducers: {
    setExamColor(state, action) {
      console.log(action);
      return {
        backgroundColor: action.payload.backgroundColor,
        fontColor: action.payload.fontColor,
        fontSize: Math.max(action.payload.fontSize, 16),
      };
    },
    resetColor() {
      return defaultInfo;
    },
  },
});
export const { setExamColor, resetColor } = colorSlice.actions;
export default colorSlice.reducer;
