import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Login,
  Register,
  Home,
  Reports,
  Forum,
  Events,
  News,
  Admin,
  Profile
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
          <Route path='/report' element={<ProtectsRoute><Reports /> </ProtectsRoute>} />
          <Route path='/forum' element={<ProtectsRoute><Forum /> </ProtectsRoute>} />
          <Route path='/events' element={<ProtectsRoute><Events /> </ProtectsRoute>} />
          <Route path='/news' element={<ProtectsRoute><News /> </ProtectsRoute>} />
          <Route path='/admin' element={<ProtectsRoute> <Admin /></ProtectsRoute>} />
          <Route path='/profile' element={<ProtectsRoute> <Profile /></ProtectsRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
