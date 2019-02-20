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
    }
}

export default Login;
