import { Button, Flex, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function AuthNav () {
    return <Flex alignItems={'center'}> 
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
            Log In
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
            Sign Up
          </Button>
        </Stack>
          </Flex>
}