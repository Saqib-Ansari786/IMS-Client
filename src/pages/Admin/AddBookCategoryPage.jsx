import React from 'react';
import LibraryHeader from '../../components/pages/Admin/LibrarayHeader';
import { Box } from '@chakra-ui/react';
import AddBookCategory from '../../components/pages/Admin/AddBookCategory';

export default function AddBookCategoryPage() {
  return (
    <Box>
     <LibraryHeader heading={"Add Book Category"}>
      <AddBookCategory/>
    </LibraryHeader>
    </Box>
    

      
  );
}
