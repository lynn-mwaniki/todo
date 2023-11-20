import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NotFound from './pages/NotFound';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route/>
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
