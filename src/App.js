import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './Component/pages/Logout/Logout';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import Loading from './Component/pages/Loading/Loading';
import PageNotFound from './Component/pages/PageNotFound/PageNotFound';

// Lazy load the components
const Home = lazy(() => import('./Component/pages/Home/Home'));
const Login = lazy(() => import('./Component/Auth/Login/Login'));
const Register = lazy(() => import('./Component/Auth/Register/Register'));
const CreateTeam = lazy(() => import('./Component/Auth/CreateTeam/CreateTeam'));
const OtpVerification = lazy(() => import('./Component/Auth/OtpVerification/OtpVerification'));
const ChatBot = lazy(() => import('./Component/User/ChatBot/ChatBot'));
const QuestionDisplay = lazy(() => import('./Component/User/QuestionDisplay/QuestionDisplay'));


function App() {
    return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/createTeam" element={<CreateTeam />} />
              <Route path="/otpVerification" element={<OtpVerification />} />
                <Route path="/chatBot" element={<ProtectedRoutes component={ChatBot} />} />
              <Route path="/questionDisplay" element={<ProtectedRoutes component={QuestionDisplay} />} />
              <Route path="/logout" element={<ProtectedRoutes component={Logout} />} />
              <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
