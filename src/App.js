import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BloodBankPage from './pages/BloodBankPage';
import HospitalPage from './pages/HospitalPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '100vh' }}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/blood-banks" component={BloodBankPage} />
          <Route exact path="/hospitals" component={HospitalPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/policy" component={Policy} />
        </Switch>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
