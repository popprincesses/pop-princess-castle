import React, { Component } from "react";
import firebase from 'firebase';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createUser = this.createUser.bind(this)
    }

    componentDidMount() {

    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value 
        });
    }

    createUser(e) {
        e.preventDefault();
        
        const { email, password } = this.state;
        
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            
            const dbRef = firebase.database().ref("users");

            dbRef.push(newUser)
        })
    }

    render() {
        return (
            <form onSubmit={this.createUser}>
                <label>
                    Name:
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </label>
                {/* <label>
                    Confirm Password:
                    <input
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                    />
                </label> */}
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreateAccount;