import { useState, useContext, useEffect} from 'react';
import FirebaseContext from '../context/firebase';
import { useHistory, Link } from "react-router-dom";
import * as ROUTES from '../constants/routes';

export default function Login() {
    const history = useHistory();
    // const { firebase } = useContext(FirebaseContext) //???
    const { firebase } = useContext(FirebaseContext) //???

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError ] = useState('');
    const isInvalid = password === '' || emailAddress ==='';
    


const handleLogin = async (event) => {
    event.preventDefault();
   try {
       await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
       history.push(ROUTES.DASHBOARD)

   } catch (error) {
       setEmailAddress('');
       setPassword('');
       setError(error.message)

   }

}
useEffect(() => {
    document.title = 'Login - Orr-O-Gram';
},[])
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex flex-col w-3/5">
                <img src="/images/iphone-with-profile.jpeg" alt="iphone with instagram pic"/>
             </div>   
             <div className="flex flex-col w-2/5 items-center bg-white p-4 border border-grat-primary mb-4">
                 <div className="flex flex-col">
                 <h1 className="flex justify-center w-full">
                   <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4"/>      
                 </h1>
                 {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                 <form onSubmit={handleLogin} method="POST">
                 <input 
                     aria-label="Enter your email address"
                     type="text"
                     placeholder="Email address"
                     className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                     border border-gray-primary rounded mb-2"
                     onChange={({target}) => setEmailAddress(target.value) }
                     />
                   <input 
                     aria-label="Enter your password"
                     type="password"
                     placeholder="password"
                     className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2
                     border border-gray-primary rounded mb-2"
                     onChange={({target}) => setPassword(target.value) }
                     />
                     <button    disabled={isInvalid}
                     type="submit"
                     className={`bg-blue-500 text-white w-full rounded h-10 font-bold ${isInvalid && 'opacity-50'}`} >Log In</button>
                 </form>
             </div>
             <div className="flex mt-4 justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
    <p className="text-sm">Don't have an account?{' '}</p>
    <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">Sign up</Link>
             </div>
        </div>
        
      </div>
    )
}
