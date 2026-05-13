import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check for the correct token key name
  const isAuthenticated = localStorage.getItem('accessToken') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;