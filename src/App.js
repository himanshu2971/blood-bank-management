
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BloodBankPage from './pages/BloodBankPage';
import HospitalPage from './pages/HospitalPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blood-banks" component={BloodBankPage} />
        <Route exact path="/hospitals" component={HospitalPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

