import { useQuery } from "react-query";
import apiMiddleware from "./apiMiddleware";

// add student
export const addStudent = (student) => {
  return apiMiddleware("admin/students/register", {
    method: "POST",
    body: JSON.stringify(student),
    headers: { "Content-Type": "application/json" },
  });
};

// get all students

export const GetAllStudents = () => {
  const { data, isLoading, error } = useQuery("students", () =>
    apiMiddleware("admin/students/students")
  );
  return { data, isLoading, error };
};

// edit student

export const editStudent = (id, student) => {
  return apiMiddleware(`admin/students/edit/${id}`, {
    method: "POST",
    body: JSON.stringify(student),
    headers: { "Content-Type": "application/json" },
  });
};

// delete student

export const deleteStudent = (studentId) => {
  return apiMiddleware(`admin/students/students/${studentId}`);
};
