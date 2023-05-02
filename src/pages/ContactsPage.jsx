import { Box, Stack } from "@chakra-ui/react";
import ContactsField from "components/ContactsField";
import Form from "components/Form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
    return <>
      <Box display={{ base: "block", md: "flex" }}>
      <Stack display={{base: 'flex', md: 'block'}} justify={'center'} mr={{ base: 'auto', md: 12 }}><Form /></Stack>  
      <Stack flexGrow={1}><ContactsField /></Stack>
    </Box></>
}