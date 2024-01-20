import { VStack, Heading, Input, Container, Button,Link,Text } from '@chakra-ui/react';
import React from 'react'

const Login = () => {
  return (
    
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <from>
        <VStack alignItems={'stretch'}
        spacing={'8'}
        w={ '96'}
        m={'auto'}
        my={'16'}
        >
          <Heading>Welcome Back</Heading>  

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
{/* Forget button */}
           <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget password</Link>
           </Button>
           
           <Button colorScheme={'red'} type={'sumbit'}>
            Log In
           </Button>

           <Text textAlign={'right'}>
            New User?  { " "}
           <Button variant={'link'} colorScheme={'purple'} >
            <Link to={'/signup'}>Sign Up</Link>
           </Button>
           </Text>
        </VStack>
    </from>
    </Container>
  );
};

export default Login;
