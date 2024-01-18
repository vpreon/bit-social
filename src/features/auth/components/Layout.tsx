import { Grid, GridItem } from '@chakra-ui/react';
import * as react from 'react';

import LoginLogo from '@/assets/login-main.svg';

type LayoutProps = {
  children: react.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" h="100%">
      <GridItem>
        <img src={LoginLogo} alt="" />
      </GridItem>
      <GridItem>
        <div>{children}</div>
      </GridItem>
    </Grid>
  );
};
