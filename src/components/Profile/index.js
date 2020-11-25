import React from "react";
import { MainContainer } from './style';
import { Navbar } from './style';
import { Logo } from './style';
import { SectionLogo } from './style';
import { MotionText } from './style';
import { PostLogo } from './style';
import { SectionPostFriends } from './style';
import { PostText } from './style';
import { FriendsLogo } from './style';
import { FriendsText } from './style';
import { SectionProfileNot } from './style';
import { Bell } from './style';
import { DivNotification } from './style';
import { ImgProfile } from './style';
import { Menu } from './style';
import { ContainerAllItems } from './style';
import { LineUnderPosts } from './style';
import { ConverImage } from './style';
import { MainContentProfile } from './style';
import { ContentProfile } from './style';
import { InfoProfile } from './style';
import { GeneralInfo } from './style';
import { MainInfoProfile } from './style';
import { LoginProfileSecontion } from './style';
import { InfoProfileHobbiesAbout } from './style';
import { MyProfile } from './style';
import { Logout } from './style';
import MOTIONLOGO from '../../images/images/logo.png';
import POSTLOGO from '../../images/images/posts_logo.png';
import FRIENDSLOGO from '../../images/images/svgs/icon-friends.svg';
import BELL from '../../images/images/svgs/notification_bell.svg';
import IMGPROFILE from '../../images/images/users/jennifer.png';
import MENU from '../../images/images/svgs/menu.svg';
import ICONSEARCH from '../../images/images/svgs/search_icon.svg';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


class Profile extends React.Component {

    constructor() {
        super()
        this.state = {
            showProfileLogin: false,
        }
    }

    componentDidMount = () => {

        const config = {
            metohod: "GET",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAzMzcwMDIyLCJqdGkiOiIyNWZlNTIzZmQ1YTU0OTg2ODI0MjhiYTc1OTI4MjI5YiIsInVzZXJfaWQiOjE2fQ.E_MezDNJJ5wIq0tfzyEOZYKwO0sYtz8MmBF7ZE5am50",
                "Content-Type": "application/json"
            }
        }

        fetch("https://motion.propulsion-home.ch/backend/api/users/me/", config)
            .then(response => response.json())
            .then(data => {
                console.log("this is my profile:", data)
                this.props.dispatch({ type: "GET_MY_PROFILE", payload: data })
            })
    }

    handleProfileLogout = () => {
        this.setState({
            showProfileLogin: !this.state.showProfileLogin
        })

    }

    render() {
        return (
            <MainContainer>
                <Navbar>
                    <SectionLogo>
                        <Logo src={MOTIONLOGO} />
                        <MotionText>Motion</MotionText>
                    </SectionLogo>
                    <SectionPostFriends>
                        <PostLogo src={POSTLOGO}></PostLogo>
                        <Link to="/posts"><PostText>Posts</PostText></Link>
                        {/* <LineUnderPosts></LineUnderPosts> */}
                        <FriendsLogo src={FRIENDSLOGO}></FriendsLogo>
                        <Link to="/friends"><FriendsText>Find Friends</FriendsText></Link>
                    </SectionPostFriends>
                    <SectionProfileNot>
                        <Bell src={BELL}></Bell>
                        <DivNotification>3</DivNotification>
                        <ImgProfile src={IMGPROFILE} onClick={this.handleProfileLogout}></ImgProfile>
                        {this.state.showProfileLogin ?
                            <LoginProfileSecontion>
                                <Link to="/profile" style={{ textDecoration: "none", color: "black" }}><MyProfile><i class="fas fa-user-circle" style={{ marginLeft: "15%", marginRight: "8%" }}></i><span>Profile</span></MyProfile></Link>
                                <Link to="/" style={{ textDecoration: "none", color: "black" }}><Logout><i class="fas fa-sign-out-alt" style={{ marginLeft: "15%", marginRight: "8%" }}></i>Logout</Logout></Link>
                            </LoginProfileSecontion>
                            : null
                        }
                        <Menu src={MENU}></Menu>
                    </SectionProfileNot>
                </Navbar>
                <ContainerAllItems>
                    <ContentProfile>
                        <InfoProfile>
                            {/* {
                                this.props.profile.map(elem => {
                                    return <div style={{ height: "20%", width: "100%", backgroundColor: "black" }}>{elem}</div>
                                })

                            } */}
                        </InfoProfile>
                        <MainInfoProfile>
                            <InfoProfileHobbiesAbout></InfoProfileHobbiesAbout>
                            <GeneralInfo></GeneralInfo>
                        </MainInfoProfile>
                    </ContentProfile>
                    <ConverImage>
                    </ConverImage>
                    <MainContentProfile>
                    </MainContentProfile>
                </ContainerAllItems>
            </MainContainer>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("coooool", state.myProfile)
    return {
        token: state.token,
        profile: state.myProfile
    }
}

export default connect(mapStateToProps)(Profile)