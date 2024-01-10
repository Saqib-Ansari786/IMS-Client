import { createSlice } from "@reduxjs/toolkit";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const initialState = {
  student: {},
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

export const fetchStudent = (id) => async (dispatch) => {
  try {
    const response = await apiMiddleware(`auth/getstudent/${id}`, {
      method: "GET",
    });
    console.log("Student:", response);
    if (response?.success) {
      dispatch(setStudent(response?.user));
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
