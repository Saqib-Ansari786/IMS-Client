import { useQuery } from "react-query";
import { useToast } from "@chakra-ui/react";
import apiMiddleware from "../apiMiddleware";

// get all students

export async function usePostStudent(student) {
  const toast = useToast();
  try {
    const response = await apiMiddleware("admin/add-student", {
      method: "POST",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Student Added",
        description: "Student has been added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
}

// get all students

export const GetAllStudents = () => {
  const { data, isLoading, error } = useQuery("students", () =>
    apiMiddleware("admin/get-all-students")
  );
  return { data, isLoading, error };
};

// edit student

export async function useEditStudent(id, student) {
  const toast = useToast();
  try {
    const response = await apiMiddleware(`admin/edit-student/${id}`, {
      method: "POST",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Student Edited",
        description: "Student has been edited successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
}

// delete student

export async function deleteStudent(id) {
  try {
    const response = await apiMiddleware(`admin/students/students/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    return error;
  }
}
