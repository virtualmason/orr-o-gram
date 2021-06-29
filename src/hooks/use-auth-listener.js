import React,{useState, useEffect, useContext} from  'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(()=>{

        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            //we have user to store in local

            if(authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser))
                setUser(authUser)
            } else {
                localStorage.removeItem('authUser');
                setUser(null)
            }
        })
    
      return () => listener();
    },[firebase]);
    return { user };

}
