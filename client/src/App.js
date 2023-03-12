import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Homepage } from './components/HomePage/Homepage';
import { ProfilePage } from './components/Navbar/AccountDropDown/ProfilePage';
import { useSelector } from 'react-redux';
import Header from './components/common/header/Header';
import { Quiz } from './components/Quiz/Quiz';
import { Android } from './components/android/android';
import { WebDev } from './components/WebDevelopment/WebDev';
import { Results } from './components/Results/Results';
import React from 'react';

function App() {
  var USER_DETAIL = useSelector((state)=> state.UserDetailsSlice);

  return (
    <>
      <Router>
        <div style={{backgroundColor: '#c1dde9'}}>

        <Header/>
        <Routes>
            <Route exact path="/" element={<Homepage/>} /> 
            <Route exact path="my-profile" element={<ProfilePage USER_DETAIL={USER_DETAIL}/>}/>
            <Route exact path="quiz" element={<Quiz/>}/> 
            <Route exact path='quiz/results' element={<Results/>}/>
            <Route exact path='quiz/results/android' element={<Android/>}/>
            <Route exact path='quiz/results/webdev' element={<WebDev/>}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
