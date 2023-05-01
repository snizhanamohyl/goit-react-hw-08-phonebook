import { CloseIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

export default function ContactItem({ contact }) {
    const dispatch = useDispatch();
    const onDelete = ({ target }) => {
        const id = target.parentElement.getAttribute('data-key');
        dispatch(deleteContact(id));
    }
    
    return <Flex mt={6} align={'center'} data-key={contact.id } justify='space-between'>
      <Flex >
          <Avatar
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png'}
          alt={'Author'}
          mr={4}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{contact.name}</Text>
            <Text color={'gray.500'}>{contact.number}</Text>
        </Stack>
      </Flex>
        <IconButton size={'sm'} aria-label='Delete contact' onClick={onDelete} icon={<CloseIcon />} />
    </Flex>
}
