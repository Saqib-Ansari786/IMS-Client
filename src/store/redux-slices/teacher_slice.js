import { createSlice } from "@reduxjs/toolkit";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const initialState = {
  teacher: {},
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

export const fetchTeacher = (id) => async (dispatch) => {
  try {
    const response = await apiMiddleware(`auth/getteacher/${id}`, {
      method: "GET",
    });
    console.log("Teacher:", response);
    if (response?.success) {
      dispatch(setTeacher(response?.user));
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
