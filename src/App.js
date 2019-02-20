import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Nav from "./nav.js";

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
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>THIS IS THE HOME PAGE</h1>
      </div>
    );
  }
}

export default App;
