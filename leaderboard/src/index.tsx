import { AppProvider } from '@providers/AppProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Create a Client
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
