import { useQuery } from "react-query";
import apiMiddleware from "./apiMiddleware";

// add book
export const addBook = (book) => {
  return apiMiddleware("admin/add-book", {
    method: "POST",
    body: JSON.stringify(book),
    headers: { "Content-Type": "application/json" },
  });
};

// get all books

export const GetAllBooks = () => {
  const { data, isLoading, error } = useQuery("books", () =>
    apiMiddleware("admin/get-all-books")
  );
  return { data, isLoading, error };
};

// edit book

export const editBook = (book) => {
  return apiMiddleware("admin/edit-book", {
    method: "POST",
    body: JSON.stringify(book),
    headers: { "Content-Type": "application/json" },
  });
};

// delete book

export const deleteBook = (bookId) => {
  return apiMiddleware(`admin/delete-book/${bookId}`);
};
