import { useQuery } from "react-query";
import apiMiddleware from "./apiMiddleware";
import { useToast } from "@chakra-ui/react";

// get all courses

export async function usePostCourse(course) {
  const toast = useToast();
  try {
    const response = await apiMiddleware("admin/add-course", {
      method: "POST",
      body: JSON.stringify(course),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Course Added",
        description: "Course has been added successfully",
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

// get all courses

export const GetAllCourses = () => {
  const { data, isLoading, error } = useQuery("courses", () =>
    apiMiddleware("admin/get-all-courses")
  );
  return { data, isLoading, error };
};

// edit course

export async function useEditCourse(id, course) {
  const toast = useToast();
  try {
    const response = await apiMiddleware(`admin/edit-course/${id}`, {
      method: "POST",
      body: JSON.stringify(course),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Course Edited",
        description: "Course has been edited successfully",
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

// delete course

export async function useDeleteCourse(id) {
  const toast = useToast();
  try {
    const response = await apiMiddleware(`admin/delete-course/${id}`);
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Course Deleted",
        description: "Course has been deleted successfully",
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
