<<<<<<< HEAD
import React from 'react';
import firebase from 'firebase';
import Nav from './App';
import { Link } from "react-router-dom";
import "./login.css";

class Login extends React.Component{

    login(e){
        e.preventDefault();
        console.log("working");
        console.log(e.target);
        const email = e.target[0];
        const password = e.target[1];

        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user)
            // dbRefUsers.on('value', snapshot => {
            // })
        })
    }

    render(){
        return(
            <div className="login-wrapper">
                <h1>Welcome Back</h1>
                <h4>Log in to access your account</h4>
                <form className="login-form" action="#" onSubmit={(e) => this.login(e)}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Link className="forgot-password" to="/login/forgotpassword">Forgot password?</Link>
                    <input type="submit" value="Log in" />
                </form> 
            </div>
        );
=======
import React from 'react'
import firebase from 'firebase';
import Nav from './nav';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    login(e) {
        e.preventDefault();
        console.log("this is working")
        console.log(e.target)
        
        const email = e.target[0].value
        const password = e.target[1].value

        console.log(email)

    
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user)
            // dbRefUsers.on('value', snapshot => {
            
            // })
        
        })


        

    }
          
        
       
    
    render () {
        return (
            <div>
                <form action="#" onSubmit={(e) => this.login(e)} >
                    <input type="email"/>
                    <input type="password"/>
                    <input type="submit"  />
                </form>

                <Link to="/login/createAccount">Link</Link>
            </div>
        )
>>>>>>> 6f3a909ed15b03531be9b003c0918df72656c2cd
    }
}

export default Login;
