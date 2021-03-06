import React from "react";
import {
    Bell, ContainerAllItems, DivNotification, FollowButton, FriendsButton,
    FriendsLogo, FriendsText, ImgProfile, LikedButton,
    Logo,
    MainContainer, Menu,
    MotionText,
    Navbar,
    PostLogo,
    PostText, SearchField, SearchIcon, SecondNav, SectionButtons,
    SectionLogo,
    SectionPostFriends, SectionProfileNot, SectionSearchField, LoginProfileSecontion, Profile, Logout
} from "./style";
import MOTIONLOGO from "../../images/images/logo.png";
import { Link } from "react-router-dom";
import POSTLOGO from "../../images/images/posts_logo.png";
import FRIENDSLOGO from "../../images/images/svgs/icon-friends.svg";
import BELL from "../../images/images/svgs/notification_bell.svg";
import AVATAR from "../../images/images/users/jennifer.png";
import MENU from "../../images/images/svgs/menu.svg";
import ICONSEARCH from "../../images/images/svgs/search_icon.svg";
import ContentPosts from "../ContentPosts";


class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showProfileLogin: false,
        }
    }

    handleProfileLogin = () => {
        this.setState({
            showProfileLogin: !this.state.showProfileLogin
        })
    }

    componentDidMount = () => {

        if (!localStorage.getItem("token")) {
            this.props.history.push("/Login");
        }
        const headers = new Headers({
            "Content-type": "application/json",
            "Authorization": `Bearer ${this.props.token}`,
        })

        const config = {
            method: "GET",
            headers: headers,

        }

        fetch('https://motion.propulsion-home.ch/backend/api/social/posts/', config)
            .then((response) => response.json())
            .then((data) => {
                const posts = data;
                // this.props.dispatch({ type: "GET_POSTS", payload: posts })
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
                        <Link to="/friends"><FriendsText>Find Friends </FriendsText></Link>
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
                    <ContentPosts />
                </ContainerAllItems>
            </MainContainer>
        )
    }
}

export default Posts