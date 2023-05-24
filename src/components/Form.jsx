import { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectContactsIsLoading } from 'redux/selectors';
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
  Spinner,

} from '@chakra-ui/react';
import { ADDING } from 'redux/contacts/constants';
import { Notify } from 'notiflix';

export default function Form() {
  const [name, setName] = useState(''); 
  const [number, setNumber] = useState(''); 

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { [ADDING]: isLoading } = useSelector(selectContactsIsLoading);

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        if (target.value.length >12) return;
        setNumber(normalizeNumber(target.value));
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
      Notify.failure(`${name} is already in contacts.`);
      return;
    };

    if (contacts.find(contact => contact.number === number)) {
      Notify.failure(`Contact with number ${number} already exists.`);
      return;
    };

    dispatch(addContact({name, number }));
    resetForm();
  }

  const normalizeNumber = (value) => {
    const x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      const normalizedNumber = x[1] + (x[2] ? '-' + x[2] : '') + (x[3] ? '-' + x[3] : '');
      return normalizedNumber;
  }

  return (<form onSubmit={onSubmit}>
      <Stack mx='auto' spacing={8} maxW={'lg'} py={12} pb={{base: 0, md: 12}} px={{base: 0, md: 6}} minW={'35vw'}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} textAlign={'center'}>
            New contact
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
              placeholder='308-666-4813'
              minLength='12'
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChange}/>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                size="lg"
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }} isDisabled={isLoading} type='submit'>
                 {isLoading ? <>Adding<Spinner speed='0.9s' size={'sm'} ml={4}/></> : 'Add contact'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </form>
  );
}