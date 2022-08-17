import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { Login } from './pages';
import Dashboard from './pages/dashboard';
import UserList from './pages/users';
import CreateUser from './pages/users/create';
import theme from './styles/config';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="login" element={<Login />} />

          <Route path="/" element={<App />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UserList />} />
            <Route path="users/create" element={<CreateUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
