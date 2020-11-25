import React from 'react'
import './style.css'
import Logo from '../../images/images/logo_white.png';
import Twitter from '../../images/images/svgs/twitter_icon.svg';
import Facebook from '../../images/images/svgs/facebook_icon.svg';
import Instagram from '../../images/images/svgs/instagram_icon.svg';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class MainPage extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        email: "",
        password: "",
        showRegistrationWindow: false,
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

    handleRegistration = () => {
        this.setState({
            showRegistrationWindow: !this.state.showRegistrationWindow,
        })
    }

    triggerLoginButton = (e) => {
        e.preventDefault();
        console.log("here wo go")
        this.getLogin();
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
    render() {
        return (
            <main className="main-container">
                <div className="content-left">
                    <div className="content-logo-img">
                        <img src={Logo}></img>
                        <span className="motion">Motion</span>
                    </div>
                    <div className="text-left-side">
                        <p>Connect with friends and the world <br></br>around you with motion</p>
                    </div>
                    <div className="container-buttons">
                        <div className="buttons" >
                            <button className="button"></button>
                            <button className="button-2"></button>
                        </div>
                    </div>
                    <div className="container-social">
                        <div className="social-buttons">
                            <img className="twitter-button" src={Twitter}></img>
                            <img className="facebook-button" src={Facebook}></img>
                            <img className="instagram-button" src={Instagram}></img>
                        </div>
                    </div>
                </div>

                <div className="content-right">
                    {this.state.showRegistrationWindow ?
                        <div className="content-right-test">
                            <div className="containerReg">
                                <div className="sign-up-container">
                                    <div className="writeAccount"><p className="no-accout-text">Already have an account?</p></div>
                                    <div className="buttonRegistration"><button className="sign-up-button" onClick={this.handleRegistration}>Sign In</button></div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                    <div className="containerReg">
                        <div className="sign-up-container">
                            <div className="writeAccount"><p className="no-accout-text">Don't have an account?</p></div>
                            <div className="buttonRegistration"><button className="sign-up-button" onClick={this.handleRegistration}>Sign Up</button></div>
                        </div>
                    </div>
                    <form onSubmit={(e) => { this.triggerLoginButton(e) }} className="container-login" >

                        <h1 className="sign-in">Sign In</h1>
                        <i class="fas fa-user" id="username"></i>
                        <input className="all-input" onChange={this.emailOnChangeHandler} type="text" placeholder="username" />
                        <hr className="line"></hr>
                        <i class="fas fa-lock" id="psw"></i>
                        <input className="all-input" onChange={this.passwordOnChangeHandler} type="password" placeholder="password" />
                        <button type="submit" className="button-login" id="test">Log In</button>
                    </form >
                </div>
            </main>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("in my token", state)
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps)(withRouter(MainPage));
