import { NavLink } from 'react-router-dom';

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #66BB6A;
    font-weight: 700;
  }
`;

const Links = [{page: 'Home', path: '/'}, {page:'Contacts', path:'/contacts'}];

const CustomNavLink = ({ path, pageName }) => (
    <Link
    as={StyledLink}
    to={path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: '#66BB6A',
    }}>
    {pageName}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={'center'}> */}
            {/* <Box>Logo</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <CustomNavLink key={link.page} pageName={link.page} path={ link.path} />
              ))}
            </HStack>
          {/* </HStack> */}
            <Flex alignItems={'center'}>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={NavLink}
            to="/login"
            fontSize={'md'}
            fontWeight={400}
            variant={'link'}>
            Login
          </Button>
          <Button
                as={NavLink}
                to='/register'
            fontSize={'sm'}
            fontWeight={600}
            colorScheme={'green'}
              bg={'green.400'}
            _hover={{
                bg: 'green.500',
              }}
              >
                {/* colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }} */}
            Sign Up
          </Button>
        </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                  <CustomNavLink key={link} pageName={link.page} path={ link.path} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}