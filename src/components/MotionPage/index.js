import React from 'react'
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
import MOTIONLOGO from '../../images/images/logo.png';
import POSTLOGO from '../../images/images/posts_logo.png';
import FRIENDSLOGO from '../../images/images/svgs/icon-friends.svg';
import BELL from '../../images/images/svgs/notification_bell.svg';
import IMGPROFILE from '../../images/images/users/jennifer.png';
import MENU from '../../images/images/svgs/menu.svg';
import ICONSEARCH from '../../images/images/svgs/search_icon.svg'
import { connect } from 'react-redux';



// import * as myStyle from './style'



class MotionPage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {

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
                this.props.dispatch({ type: "GET_POSTS", payload: posts })
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
                        <PostText>Posts</PostText>
                        <LineUnderPosts></LineUnderPosts>
                        <FriendsLogo src={FRIENDSLOGO}></FriendsLogo>
                        <FriendsText>Find Friends</FriendsText>
                    </SectionPostFriends>
                    <SectionProfileNot>
                        <Bell src={BELL}></Bell>
                        <DivNotification>3</DivNotification>
                        <ImgProfile src={IMGPROFILE}></ImgProfile>
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
                </ContainerAllItems>
            </MainContainer >
        )
    };
}

const mapStateToPros = (state) => {
    // console.log("in this posts:", state.posts);
    return {
        token: state.token,
        posts: state.posts
    }
}

export default connect(mapStateToPros)(MotionPage)