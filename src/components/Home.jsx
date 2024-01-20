import { Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.png';

const headingOptions = {
pos: 'absolute',
left: '19%',
top: '20%',
transform: 'translate(-50%, 50%%)',
textTransform: 'uppercase',
p: '4',
size: '4xl',
};

const Home = () => {
  return  ( 
  <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">  
    
      <Heading 
      textTransform={'uppercase'}
      py="2"
      W={'fit-content'}
      borderBottom={'2px solid'}     
      m="auto" 
      >
       Services
      </Heading>

      <Stack 

      h="full"
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}
      
      >
        <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>

              Here's the main difference between ReactJS and React Native:

               React JS is used to build the user interface of web applications (that is, apps that run on a web browser)
                React Native is used to build applications that run on both iOS and 
               Android devices (that is, cross-platform mobile applications)
                React uses HTML, CSS and JavaScript to create interactive user interfaces. 
              React Native, on the other hand, uses native UI components and APIs to create mobile apps.
              Both React JS and React Native share the same syntax. React Native was created
                as a way for developers to build cross-platform mobile applications using their
              existing knowledge of web development tools like HTML, CSS, JavaScript and the React core library.
             In fact, some of the libraries commonly used together with React to develop 
             web applications also have a mobile building apps in React Native for example, Axios, Bootstrap CSS, and Tailwind CSS.
        </Text>

      </Stack>
      </Container>

</Box>
  );
};
const MyCarousel = () => (
    <Carousel 
    autoPlay 
    infiniteLoop
     interval={1000} 
    showStatus={false}
     showThumbs={false}
     showArrows={false}
      >
     
     <Box w="full" h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}>
        Wash tha Clothes Peaple
        </Heading>
         </Box>

          
     <Box w="full" h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={"blackAlpha.6"} color={'white'}{...headingOptions}>
        Wash tha Clothes Peaple
        </Heading>
         </Box>

             
     <Box w="full" h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}>
        Wash tha Clothes Peaple
        </Heading>
         </Box>

             
     <Box w="full" h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}>
        Wash tha Clothes Peaple
        </Heading>
         </Box>

             
     <Box w="full" h={'100vh'}>
        <Image src={img5} />
        <Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}>
        Wash tha Clothes Peaple
        </Heading>
         </Box>
        </Carousel>

);

export default Home;