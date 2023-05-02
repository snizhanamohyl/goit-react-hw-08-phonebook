import { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Form() {
    const [name, setName] = useState(''); 
  const [number, setNumber] = useState(''); 

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        break;
    }
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    dispatch(addContact({name, number }));
    resetForm();
    }
    

  return (
      <form onSubmit={onSubmit}>
      <Stack mx='auto' spacing={8} maxW={'lg'} py={12} pb={{base: 0, md: 12}} px={{base: 0, md: 6}} minW={'35vw'}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} textAlign={'center'}>
            Add contact
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Contact name</FormLabel>
              <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
                value={name}
                placeholder='James Douglas'
              onChange={onChange}
      />
              </FormControl>
              <FormControl id="number" isRequired>
              <FormLabel>Phone number</FormLabel>
              <Input
            type="tel"
            name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                placeholder='308-666-4813'
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChange}/>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }} type='submit'>
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </form>
  );
}