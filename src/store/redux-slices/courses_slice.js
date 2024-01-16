import { createSlice } from "@reduxjs/toolkit";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const initialState = {
  courses: [],
  isLoading: false,
  isError: false,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;
export const { setLoading } = coursesSlice.actions;
export const { setError } = coursesSlice.actions;
export const selectIsLoading = (state) => state.courses.isLoading;
export const selectIsError = (state) => state.courses.isError;
export const selectCourses = (state) => state.courses.courses;

export default coursesSlice.reducer;

export const fetchCourses = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const courses = await apiMiddleware("admin/courses/courses");
    dispatch(setCourses(courses));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setLoading(false));
  }
};
