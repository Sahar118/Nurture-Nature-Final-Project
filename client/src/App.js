import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Login,
  Register,
  Home,
  Chat,
  Events,
  News,
  Admin,
  Profile,
  AboutTheEvent,
  SavedEvents,
  GetEventByDistrict,
  EventsInSouthern,
  EventInCenteral,
  EventsInNorth
} from './pages/index.js'
import ProtectsRoute from './components/ProtectsRoute.js';
import { useSelector } from 'react-redux';
import ReportsList from './pages/profile/ReportsList.js';
import LoadingLogo from './components/LoadingLogo.js';

function App() {
  const { loading } = useSelector((state) => state.loaders)
  return (
    <div>
      {loading && (
        <div className='loader-parent'>
          <LoadingLogo />
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectsRoute> <Home /></ProtectsRoute>} />
          <Route path='/report' element={<ProtectsRoute><ReportsList /> </ProtectsRoute>} />
          <Route path='/chat' element={<ProtectsRoute><Chat /> </ProtectsRoute>} />
          <Route path='/events' element={<ProtectsRoute><Events /> </ProtectsRoute>} />
          <Route path='/event/:id' element={<ProtectsRoute><AboutTheEvent /> </ProtectsRoute>} />
          <Route path='/event/by-district' element={<ProtectsRoute><GetEventByDistrict /> </ProtectsRoute>} />
          <Route path='/event/saved-event' element={<ProtectsRoute><SavedEvents /> </ProtectsRoute>} />
          <Route path='/events/north' element={<ProtectsRoute><EventsInNorth /> </ProtectsRoute>} />
          <Route path='/events/central' element={<ProtectsRoute><EventInCenteral /> </ProtectsRoute>} />
          <Route path='/events/southern' element={<ProtectsRoute><EventsInSouthern /> </ProtectsRoute>} />
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
