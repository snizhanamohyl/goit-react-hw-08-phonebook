import { CloseIcon } from "@chakra-ui/icons";
import { Avatar, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DELETING } from "redux/contacts/constants";
import { deleteContact } from "redux/contacts/operations";
import { selectIsLoading } from "redux/selectors";

export default function ContactItem({ contact,  contactsIdToDelete, setContactsIdToDelete}) {
  const { [DELETING]: isLoading } = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  
  const onDelete = () => {
    setContactsIdToDelete((state)=> [...state, contact.id])
      dispatch(deleteContact(contact.id));
  }
  
  const shouldDisable = isLoading && contactsIdToDelete.find(id => id === contact.id);
    
  return <Flex mt={6} align={'center'} justify='space-between'>
      <Flex >
          <Avatar
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg'}
          alt={'Author'}
          mr={4}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{contact.name}</Text>
            <Text color={'gray.500'}>{contact.number}</Text>
        </Stack>
      </Flex>
        <IconButton size={'sm'} aria-label='Delete contact' onClick={onDelete} isDisabled={shouldDisable} icon={<CloseIcon />} />
    </Flex>
}
