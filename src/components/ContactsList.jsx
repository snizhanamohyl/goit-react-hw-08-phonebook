import { Box, Flex, Heading, Spinner  } from '@chakra-ui/react';
import ContactItem from 'components/ContactItem';
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { FETCHING } from 'redux/contacts/constants';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';

export default function ContactsList() {
  const [contactsIdToDelete, setContactsIdToDelete] = useState([]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

    return filterValue === "" ? contacts : filteredContacts;
  }

  return <>
    <Flex direction={'column'} alignItems={'center'}>
    {isLoading[FETCHING] ?
      <Spinner
        mt={8}
        thickness='4px'
        speed='0.9s'
        emptyColor='gray.200'
        color='gray.400'
        size='xl'
      /> : (error ? <Heading size='md' mt={8}>Oops, something went wrong :( </Heading> : (contacts.length === 0 ? <Heading size='md' mt={8}>You don't have contacts yet. Add one! </Heading>: (<Box h={360} w='100%' overflowY={'auto'} pr={4}><ul>
        {filterContacts().map((contact) => <ContactItem contactsIdToDelete={contactsIdToDelete} setContactsIdToDelete={setContactsIdToDelete} key={contact.id} contact={contact} />)}
      </ul></Box>)))
    }
  </Flex></>
}