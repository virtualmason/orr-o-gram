import { useState, useContext, useEffect} from 'react';
import FirebaseContext from '../context/firebase';
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress ==='';

useEffect(() => {
    document.title = 'Login - Orr-O-Gram';
})//add[] so it runs only wwhen varible changes
    return <p>I am the login page</p>
}