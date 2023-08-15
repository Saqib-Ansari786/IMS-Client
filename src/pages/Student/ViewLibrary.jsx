import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import ViewLibraryTable from "../../components/pages/Student/ViewLibraryTable";


const jsonData = {
  headers: ["TITLE", "AUTHER NAME", "PUBLISHER NAME", "ISBN", "CATEGORY", "AVAILABILITY"],
  data: [
    {
      title: "Learn C++",
      autherName: "Murtaza",
      publisherName: "Murtaza Publisher",
      isbn: "102",
      category: "Computer Science",
      availability: "Available",
    },
    {
      title: "Learn C++",
      autherName: "Murtaza",
      publisherName: "Murtaza Publisher",
      isbn: "103",
      category: "Computer Science",
      availability: "Available",
    },
    {
      title: "Learn OOP",
      autherName: "Murtaza",
      publisherName: "Murtaza Publisher",
      isbn: "104",
      category: "Computer Science",
      availability: "Not Available",
    },
    {
      title: "Java Programming",
      autherName: "Murtaza",
      publisherName: "Murtaza Publisher",
      isbn: "105",
      category: "Computer Science",
      availability: "Available",
    },
    
  ],
};

export const ViewLibrary = () => {
  const headers = jsonData.headers;
  const data = jsonData.data;
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"View Library"} />
      <ViewLibraryTable headers={headers} data={data}/>
    </Stack>
  );
};
