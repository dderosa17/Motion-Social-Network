import React from 'react'
import './style.css'
import Logo from '../../images/images/logo_white.png'
import Twitter from '../../images/images/svgs/twitter_icon.svg'
import Facebook from '../../images/images/svgs/facebook_icon.svg'
import Instagram from '../../images/images/svgs/instagram_icon.svg'
import Login from '../Login'

class MainPage extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="main-container">
                <div className="content-left">
                    <img className="logo" src={Logo}></img>
                    <div className="motion"><h1>Motion</h1></div>
                    <div className="text-left-side">
                        <p>Connect with friends and the world <br></br>around you with motion</p>
                    </div>
                    <div className="buttons" >
                        <button className="button"></button>
                        <button className="button-2"></button>
                    </div>
                    <div className="social-buttons">
                        <img className="twitter-button" src={Twitter}></img>
                        <img className="facebook-button" src={Facebook}></img>
                        <img className="instagram-button" src={Instagram}></img>
                    </div>
                </div>

                <div className="content-right">
                    <Login />
                </div>
            </main>
        )
    }
}

export default MainPage 