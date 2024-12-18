import React from 'react';
import { Toaster } from 'sonner';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Home />
    </>
  );
};

export default App;
