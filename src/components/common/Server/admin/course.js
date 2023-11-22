import { useQuery } from "react-query";
import apiMiddleware from "./apiMiddleware";

// add course
export const addCourse = (course) => {
  return apiMiddleware("admin/add-course", {
    method: "POST",
    body: JSON.stringify(course),
    headers: { "Content-Type": "application/json" },
  });
};

// get all courses

export const GetAllCourses = () => {
  const { data, isLoading, error } = useQuery("courses", () =>
    apiMiddleware("admin/get-all-courses")
  );
  return { data, isLoading, error };
};

// edit course

export const editCourse = (course) => {
  return apiMiddleware("admin/edit-course", {
    method: "POST",
    body: JSON.stringify(course),
    headers: { "Content-Type": "application/json" },
  });
};

// delete course

export const deleteCourse = (courseId) => {
  return apiMiddleware(`admin/delete-course/${courseId}`);
};
