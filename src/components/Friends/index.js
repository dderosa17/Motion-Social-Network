import React from 'react';
import { Logout, MainContainer } from './style';
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
import { SecondNav } from './style';
import { ContainerAllItems } from './style';
import { SearchIcon } from './style';
import { SearchField } from './style';
import { SectionSearchField } from './style';
import { SectionButtons } from './style';
import { LikedButton } from './style';
import { FriendsButton } from './style';
import { FollowButton } from './style';
import { LineUnderPosts } from './style';
import { ContentFriends } from "./style";
import { MainContentInfoFriends } from "./style";
import { LoginProfileSecontion } from "./style";
import { Profile } from "./style";
import { logout } from "./style";
import MOTIONLOGO from '../../images/images/logo.png';
import POSTLOGO from '../../images/images/posts_logo.png';
import FRIENDSLOGO from '../../images/images/svgs/icon-friends.svg';
import BELL from '../../images/images/svgs/notification_bell.svg';
import AVATAR from '../../images/images/users/jennifer.png';
import MENU from '../../images/images/svgs/menu.svg';
import ICONSEARCH from '../../images/images/svgs/search_icon.svg';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import "./style"


class Friends extends React.Component {

    constructor() {
        super();
        this.state = {
            showProfileLogin: false
        }
    }

    stateTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    handleProfileLogin = () => {
        this.setState({
            showProfileLogin: !this.state.showProfileLogin
        })
    }

    componentDidMount = () => {

        const config = {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAzMTg5Nzc5LCJqdGkiOiJjNWNjYjhjOTlkMDM0OTJiOGY4ZGVjNDcwYjI5NzAxZSIsInVzZXJfaWQiOjE2fQ.fWPW8BULXvqJ6wb8kyVZsxdpuof9z5eJMps4nohf_NE",
                "Content-Type": "application/json"
            }
        }

        fetch("https://motion.propulsion-home.ch/backend/api/social/friends/", config)
            .then(response => response.json())
            .then(data => {

                this.props.dispatch({ type: "GET_FRIENDS", paylod: data })
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
                        <ImgProfile src={AVATAR} onClick={this.handleProfileLogin}></ImgProfile>
                        {this.state.showProfileLogin ?
                            <LoginProfileSecontion>
                                <Link to="/profile" style={{ textDecoration: "none", color: "black" }}><Profile><i class="fas fa-user-circle" style={{ marginLeft: "15%", marginRight: "8%" }}></i><span>Profile</span></Profile></Link>
                                <Link to="/" style={{ textDecoration: "none", color: "black" }}><Logout><i class="fas fa-sign-out-alt" style={{ marginLeft: "15%", marginRight: "8%" }}></i>Logout</Logout></Link>
                            </LoginProfileSecontion>
                            : null
                        }
                        <Menu src={MENU}></Menu>
                    </SectionProfileNot>
                </Navbar>
                <SecondNav>
                    <SectionSearchField>
                        <SearchIcon src={ICONSEARCH}></SearchIcon>
                        <SearchField type="text" placeholder="Search posts..."></SearchField>
                    </SectionSearchField>
                    <SectionButtons>
                        <LikedButton>Liked</LikedButton>
                        <FriendsButton>Friends</FriendsButton>
                        <FollowButton>Follow</FollowButton>
                    </SectionButtons>
                </SecondNav>
                <ContainerAllItems>
                    <ContentFriends>
                        {
                            this.stateTest.map(elem => {

                                return < MainContentInfoFriends>Friend {elem}</MainContentInfoFriends>
                            })

                        }
                    </ContentFriends>
                </ContainerAllItems>
            </MainContainer >
        )
    }
}


const mapStateToPros = (state) => {
    console.log("friends setion:", state.token)
    return {
        token: state.token,
        friends: state.friends
    }
}

export default connect(mapStateToPros)(Friends)