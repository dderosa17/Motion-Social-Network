import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../../store';
import { connect } from 'react-redux';
import './style.css'
import Registration from '../Registration'

class Login extends React.Component {





    render() {

        return (
            <>
                <div className="containerReg">
                    <div className="sign-up-container">
                        <p className="no-accout-text">Don't have an account?</p>
                        <button className="sign-up-button" onClick={this.handleRegistration}>Sign Up</button>
                    </div>
                </div>
                < div className="container-login" >
                    {
                        this.state.showRegistrationWindow ?
                            <Registration />
                            : false
                    }
                    <h1 className="sign-in">Sign In</h1>
                    <i class="fas fa-user" id="username"></i>
                    <input className="all-input" onChange={this.emailOnChangeHandler} type="text" placeholder="username"></input>
                    <hr className="line"></hr>
                    <i class="fas fa-lock" id="psw"></i>
                    <input className="all-input" onChange={this.passwordOnChangeHandler} type="password" placeholder="password" ></input>
                    <button className="button-login" onClick={this.getLogin}>Log In</button>
                </div >
            </>
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