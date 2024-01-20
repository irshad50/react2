import { Container, VStack,HStack, Button, Input } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {


  return ( <Container maxW={"container.xl"}  h={"100vh"} p={"15"}>

    <VStack color={"yellow.500"} h={"full"} justifyContent={"center"}>
<AiOutlineCloudUpload size={'10vmx'} />




<from>
  <HStack>
<Input required 
type={'file'} 
css={{
  '&::file-selector-button':{
    border: 'none',
    width: 'calc(100% + 36px)',
    height: '100%',
    marginLeft: '-18px',
    color: 'purple',
    backgroundColor: 'white',
    cursor: 'pointer',

  },
}}
/>
<Button colorScheme={'purple'} type={"submit"}>
  Upload
</Button>
  </HStack>
</from>
  </VStack>
  </Container>
  );
};

export default Upload;
