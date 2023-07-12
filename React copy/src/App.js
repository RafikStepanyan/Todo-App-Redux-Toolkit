import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { UseRoutes } from './router';


function App() {
  return (
    <BrowserRouter>
      <UseRoutes/>
    </BrowserRouter>
  );
}

export default App;
