import {useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import {getUserById } from '..services/firebase';
import { getUserByUserId } from '../services/firebase';
export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
        const { user } = useContext(UserContext);

        useEffect(()=> {
            async function getUserObjByUserId() {
  // we fun we can cll (firebase srve gets use data based n the id
  //
  const [response] = await getUserByUserId(user.uid);
  setActiveUser(response)

            }
            if(user?.uid) {
                getUserObjByUserId();
            }
        }, [user]);

        return {user:activeUser};

}

//3:56