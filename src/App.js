import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section1 from './components/Section1';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Section1 key="home" />
        </Route>
        <Route exact path="/about">
          <About key="about" />
        </Route>
        <Route exact path="/contact">
        <Contact key="contact"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;