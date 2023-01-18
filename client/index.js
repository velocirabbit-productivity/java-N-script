import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from './context/useAuthContext';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<AuthProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </AuthProvider>);
