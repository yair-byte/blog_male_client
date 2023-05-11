import React, { useState } from 'react';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import Blog from './Components/Blog.jsx';
import Login from './Components/Login.jsx';

function App() {

  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  const [token, setToken] = useState("");

  const handleLogin = (tokenArg) => {
    setToken(tokenArg);
    setAdminLoggedIn(true);
  };

  const handleLogout = () => {
    setToken("");
    setAdminLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Blog isAdmin={adminLoggedIn} token={token} handleLogout={handleLogout} />} />
          <Route path="/login" element={ <Login onLogin={handleLogin} />} />
          <Route path="*" element={ <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
