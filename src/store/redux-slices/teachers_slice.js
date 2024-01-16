import { createSlice } from "@reduxjs/toolkit";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const initialState = {
  teachers: [],
  isLoading: false,
  isError: false,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setTeachers } = teachersSlice.actions;

export const { setLoading } = teachersSlice.actions;

export const { setError } = teachersSlice.actions;

export const selectIsLoading = (state) => state.teachers.isLoading;

export const selectIsError = (state) => state.teachers.isError;

export const selectTeachers = (state) => state.teachers.teachers;

export default teachersSlice.reducer;

export const fetchTeachers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const teachers = await apiMiddleware("admin/teachers/teachers");
    dispatch(setTeachers(teachers));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setLoading(false));
  }
};
