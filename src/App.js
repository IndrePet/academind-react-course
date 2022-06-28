import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => !!state.user.token);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route
          path="/profile"
          element={
            <ProtectedRoute canAccess={isLoggedIn} redirect={'/'}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
