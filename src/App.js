import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/font/font.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import CartPage from './Pages/CartPage';
import ImageUpload from './components/ImageUpload';
import CollectionPage from './Pages/CollectionPage';
import OAuth2Redirect from './components/Auth/OAuth2Redirect';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/collection/:categoryId" element={<CollectionPage />} />
        <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
