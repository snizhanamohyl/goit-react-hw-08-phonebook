import {
  Box,
  Flex,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { Navigation, NavigationMob } from './Navigation';
import { AuthNav } from './AuthNav';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';

export default function AppBar() {
  const token = useSelector(selectToken);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} borderBottom={1}
        borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}>
          <Navigation isOpen={ isOpen} onClose={onClose } onOpen={onOpen }/>
         {token ? <UserMenu /> : <AuthNav />}
        </Flex>
        <NavigationMob isOpen={ isOpen} />
      </Box>
    </>
  );
}