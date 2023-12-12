import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import LearningPaths from './pages/LearningPaths';
import Forum from './pages/Forum';
import Showcase from './pages/Showcase';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/learning-paths" component={LearningPaths} />
        <Route path="/forum" component={Forum} />
        <Route path="/showcase" component={Showcase} />
        <Route path="/user-profile" component={UserProfile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
