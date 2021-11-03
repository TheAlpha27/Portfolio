import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Section1 from './components/Section1';

function App() {
  return (
    <Router>
      <Navbar />
      <Section1 />
    </Router>
  );
}

export default App;
