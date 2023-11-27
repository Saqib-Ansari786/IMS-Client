import { useQuery } from "react-query";
import apiMiddleware from "./apiMiddleware";
import { useToast } from "@chakra-ui/react";

// get all teachers

export async function usePostTeacher(teacher) {
  const toast = useToast();
  try {
    const response = await apiMiddleware("admin/add-teacher", {
      method: "POST",
      body: JSON.stringify(teacher),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Teacher Added",
        description: "Teacher has been added successfully",
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

// get all teachers

export const GetAllTeachers = () => {
  const { data, isLoading, error } = useQuery("teachers", () =>
    apiMiddleware("admin/get-all-teachers")
  );
  return { data, isLoading, error };
};

// edit teacher

export async function useEditTeacher(id, teacher) {
  const toast = useToast();
  try {
    const response = await apiMiddleware(`admin/edit-teacher/${id}`, {
      method: "POST",
      body: JSON.stringify(teacher),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Teacher Edited",
        description: "Teacher has been edited successfully",
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

// delete teacher

export async function useDeleteTeacher(id) {
  const toast = useToast();
  try {
    const response = await apiMiddleware(`admin/delete-teacher/${id}`);
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Teacher Deleted",
        description: "Teacher has been deleted successfully",
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
