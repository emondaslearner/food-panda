import React, { useState } from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig/firebaseConfig';
import { useHistory, useLocation } from 'react-router';
firebase.initializeApp(firebaseConfig);


const User = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/PlaceOrder" } };


    //sign in with google
    const signInGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem('user',JSON.stringify(user));
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setError(errorMessage)
        });
    }

    //sign in with facebook
    const signInFacebook = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem('user',JSON.stringify(user));
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setError(errorMessage)
        });
    }

    //check information
    const [checkUser,setTheUser] = useState({
        name:'',
        email:'',
        comPass:''
    });
    const [error,setError] = useState('');

    const checkInformation = (event) => {
        let isUserValid = true;
        if(event.target.name == 'email'){
            const emailVal = /\S+@\S+\.\S+/;
            isUserValid = emailVal.test(event.target.value);
            if(!isUserValid){
                setError('email is not valid')
            }else{
                setError('')
            }
        }
        if(event.target.name == 'pass'){
            if(event.target.value.length < 6){
                isUserValid = false;
            }
            if(!isUserValid){
                setError('password must be 6 character')
            }else{
                setError('')
            }
        }
        if(event.target.name == 'comPass'){
           const password =  document.querySelector('.comPass').value
            if(event.target.value == password){
                isUserValid = true;
            }else{
                isUserValid = false;
            }
            if(!isUserValid){
                setError('password is not matched')
            }else{
                setError('')
            }
        }
        if(isUserValid){
            const users = {...checkUser};
            users[event.target.name] = event.target.value;
            setTheUser(users);
        }
    }
    
    //update user name
    const updateName = () => {
        const userName = firebase.auth().currentUser;
        userName.updateProfile({
        displayName:checkUser.name,
        }).then(() => {
            console.log('ooo nice');
        }).catch((error) => {
        }); 
    } 

    //sign up with email password
    const submit = (event)=> {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(checkUser.email, checkUser.comPass)
        .then((userCredential) => {
            var user = userCredential.user;
            localStorage.setItem('user',JSON.stringify(user));
            updateName();
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setError(errorMessage)
        });
    }

    //have an account 
    const [account,setAccount] = useState(true);
    const haveAccount = () => {
        setAccount(!account);
    }

    //sign in
    const signIn = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(checkUser.email, checkUser.pass)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('user',JSON.stringify(user));
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setError(errorMessage);
        });
    }
    


    return (
        <div className="user">
            <img src="../image/logo.png" alt=""/>
            <p className="error">{error}</p>
            <form onSubmit={account ? submit : signIn} action="">
                {
                    account && <input name="name" onBlur={checkInformation} type="text" placeholder="Name" />
                }
                <input name="email" onBlur={checkInformation} type="email" placeholder="Email" />
                <input className="comPass" name="pass" onBlur={checkInformation} type="password" placeholder="Password" />
                {
                    account && <input name="comPass" onBlur={checkInformation} type="password" placeholder="Confirm Password" />
                }
                <input className="submit" type="submit" value={account ?'Sing in':'Sing up'} />
            </form>
            <i onClick={haveAccount} className="haveAccount">Already have an account</i>
            <button className="google-icon" onClick={signInGoogle} ><span><FontAwesomeIcon icon={faGoogle} /></span>Sing in with google</button>
            <button className="facebook-icon" onClick={signInFacebook} ><span><FontAwesomeIcon icon={faFacebook} /></span>Sing in with facebook</button>
        </div>
    );
};

export default User;