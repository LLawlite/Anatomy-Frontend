import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function OAuth2Redirect() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { jwt, user } = useAuth();

  useEffect(() => {
    if (jwt && user) {
      window.location.href = '/';
    }
  }, [jwt, user]);

  useEffect(() => {
    const handleOAuthRedirect = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');
      const username = params.get('username');
      const id = params.get('id');
      const roles = params.get('roles')?.split(',') || [];

      if (token && username && id) {
        try {
          // Save auth data
          await login({ jwtToken: token, username, id, roles });

          // Small delay (optional) to ensure state settles
          await new Promise((resolve) => setTimeout(resolve, 100));

          // Navigate after login
          navigate('/', { replace: true });
        } catch (error) {
          console.error('Error during login:', error);
          navigate('/login');
        }
      } else {
        console.error('OAuth2 redirect missing required parameters.');
        window.location.href = '/';
      }
    };

    handleOAuthRedirect();
  }, [location.search, login, navigate]);

  return <p>Logging you in...</p>;
}

export default OAuth2Redirect;
