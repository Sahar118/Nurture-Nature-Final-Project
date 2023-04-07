import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Login,
  Register,
  Home
} from './pages/index.js'
import ProtectsRoute from './components/ProtectsRoute.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectsRoute> <Home /></ProtectsRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
