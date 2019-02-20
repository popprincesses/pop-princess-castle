import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Nav from "./nav.js";
import Login from './login.js';

var config = {
    apiKey: "AIzaSyACzuLtBRZiUe_bLfLZnHd3ypdf07zVtlk",
    authDomain: "pop-princesses.firebaseapp.com",
    databaseURL: "https://pop-princesses.firebaseio.com",
    projectId: "pop-princesses",
    storageBucket: "pop-princesses.appspot.com",
    messagingSenderId: "770430376686"
};
firebase.initializeApp(config);
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const dbRef = firebase.database().ref("users");
        //taking a snapshot of the firebase database
        dbRef.on("value", snapshot => {
            const data = snapshot.val();
            const userArray = [];
            for (let item in data) {
                //assigning the unique key given by firebase as a property on the user object
                data[item].key = item;
                userArray.push(data[item]);
            }
            this.setState({
                users: userArray
            });
        });
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Nav />
                <Login />
            </div>
        );
    }
}

export default App;