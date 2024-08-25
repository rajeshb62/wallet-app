import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Home } from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <>
      <Home />
      <ToastContainer />
    </>
  </React.StrictMode>
);