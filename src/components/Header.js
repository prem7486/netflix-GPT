import React from 'react'
//import mySignOut from "../images/Sign-Out.png";
import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
const Header = () => {
  const nevigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      nevigate("/");
      // Sign-out successful.
    }).catch((error) => {
      nevigate("/error");
      // An error happened.
    });
  }
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
      {user && <div  className="p-2" >
        <img alt="Sign-Out" src={user?.photoURL} className="w-12 h-12"/>
        <button onClick={handleSignOut} className='font-extrabold'>(Sign Out)</button>
      </div>}
      </div>
  )
}

export default Header;
