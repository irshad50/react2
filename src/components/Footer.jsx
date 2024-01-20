import {Box, Button, Input, Text, Heading, Stack, VStack, HStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';


const Footer = () => {
  return (

    <Box bgColor={'black'} minH={'40'} p="16" color={'aqua'}>
        <Stack direction={['column', 'row']}>

            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                     <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
                        Subscribe to get updates

                     </Heading>

                     <HStack borderBotton={'2px solid white'} py="2">

                        <Input placeholder="Enter Email Here.."
                        border={'none'}
                        borderRadius="none"
                        outline={'none'}
                        focusBorderColor="none"
                        />

                        <Button 
                        p={0}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                          >
                             <AiOutlineSend size={20} />

                        </Button>
                     </HStack>
                    </VStack>

                    <VStack w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                    >
                        <Heading textTransform={"uppercase"} textAlign={'center'}>
                            Video Hub
                        </Heading>
                        <Text>All Rights received</Text>
                    </VStack>

      <VStack w={'full'}>
      <Heading size={'md'} textTransform={'uppercase'}>
         Social media
         </Heading>

          <Button variant={'link'} colorScheme={'White'}>    
          <a target={"blank"} href="http://psrits.unaux.com">Website</a>
          </Button>
               
          <Button variant={'link'} colorScheme={'White'}>    
          <a target={"blank"} href="http://psrits.unaux.com">Website</a>
          </Button>

               
          <Button variant={'link'} colorScheme={'White'}>    
          <a target={"blank"} href="http://psrits.unaux.com">Website</a>
          </Button>

         </VStack>
      </Stack>
    </Box>

  );
};

export default Footer;
