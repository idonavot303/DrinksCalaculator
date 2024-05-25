import React from 'react';
import { FormContextProvider } from './context/FormContext';
import HomePage from './ui/pages/HomePage';

const App: React.FC = () => {
  return (
    <FormContextProvider>
      <HomePage />
    </FormContextProvider>
  );
};

export default App;
