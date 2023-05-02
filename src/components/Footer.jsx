import { Box, Text, useColorModeValue } from "@chakra-ui/react"

export default function Footer() {
    return (<Box
      bg={useColorModeValue('gray.100', 'gray.900')}><Text letterSpacing={ 1} py={8} fontSize={'sm'} textAlign={'center'}>
          © 2023 Contact Book. All rights reserved
        </Text></Box>)
}