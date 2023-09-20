import React, { useState } from 'react';
import { Flex, HStack, Text, Link } from '@chakra-ui/react';

export default function PageHeader({ handleListViewClick, handleAddClick, handleGridClick }) {
  const [selectedLink, setSelectedLink] = useState('ListView');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <Flex
      justify="end"
      align="center"
      backgroundColor="white"
      padding={4}
      borderRadius={8}
      boxShadow="md"
    >
      <HStack marginRight={4} spacing={4}>
        <Link
          as={Text}
          color={selectedLink === 'ListView' ? 'blue.600' : 'gray.600'}
          textDecoration={selectedLink === 'ListView' ? 'underline' : 'none'}
          _hover={{ textDecoration: 'underline' }}
          onClick={()=>{
            handleListViewClick();
            handleLinkClick('ListView')
        }
        }
        >
          List View
        </Link>
        <Link
          as={Text}
          color={selectedLink === 'TeacherProfileView' ? 'blue.600' : 'gray.600'}
          textDecoration={selectedLink === 'TeacherProfileView' ? 'underline' : 'none'}
          _hover={{ textDecoration: 'underline' }}
          onClick={()=>{
            handleGridClick();
            handleLinkClick('TeacherProfileView')
        }
        }
        >
          Grid View
        </Link>
        <Link
          as={Text}
          color={selectedLink === 'Add' ? 'blue.600' : 'gray.600'}
          textDecoration={selectedLink === 'Add' ? 'underline' : 'none'}
          _hover={{ textDecoration: 'underline' }}
          onClick={()=>{
            handleAddClick();
            handleLinkClick('Add')
          }}
        >
          Add
        </Link>
      </HStack>
    </Flex>
  );
}
