import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Router, Routes } from 'react-router';
import Homepage from './pages/Home/Homepage';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import Patients from './components/dashboard/pateints/Patients';
import Review from './components/dashboard/review/Review';
import Schedule from './pages/calculators/Calculators';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/dashboard/profile/Profile';
import Maindashboard from './components/dashboard/maindash/Maindashboard';
import Notfound from './pages/Notfound/Notfound';
import Calculators from './pages/calculators/Calculators';
import Register from './pages/register/Register';
import Userprofile from './components/dashboard/user-profile/Userprofile';
import UpdateProfile from './components/dashboard/user-profile/UpdateProfile';
import Notifications from './pages/Notifications/Notifications';
import Getappointment from './components/getappointment/Getappointment';
import Hospitalsurvey from './pages/Hospital-Survey/Hospitalsurvey';
import Accountreview from './pages/Accounts-Review/Accountreview';
import Earnings from './pages/Earnings/Earnings';
import Chat from './pages/chat/Chat';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}>
          <Route path='/' element={<Dashboard />}>
            <Route path='/' element={<Maindashboard />}></Route>
            <Route path='/patients' element={<Patients />}></Route>
            <Route path='/chat' element={<Chat />}></Route>
            <Route path='/accounts-review' element={<Accountreview />}></Route>
            <Route path='/review' element={<Review />}></Route>
            <Route path='/doctors' element={<Profile />}></Route>
            <Route path='/appointment' element={<Appointment />}></Route>
            <Route path='/earnings' element={<Earnings />}></Route>
            <Route path='/get-appointment' element={<Getappointment />}></Route>
            <Route path='/calculators' element={<Calculators />}></Route>
            <Route path='/notifications' element={<Notifications />}></Route>
            <Route path='/profile' element={<Userprofile />}></Route>
            <Route path='/update-profile' element={<UpdateProfile />}></Route>
            <Route path='/hospital-survey' element={<Hospitalsurvey />}></Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
