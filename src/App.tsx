import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppRoutes } from './routes';
import { store } from './stores';

const router = createBrowserRouter(AppRoutes);
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router}></RouterProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
