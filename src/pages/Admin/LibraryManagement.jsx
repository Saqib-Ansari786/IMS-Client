import { FaReact } from 'react-icons/fa';
import LibraryCard from '../../components/pages/Admin/LibraryCard';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

const cardData = [
  { icon: <FaReact />, name: "All Books", link: "/admin/library" }, 
  { icon: <FaReact />, name: "Add Book", link: "/admin/library/addbook"},
  { icon: <FaReact />, name: "Issue Requests", link: "/admin/library/issuerequest" },
  { icon: <FaReact />, name: "All issued Books", link: "/admin/library/allissuedbooks" },
  { icon: <FaReact />, name: "Add Book Category", link: "/admin/library/addbookcategory" },
];

export default function LibraryManagement() {
  return (
    <Box>
      <Heading mb={"5"} size="xl" color="#120E87">
        Library Management
      </Heading>
      <SimpleGrid justifyContent={"center"} mb={3} columns={[1, 2, 3, 4]} gap={2}>
        {cardData.map((card, index) => (
          <LibraryCard key={index} icon={card.icon} name={card.name} link={card.link} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
