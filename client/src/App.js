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

function App() {
  var USER_DETAIL = useSelector((state)=> state.UserDetailsSlice);

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="*" element={<Homepage/>} />
          <Route exact path="my-profile" element={<ProfilePage USER_DETAIL={USER_DETAIL}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
