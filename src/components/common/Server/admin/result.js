import { useQuery } from "react-query";
import apiMiddleware from "../apiMiddleware";

export const GetResult = () => {
  const { data, isLoading, isError } = useQuery("result_record", () =>
    apiMiddleware("admin/students/students-status")
  );

  return { data, isLoading, isError };
};
