import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';

// Firebase
import { auth } from './firebase/config';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProjectDetails from './pages/ProjectDetails';
import TaskDetails from './pages/TaskDetails';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Components
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/Auth/PrivateRoute';
import Loading from './components/UI/Loading';

// Theme Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Once the auth state is determined (either logged in or not), mark as initialized
    if (!loading) {
      setInitialized(true);
    }
  }, [loading]);

  // Show loading spinner while authentication state is being determined
  if (!initialized) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          
          {/* Protected routes */}
          <Route element={<Layout />}>
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            
            <Route path="/projects/:projectId" element={
              <PrivateRoute>
                <ProjectDetails />
              </PrivateRoute>
            } />
            
            <Route path="/tasks/:taskId" element={
              <PrivateRoute>
                <TaskDetails />
              </PrivateRoute>
            } />
            
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
          </Route>
          
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 