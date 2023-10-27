import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teacher: null,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeacher: (state, action) => {
      state.teacher = action.payload;
    },
  },
});

export const { setTeacher } = teacherSlice.actions;

export const selectTeacher = (state) => state.teacher.teacher;

export default teacherSlice.reducer;
