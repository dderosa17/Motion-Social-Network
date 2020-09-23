import React from 'react'
import './style.css'
import LOGO from '../../images/images/logo.png'
import POSTLOGO from '../../images/images/posts_logo.png'
import FRIENDS from '../../images/images/svgs/icon-friends.svg'
import BELL from '../../images/images/svgs/notification_bell.svg'
import PROFILE from '../../images/images/users/jennifer.png'
import MENU from '../../images/images/svgs/menu.svg'
import SERCHICON from '../../images/images/svgs/search_icon.svg'

class MotionPage extends React.Component {
    render() {
        return (
            <>
                <main className="main-container">
                    <nav className="navbar-feed">
                        <span className="logo-section">
                            <img className="logo-feed" src={LOGO}></img>
                            <span className="text-motion-feed">Motion</span>
                        </span>
                        <section className="post-friends-secontion" >
                            <h1>hello</h1>
                            {/* <img src={POSTLOGO}></img>
                            <span className="posts">Posts</span>
                            <div className="line-post"></div>
                            <img className="friends-icon" src={FRIENDS} />
                            <span className="find-friends-text">Find Friends</span>
                            <div className="line-friends"></div> */}
                        </section>
                        <section className="notification-profile-section">
                            {/* <img className="notification-bell" src={BELL}></img>
                            <div className="number-notification">3</div>
                            <img className="face-profie" src={PROFILE}></img>
                            <img className="menu" src={MENU}></img> */}
                        </section>
                    </nav>
                    {/* <div className="container-motion">
                        <nav className="serch-bar">
                            <img className="search-icon" src={SERCHICON} />
                        </nav>
                    </div> */}
                </main>
            </>
        )
    }
}

export default MotionPage