import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Stack, Link} from "@chakra-ui/react";

import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: #000000;

  &.active {
    color: #66BB6A;
    font-weight: 700;
  }
`;

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

const Links = [{ page: 'Home', path: '/' }, { page: 'Contacts', path: '/contacts' }];

export function Navigation({ isOpen, onClose, onOpen}) {
    return <><IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <CustomNavLink key={link.page} pageName={link.page} path={ link.path} />
              ))}
            </HStack></>
}

export function NavigationMob({isOpen}) {
    return  <>{isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                  <CustomNavLink key={link.page} pageName={link.page} path={ link.path} />
              ))}
            </Stack>
          </Box>
        ) : null}</>
}