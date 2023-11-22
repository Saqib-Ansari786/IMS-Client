import { useQuery } from "react-query";
import apiMiddleware from "./apiMiddleware";

// add teacher
export const addTeacher = (teacher) => {
  return apiMiddleware("admin/add-teacher", {
    method: "POST",
    body: JSON.stringify(teacher),
    headers: { "Content-Type": "application/json" },
  });
};

// get all teachers

export const GetAllTeachers = () => {
  const { data, isLoading, error } = useQuery("teachers", () =>
    apiMiddleware("admin/get-all-teachers")
  );
  return { data, isLoading, error };
};

// edit teacher

export const editTeacher = (teacher) => {
  return apiMiddleware("admin/edit-teacher", {
    method: "POST",
    body: JSON.stringify(teacher),
    headers: { "Content-Type": "application/json" },
  });
};

// delete teacher

export const deleteTeacher = (teacherId) => {
  return apiMiddleware(`admin/delete-teacher/${teacherId}`);
};
