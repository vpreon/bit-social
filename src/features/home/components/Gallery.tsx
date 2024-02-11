import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Media } from '../types';

export const Gallery = (props: { medias: Media[] }) => {
  const [primaryImage, setPrimaryImage] = useState<Media>();
  const [secondaryImage, setSecondaryImage] = useState<Media>();
  const [slideImage, setSlideImage] = useState<Media[]>([]);

  useEffect(() => {
    if (props.medias.length) {
      setPrimaryImage(props.medias[0]);
    }
    if (props.medias.length > 1) {
      setSecondaryImage(props.medias[1]);
    }

    if (props.medias.length > 2) {
      setSlideImage(props.medias.slice(2));
    }
  }, [props.medias]);

  useEffect(() => {
    if (slideImage?.length) {
      setSecondaryImage(slideImage.shift());
    }
  }, [slideImage]);

  const triggerClick = () => {
    if (primaryImage) {
      setSlideImage((prev) => [...prev, primaryImage]);
    }
    setPrimaryImage(secondaryImage);
    setSecondaryImage(undefined);
  };

  return (
    <Box position="relative">
      <Image src={primaryImage?.image as string} />
      <Box
        position="absolute"
        top="10px"
        right="10px"
        width={'72px'}
        height={'96px'}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        boxShadow="2xl"
        onClick={triggerClick}
        backgroundImage={`url('${secondaryImage?.image}')`}
      ></Box>
    </Box>
  );
};
