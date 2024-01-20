import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContant,
    DrawerCloseButton,
    Button,
    useDisclosure,
    DrawerContent,
    Stack,
   
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {

   const {isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
  <Button
  zIndex={"overlay"}
   pos={'fixed'} 
  top={'4'} 
  left={'4'}
   colorScheme="green"
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}
    >
    <BiMenuAltLeft  size={'20'} />
    </Button>
    
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Video Hub</DrawerHeader>
        <DrawerBody>
      <Stack alignItems={'flex-start'}>

      <Button
       onClick={onClose}
       variant={'ghost'}
        colorScheme={'green'}
        >
         <Link to={'/'}>Home</Link>

            </Button>
           

      
            <Button 
             onClick={onClose}
             variant={'ghost'} 
             colorScheme={'green'}
             >
              <Link to={'/Videos'}>Videos</Link>
            </Button>

            
      <Button  onClick={onClose}
       variant={'ghost'}
        colorScheme={'green'}
        >      
          <Link to={'/Videos?category=free'}>Free Video</Link>
            </Button>

       
      <Button  onClick={onClose} variant={'ghost'} colorScheme={'green'}>
              <Link to={'/upload'}>Uplode video</Link>
            </Button>
      </Stack>

      <Stack 
      pos={'absolute'} 
      bottom={'10'} 
      left={'0'}
        w={'full'}
        justifyContent={'space-evenly'}
        >
        <Button colorScheme={'green'}>
          <Link to={'/login'}>Log In</Link>
        </Button>

        <Button colorScheme={'green'} variant={'outline'}>
          <Link  to={'signup'}>Sign Up</Link>
        </Button>
      </Stack>

        </DrawerBody>
        </DrawerContent>
    </Drawer>
</>
  );
};

export default Header;
