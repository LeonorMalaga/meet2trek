import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meets" component={Meets} />
          <Route path="/profile-user" component={ProfileUser} />
          <Route path="/recommended-route" component={RecommendedRoute} />
          <Route path="/route-detail" component={RouteDetail} />
        </Switch>
     </Router>
    </AuthProvider>
  );
}