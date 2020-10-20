import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../../store';
import { connect } from 'react-redux';
import './style.css'

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
                    const token = data.access;
                    this.props.dispatch({ type: "GET_TOKEN", payload: token });
                    console.log("in the props", this.props)
                    localStorage.setItem("token", token)
                    this.props.history.push("/posts");

                }

            })


    }

    getRegistration = () => {
        console.log("works")
    }

    render() {

        return (


            <div className="container-login">
                <div className="sign-up-container">
                    <span className="no-accout-text">Don't have an account?</span>
                    <Link to="/Reagistration"><button className="sign-up-button" onClick={this.getRegistration}>Sign Up</button></Link>
                </div>
                <h1 className="sign-in">Sign In</h1>
                <i class="fas fa-user" id="username"></i>
                <input onChange={this.emailOnChangeHandler} type="text" placeholder="username"></input>
                <hr className="line"></hr>
                <i class="fas fa-lock" id="psw"></i>
                <input onChange={this.passwordOnChangeHandler} type="password" placeholder="password" ></input>
                <button className="button-login" onClick={this.getLogin}>Log In</button>
            </div >

        )
    }
}

const mapStateToProps = (state) => {
    console.log("in my token", state)
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps)(withRouter(Login));