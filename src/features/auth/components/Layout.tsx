import { Flex, Grid, GridItem } from '@chakra-ui/react';
import * as react from 'react';

import LoginLogo from '@/assets/login-main.svg';

type LayoutProps = {
  children: react.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" h="100%">
      <GridItem>
        <Flex justify="center" alignItems="center" h="100%" backgroundColor="#f0f0f0">
          <img src={LoginLogo} alt="" />
        </Flex>
      </GridItem>
      <GridItem>{children}</GridItem>
    </Grid>
  );
};
