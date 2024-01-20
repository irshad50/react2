
import { Stack, Button, VStack, Heading, Text,} from '@chakra-ui/react';
import React, { useState } from 'react';


const Videos = () => {

const videosArr = [
'https://cdn.pixabay.com/vimeo/842348732/starry-sky-169951.mp4?width=1280&hash=e5539835d59fc7ffab8d6b18b75eba9e3a1da3ec',
'https://cdn.pixabay.com/vimeo/861403607/cows-179207.mp4?width=1280&hash=6292acf8ae69e0794b3631d9c24a6b9f4f9ec1e8',
'https://cdn.pixabay.com/vimeo/587646755/people-84973.mp4?width=1280&hash=93a991e13cdf577b48b30e8e6b12db918712fbaa',
'https://cdn.pixabay.com/vimeo/173062443/rose-3654.mp4?width=640&hash=a83b1ab31514810e4fecd9cacacb032b2e94508c',
'https://cdn.pixabay.com/vimeo/487508532/woman-58142.mp4?width=640&hash=4f7a3d0f4b4841aec72a3775c7092bd79829dc60'
];
const [videoSrc, setVideoSrc]  = useState(videosArr[0]);   
   
  return (

    <Stack direction={['column', 'row']} h={'100vh'}>
        <VStack w={'full'}>

            <video
                controls
                controlsList="nodownload"
                src={videoSrc}
                style={{
                    width: '100%',
                }}
                > </video>

            <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                <Heading>Simple Video 1</Heading>
                <Text>
                    This is a simple video for testing and start simple video This is Irshad
                </Text>
            </VStack>
        </VStack>

       <VStack w={['full', 'xl']}
       
       alignItems={'stretch'}
       p="8"
       spacing={'8'}
       overflowY={'auto'}
       > 
       {videosArr.map((item, index) => (

        <Button
         variant={'ghost'} 
         colorScheme={'purple'}
         onClick={() => setVideoSrc(item)}
         >
            Lecture {index + 1}
        </Button>

       ))}
       </VStack>
    </Stack>

  );
};
export default Videos;