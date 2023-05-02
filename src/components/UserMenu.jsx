import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { selectUserName } from "redux/selectors";

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }
     return <Flex alignItems={'center'}> 
       {userName && <Text fontSize='md' mr={4} display={{ base: 'none', sm: 'inline' }}>Welcome, <Text as={'span'} display={'inline'} fontWeight={500}>{ userName}</Text></Text>}
          <Button
                to='/register'
            fontSize={'sm'}
            fontWeight={600}
            colorScheme={'green'}
              bg={'green.400'}
            _hover={{
                bg: 'green.500',
              }} onClick={handleLogout}
              >
            Log Out
          </Button>
          </Flex>
}