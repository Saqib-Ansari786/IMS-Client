import React from 'react';
import { Box, Grid, GridItem, Heading, Container } from '@chakra-ui/react';
import ProfileCard from '../../components/pages/Admin/ProfileCard';

const userProfiles = [
  {
    id: 1,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    name: "Ghulam Murtaza",
    designation: "professor",
    email: "check@gmail.com",
    phoneNumber: "0321-1234567",
    address: "House no 2 check gali dedl,emdmekdedmelkmdnxknxekn"
  },
  {
    id: 2,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    name: "Ghulam Murtaza",
    designation: "professor",
    email: "check@gmail.com",
    phoneNumber: "0321-1234567",
    address: "House no 2 check gali"
  },
  {
    id: 3,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    name: "Ghulam Murtaza",
    designation: "professor",
    email: "check@gmail.com",
    phoneNumber: "0321-1234567",
    address: "House no 2 check gali"
  },
  {
    id: 4,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    name: "Ghulam Murtaza",
    designation: "professor",
    email: "check@gmail.com",
    phoneNumber: "0321-1234567",
    address: "House no 2 check gali"
  },
  
];

export default function TeacherProfileView() {
  return (
    <Container maxW="container.xl" mt="4">
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
        {userProfiles.map((profile, index) => (
          <ProfileCard
            key={index}
            imgUrl={profile.imgUrl}
            name={profile.name}
            designation={profile.designation}
            phoneNumber={profile.phoneNumber}
            address={profile.address}
          />
        ))}
    </Grid>
  </Container>


);

}
