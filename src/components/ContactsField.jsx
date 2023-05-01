import { Box, Heading } from "@chakra-ui/react";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";

export default function ContactsField() {
    return <Box w="100%" py={12} px={{base: 0, md: 6}}>
      <Heading fontSize={'3xl'} textAlign={'center'} mb={8}>Phonebook</Heading>
      <Filter />
      <ContactsList />
    </Box>
}