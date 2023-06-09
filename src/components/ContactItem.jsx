import { CloseIcon } from "@chakra-ui/icons";
import { Avatar, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DELETING } from "redux/contacts/constants";
import { deleteContact } from "redux/contacts/operations";
import { selectContactsIsLoading } from "redux/selectors";
import PropTypes from 'prop-types'; 

export default function ContactItem({ contact,  contactsIdToDelete, setContactsIdToDelete}) {
  const { [DELETING]: isLoading } = useSelector(selectContactsIsLoading);

  const dispatch = useDispatch();
  
  const onDelete = () => {
    setContactsIdToDelete((state)=> [...state, contact.id])
      dispatch(deleteContact(contact.id));
  }
  
  const shouldDisable = isLoading && contactsIdToDelete.find(id => id === contact.id);
    
  return <Flex mt={6} align={'center'} justify='space-between'>
      <Flex >
          <Avatar
          alt={'Contact Photo'}
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

ContactItem.propTypes = {
    contact: PropTypes.shape({name: PropTypes.string, phone: PropTypes.string}).isRequired,
  contactsIdToDelete: PropTypes.arrayOf(PropTypes.string),
    setContactsIdToDelete: PropTypes.func.isRequired,
};
