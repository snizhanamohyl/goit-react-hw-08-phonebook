import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            All your contacts  <br />
            <Text as={'span'} color={'green.400'}>
             in one place
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Welcome to Contact Book, your one-stop solution to save and manage all your contacts in one place. Say goodbye to the hassle of juggling through multiple address books and enjoy the convenience of having all your important contact information at your fingertips. Sign up now and start organizing your contacts with ease!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              as={Link}
              to={'/contacts'}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'md'}
              fontSize={'lg'}
              py={6}
              px={12}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}