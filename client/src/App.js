import './App.css';
import Landing from './Pages/Landing';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Forgot from './Pages/Forgot';
import Navbar from './Components/Navbar';
import Transaction from './Pages/Transaction';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/transaction" element={<Transaction/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
