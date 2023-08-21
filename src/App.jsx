import './App.scss';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion as m } from 'framer-motion';

function App() {

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
