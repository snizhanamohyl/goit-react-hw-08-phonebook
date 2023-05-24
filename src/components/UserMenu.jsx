import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { selectAuthIsLoading, selectUserName } from "redux/selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const isLoading = useSelector(selectAuthIsLoading);
  
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
         }} onClick={handleLogout} isDisabled={ isLoading}
              >
            Log Out
          </Button>
          </Flex>
}