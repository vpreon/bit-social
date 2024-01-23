import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppRoutes } from './routes';

const router = createBrowserRouter(AppRoutes);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
