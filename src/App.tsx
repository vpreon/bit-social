import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppRoutes } from './routes';

const router = createBrowserRouter(AppRoutes);
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
