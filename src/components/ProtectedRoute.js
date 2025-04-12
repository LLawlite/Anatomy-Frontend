import { Navigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';

function ProtectedRoute({ children }) {
  const { jwt } = useAuth();
  return jwt ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
