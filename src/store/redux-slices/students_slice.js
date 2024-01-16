import { createSlice } from "@reduxjs/toolkit";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const initialState = {
  students: [],
  isLoading: false,
  isError: false,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setStudents } = studentsSlice.actions;

export const { setLoading } = studentsSlice.actions;

export const { setError } = studentsSlice.actions;

export const selectIsLoading = (state) => state.students.isLoading;

export const selectIsError = (state) => state.students.isError;

export const selectStudents = (state) => state.students.students;

export default studentsSlice.reducer;

export const fetchStudents = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const students = await apiMiddleware("admin/students/students");
    dispatch(setStudents(students));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setLoading(false));
  }
};
