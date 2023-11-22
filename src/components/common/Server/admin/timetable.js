import { useQuery } from "react-query";
import apiMiddleware from "../apiMiddleware";

export const GetTimetable = () => {
  const { data, isLoading, isError } = useQuery("timetable", () =>
    apiMiddleware("admin/timetable/timetable")
  );

  return { data, isLoading, isError };
};
