// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePages/HomePage';
import Message from './pages/HomePages/Message';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="">
            <Routes>
              <Route path="/*" element={<HomePage/>}/>
              <Route path="/message" element={<Message/>}/>
              <Route path="/*" element={<Authentication/>}/>
              <Route path="/profile/:id" element={<Profile/>}/>
            </Routes> 
    </div>
  );
}

export default App;
