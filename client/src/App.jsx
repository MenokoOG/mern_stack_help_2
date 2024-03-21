import Navbar from './components/Navbar'
import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'

import Resources from './components/Resources';
import Planning from './components/Planning';
import MPage from './components/MPage';
import EPage from './components/EPage';
import RPage from './components/RPage';
import NPage from './components/NPage';
import { UserContext } from './context/userProvider'
import ProtectedRoute from './components/ProtectedRoute'
import { ThemeProvider } from './context/ThemeContext';




function App() {
  const { token, logout } = useContext(UserContext)

  return (
    <div className="App">
      <ThemeProvider>
        {token && <Navbar logout={logout} />}
        <Routes>
          <Route
            path='/'
            element={token ? <Navigate to='/profile' /> : <Auth />} />

          <Route path='/profile' element={
            <ProtectedRoute token={token} redirectTo="/">
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/resources"
            element={<ProtectedRoute token={token} redirectTo="/">
              <Resources />
            </ProtectedRoute>}
          />


          <Route path="/planning"
            element={<ProtectedRoute token={token} redirectTo="/">
              <Planning />
            </ProtectedRoute>}
          />


          <Route path="/m-page"
            element={<ProtectedRoute token={token} redirectTo="/">
              <MPage />
            </ProtectedRoute>}
          />


          <Route path="/e-page"
            element={<ProtectedRoute token={token} redirectTo="/">
              <EPage />
            </ProtectedRoute>}
          />


          <Route path="/r-page"
            element={<ProtectedRoute token={token} redirectTo="/">
              <RPage />
            </ProtectedRoute>}
          />


          <Route path="/n-page"
            element={<ProtectedRoute token={token} redirectTo="/">
              <NPage />
            </ProtectedRoute>}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App
