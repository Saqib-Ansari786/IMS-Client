import { useQuery } from "react-query";
import apiMiddleware from "./apiMiddleware";
import { useToast } from "@chakra-ui/react";

// get all books

export async function usePostBook(book) {
  const toast = useToast();
  try {
    const response = await apiMiddleware("admin/add-book", {
      method: "POST",
      body: JSON.stringify(book),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Book Added",
        description: "Book has been added successfully",
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

// get all books

export const GetAllBooks = () => {
  const { data, isLoading, error } = useQuery("books", () =>
    apiMiddleware("admin/get-all-books")
  );
  return { data, isLoading, error };
};

// edit book

export async function useEditBook(id, book) {
  const toast = useToast();
  try {
    const response = await apiMiddleware(`admin/edit-book/${id}`, {
      method: "POST",
      body: JSON.stringify(book),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Book Edited",
        description: "Book has been edited successfully",
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

// delete book

export async function useDeleteBook(id) {
  const toast = useToast();
  try {
    const response = await apiMiddleware(`admin/delete-book/${id}`);
    console.log("response from server", response);

    if (response.success) {
      toast({
        title: "Book Deleted",
        description: "Book has been deleted successfully",
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
