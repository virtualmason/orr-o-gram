import { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
export default function Header() {
    //if usthentcate le them see the header  &&()
    const { firebase } = useContext(FirebaseContext);
   const { user } =  useContext(UserContext);
   console.log('user', user);
    return  <p>Hi from header</p>
}
//317