import React, { Component } from "react";
import firebase from "firebase";
import Nav from "./nav.js";
import { createCipher } from "crypto";
import { stringify } from "querystring";
import { finished } from "stream";

class Login extends React.Component {

login(e) {
    e.preventDefault()
    console.log("Login Attempt")

    const email = e.target[0].value
    const password = e.target[1].value
    const validatePassword = e.target[2].value
    var errMessage = ""

    //validation
    if (email.indexOf("@loblaw.ca") < 2 ) {
        errMessage = "Please use a Loblaw email address"
console.log(errMessage)
        return errMessage
    }

    if (password !== validatePassword) {
        errMessage = "Passwords do not match"
        console.log(errMessage)
        return errMessage
    }

    console.log(email)
    console.log("attempting to auth")

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log("then: in then section")
        console.log(user.message)
        //console.log(user.message)
        })
    .catch(error => {
        console.log("catch: error caught - level 1")
        errMessage = "Error: " + error.message
        console.log(errMessage)
    })

    //e.target[3].value = errMessage
    //return errMessage

} // end login

render() {
    return (
    <div className="Login">
        <form action="#" onSubmit={(e) => this.login(e)}>
        <label>Email</label>
        <input type="email"/>
        <br></br>
        <label>Password</label>
        <input type="password"/>
        <br></br>
        <label>Retype Password</label>
        <input name="validatePassword" type="password"/>
        <br></br>
        <input type="submit"/>
        <br></br>
        </form>
    </div>
    );
} // end render


} // end login class


export default Login;