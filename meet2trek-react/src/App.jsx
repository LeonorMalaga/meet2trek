import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Meets from './pages/Meets';
import ProfileUser from './pages/ProfileUser';
import RecommendedRoute from './pages/RecommendedRoute';
import RouteDetail from './pages/RouteDetail';
import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/meets" element={<Meets />} />
          <Route path="/profile-user" element={<ProfileUser />} />
          <Route path="/recommended-route" element={<RecommendedRoute />} />
          <Route path="/route-detail" element={<RouteDetail />} />
        </Routes>
        {/* <Footer /> */ }
     </Router>
    </AuthProvider>
  );
}