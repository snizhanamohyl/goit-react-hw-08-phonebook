import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box textAlign="center" py={28} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        bgGradient="linear(to-r, green.400, green.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="24px" mt={8} mb={1} fontWeight='600'>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

          <Button
              as={NavLink}
    to='/'
        bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
        Go to Home
      </Button>
    </Box>
  );
}