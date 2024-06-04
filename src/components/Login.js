import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const auth = getAuth();
 const [isSignInForm, setisSignInForm] = useState(true);
 const [errorMsg, setErrorMsg] = useState("");

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {

      console.log(email.current.value);
      console.log(password.current.value);
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMsg(message);
      if(message) return;

      if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/150458157?s=400&v=4"
        }).then(() => {
          const {uid, email, displayName, photoURL} = user;
          //console.log(uid, email, displayName, photoURL);
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
          console.log(user);
          // Profile updated!
          // ...
        }).catch((error) => {
          setErrorMsg(error.message);
          // An error occurred
          // ...
        });
        console.log(user);
        

        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMsg(errorCode + "-" + errorMessage);
        // ..
        });


      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });

      }
      
    }

  const toggleBtn = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Background"/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute py-16 px-20 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold text-3xl py-2 my-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className='py-5 px-3 my-4 w-full rounded-lg bg-gray-700 border'/>}
        <input ref={email} type="text" placeholder='Email Addres' className='py-5 px-3 my-4 w-full rounded-lg bg-gray-700 border'/>
        <input ref={password} type="password" placeholder='Password' className='py-5 px-3 my-4 w-full rounded-lg bg-gray-700 border'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
        <button className='py-5 my-4 w-full bg-red-600 rounded-lg border' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
        <p>{isSignInForm ? "New to Netflix?" : "User exits!"} <span onClick={toggleBtn}>{isSignInForm ? "Sign up" : "Sign in"}</span> here.</p>
      </form>
    </div>
  )
}

export default Login;

