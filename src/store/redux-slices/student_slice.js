import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { setStudent } = studentSlice.actions;

export const selectStudent = (state) => state.student.student;

export default studentSlice.reducer;
