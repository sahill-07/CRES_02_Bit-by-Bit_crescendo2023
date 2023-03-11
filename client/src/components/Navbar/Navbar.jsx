import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import coder_buddy_icon from "../../assets/coder_buddy_icon.png";
import { AccountDropDown } from './AccountDropDown/AccountDropDown';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import "../../config/firebase-config";
import { useDispatch } from 'react-redux';
import '../../config/firebase-config'
import { setUserDetailsSlice } from '../../store/UserDetailsSlice';
import { firebaseLogin } from '../../services/Firebase/Login';
import '../../style/Navbar.css'

export const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(getAuth(), async(user)=>{
          if(user !== null){
            setCurrentUser(true);
            const userDetail = {
              USER_EMAIL : user.email,
              USER_NAME : user.displayName
            }
            dispatch(setUserDetailsSlice(userDetail));
            // const serverResponse = await getUserDetails();
            // if(serverResponse.data){
            //   dispatch(setUserDetailsSlice(serverResponse.data));
            }
        //   }else setCurrentUser(null);
        })
      }, [])

      const googleLogin = ()=>{
        firebaseLogin();
      }
  return (
    <>
     <div className='flex flex-row justify-between' style={{width: '97vw', overflowX: 'hidden'}}>
          <div name="title" className="flex flex-row item-center content-center m-1 gap-1">
              <img src={coder_buddy_icon} className="w-14" alt="" />
              <div className="flex flex-col">
                <h1 className="flex content-center items-center text-blue-700 text-3xl">
                𝐒𝐭𝐮𝐝𝐞𝐧𝐭𝐇𝐮𝐛
                </h1>
                <h6 className="text-xs text-blue-400">Waapis Aoge Kab</h6>
              </div>
          </div>
          <ul className='flex flex-row justify-between content-center items-center gap-x-20 z-10'>
            <Link className={`nav text-gray-500`} to='/'>Home</Link>
            {
              (currentUser !== null) ? (<AccountDropDown/>)
              :
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2' onClick={googleLogin}>Login</button>
            }
          </ul>



        </div>
          <ul className='nav-mobile-items hidden flex-row justify-between content-center items-center gap-x-10 z-10 max-w-[100vw] overflow-scroll scrollbar-hide px-2 mb-2 shadow-md'>
            <Link className='nav-mobile' to='/'>Home</Link>
          </ul>

    </>
  )
}
