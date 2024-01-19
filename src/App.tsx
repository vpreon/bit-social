import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from './routes';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
