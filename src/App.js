import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Expenditure from './pages/Expenditure';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/expenditure' element={<Expenditure />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
