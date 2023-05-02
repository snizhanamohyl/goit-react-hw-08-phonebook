import { Box } from '@chakra-ui/react';
import ContactItem from 'components/ContactItem';
import {  useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactsList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filterContacts = () => {   
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

    return filterValue === "" ?  contacts : filteredContacts;
  }
  return <Box h={360} overflowY={'auto'} pr={4}><ul>
    {filterContacts().map((contact) => <ContactItem key={contact.id} contact={contact } />)}
    </ul></Box>
};