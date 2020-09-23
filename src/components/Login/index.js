import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css'
import PASSWORD from '../../images/images/svgs/password.svg'

class Login extends React.Component {

    state = {
        email: "",
        password: "",
    }

    emailOnChangeHandler = (event) => {
        this.setState({
            ...this.state, email: event.target.value
        })


    }

    passwordOnChangeHandler = (event) => {
        this.setState({
            ...this.state, password: event.target.value
        })
    }

    getLogin = () => {

        const headers = new Headers({
            "Content-type": "application/json"
        })
        const config = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: headers,

        }

        fetch('https://motion.propulsion-home.ch/backend/api/auth/token/', config)
            .then((response) => response.json())
            .then((data) => {
                console.log("in the fatch", data)
                if (data.access) {
                    console.log("in the props", this.props)
                    this.props.history.push("/MotionPage");

                }

            })


    }

    render() {

        return (

            <div className="container-login">
                <h1 className="sign-in">Sign In</h1>
                <i class="fas fa-user" id="username"></i>
                <input onChange={this.emailOnChangeHandler} type="text" placeholder="username"></input>
                <hr className="line"></hr>
                <img className="password" src={PASSWORD}></img><input onChange={this.passwordOnChangeHandler} type="password" placeholder="password" ></input>
                <button className="button-login" onClick={this.getLogin}>Log In</button>
            </div >
        )
    }
}

export default withRouter(Login);