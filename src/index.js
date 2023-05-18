import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chaper_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import useCounter from './chapter_07/Accommodate';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './Chapter_08/Confirm Button';
import LandingPage from './Chapter_09/LandingPage';
import AttendanceBook from './Chapter_10/AttendanceBox';
import SignUp from './Chapter_11/SignUp';
import Calculator from './Chapter_12/Calculator';
import ProfileCard from './Chapter_13/ProfileCard';
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ProfileCard/>
    </React.StrictMode>
  );
  
  
// If you want to start measuring performance in your app, pass a function
// to log results (for exampEle: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();