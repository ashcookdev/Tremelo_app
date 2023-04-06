
//App.js
import { Authenticator } from '@aws-amplify/ui-react';

import { Protected } from './components/protected';
import { RequireAuth } from './requireauth';
import { Login } from './components/Login';
import { ProtectedSecond } from './components/secondprotected';
import { Home } from './components/Home';
import { Layout } from './components/layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './components/App.css';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;