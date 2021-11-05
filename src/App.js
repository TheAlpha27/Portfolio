import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Section1 from './components/Section1';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Portfolio">
        <Section1 key="home" />
        </Route>
        <Route exact path="/about">
          <About key="about" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
