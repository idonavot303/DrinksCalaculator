import React from 'react';
import s from './App.module.scss';
import { FormContextProvider } from './context/FormContext';

const App: React.FC = () => {
  return (
    <FormContextProvider>
      <div className={s.app}></div>
    </FormContextProvider>
  );
};

export default App;
