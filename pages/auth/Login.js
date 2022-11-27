import React, {useEffect} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {auth} from '../../utils/firebase'
import {useRouter} from  'next/router'
import {useAuthState} from 'react-firebase-hooks/auth' // geting user Auth



const Login = () => {
     const route = useRouter();
     const [user, loading] = useAuthState(auth);// Any time you want to get a user 
      
     // Sign in with Google
     const googleProvider = new GoogleAuthProvider();
     const GoogleLogin = async () =>{
          try {
               const result = await signInWithPopup(auth, googleProvider);
               route.push("/");
          } catch (error) {
            console.log(error);
          }
     }

     // useEffect runs every user changes back to home dir.
     useEffect(() => {
          if (user) { 
          route.push("/");  // redirect ( route.push("/"))
          } else {
               console.log("login");
          }
     },[user]);   

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-7">
    <h2 className="text-2xl font-medium">Join Today</h2>
    <div className="py-4">
     <h3 className="py-4">Sign in</h3>
     <button  onClick={GoogleLogin} className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
     <FcGoogle className="text-2xl"/>
     Sign with Google
     </button>
    </div>
   </div>
  )
}

export default Login