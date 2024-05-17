import './App.css';
import Landing from './Pages/Landing';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Forgot from './Pages/Forgot';
import Transaction from './Pages/Transaction';
import Home from './Pages/Home';
import Add from './Pages/Add';
import ContactUs from "./Pages/Contact";
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
          <Route path="/home" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
