import React from 'react';
import LibraryHeader from '../../components/pages/Admin/LibrarayHeader';
import { Box } from '@chakra-ui/react';
import AddBook from '../../components/pages/Admin/AddBook';

export default function AddBookPage() {
  return (
    <Box>
     <LibraryHeader heading={"Add Book"}>
      <AddBook/>
    </LibraryHeader>
    </Box>
    

      
  );
}
