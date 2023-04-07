import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Login,
  Register,
  Home
} from './pages/index.js'
import ProtectsRoute from './components/ProtectsRoute.js';
import { useSelector } from 'react-redux';
function App() {
  const { loading } = useSelector((state) => state.loaders)
  return (
    <div>
      {loading && (
        <div className='loader-parent'>
          <div className='loader'>

          </div>
        </div>
      )}
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
