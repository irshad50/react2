import { VStack, Heading, Input, Container, Button,Link,Text ,Avatar} from '@chakra-ui/react';
import React from 'react'

const Signup = () => {
  return (
    
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <from>
        <VStack alignItems={'stretch'}
        spacing={'8'}
        w={ '96'}
        m={'auto'}
        my={'16'}
        >
          <Heading>Video File</Heading>  
          <Avatar alignSelf={'center'} boxSixe={'32'} />

          <Input placeholder={'Name'}
           type={'text'} 
           required
           focusBorderColor={'red.500'}
           />

          <Input placeholder={'Email'}
           type={'email'} 
           required
           focusBorderColor={'red.500'}
           />
            <Input placeholder={'Password'}
           type={'password'} 
           required
           focusBorderColor={'red.500'}

           />
           
           <Button colorScheme={'red'} type={'sumbit'}>
            Sign up
           </Button>

           <Text textAlign={'right'}>
            Already Sign Up  { " "}
           <Button variant={'link'} colorScheme={'purple'} >
            <Link to={'/login'}>Login In</Link>
           </Button>
           </Text>
        </VStack>
    </from>
    </Container>
  );
};

export default Signup;



