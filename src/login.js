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
    }
}

export default Login;
