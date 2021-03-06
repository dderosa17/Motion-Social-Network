import styled from 'styled-components'
import coverImage from '../../images/images/COVER3.jpg'

export const MainContainer = styled.div`
    width:100%;
    height:100vh;
    // border: 2px solid black;
`

export const Navbar = styled.nav`
    display:flex;
    width:100%;
    height:80px;
    // border: solid 2px red;

`

export const SectionLogo = styled.section`
    display: flex;
    align-items:center;
    width: 15%;
    height:100%;
    // border: solid 2px yellow;

`

export const SectionPostFriends = styled.div`
    width:70%;
    height:100%;
    // border: solid 2px blue;
    display: flex;
    align-items: center;
`


export const SectionProfileNot = styled.div`
    display:flex;
    align-items:center;
    width: 15%;
    height:100%;
    // border: 2px solid green;

`

export const Logo = styled.img`
margin-left: 15%;

`

export const MotionText = styled.button`
    margin-left:5%;
    font-size:22px;
    border:none;
    background-color:white;
    // cursor:pointer;
    outline:none;
`

export const PostLogo = styled.img`
// no properties at the moment
`

export const PostText = styled.button`
    border:none;
    background-color:white;
    outline:none;
    margin-left:2%;
    cursor:pointer;
`

export const LineUnderPosts = styled.div`
    position:absolute;
    border:1px solid #AD73FD;
    width:84px;
    margin-top:5.5%;
    margin-right:2%;

`


export const FriendsLogo = styled.img`
    margin-left:7%;

`

export const FriendsText = styled.button`
    border:none;
    outline:none;
    background-color:white;
    // margin-left:1%;
    cursor:pointer;
    width:100px;
`

export const Bell = styled.img`
    cursor:pointer;
`

export const DivNotification = styled.div`
    height:21px;
    width:21px;
    border-radius:50%;
    background-color:#AD73FD;
    margin-bottom: 10%;
    text-align:center;
    
`

export const ImgProfile = styled.img`
    margin-left:20%;
    cursor:pointer;

`

export const Menu = styled.img`
    margin-left:10%;
    cursor:pointer;

`


export const ContainerAllItems = styled.section`
    height:150vh;
    width:100%;
    // border: 2px solid red;  
    background-color:#F2F2F2;
`
export const ConverImage = styled.section`
    height:15%;
    width:100%;
    // border: 2px solid red;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url(${coverImage})
`

export const MainContentProfile = styled.section`
        display:flex;
        justify-content: center;
        height:84%;
        width:100%;
        // border:2px solid blue;
`

export const ContentProfile = styled.section`
        display:flex;
        position:absolute;
        height:35%;
        width:61%;
        // border:2px solid red;
        background-color:white;
        margin-top:8%;
        margin-left:20%;
        border-radius:3px;
`

export const InfoProfile = styled.div`
    display:flex;
    flex-direction:column
    height:100%;
    width:28%;
    border:1px solid;
    border-color: transparent rgba(195, 181, 181, 0.36) transparent transparent;
`

export const InfoProfileHobbiesAbout = styled.div`
    display:flex;
    height:68%;
    width:100%;
    border:2px solid green;
    border:1px solid;
    border-color: transparent  transparent rgba(195, 181, 181, 0.36) transparent;
`

export const MainInfoProfile = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
`

export const GeneralInfo = styled.div`
    display:flex;
    height:30%;
    width:100%;
    // border:2px solid red;

`

export const LoginProfileSecontion = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    height:auto;
    width:9%;
    margin-left:2%;
    background-color:white;
    margin-top:8%;
    border-radius:5px;
    border: 1px solid #c4c3c2;
`
export const MyProfile = styled.div`
    display:flex;
    align-items:center;
    // justify-content:center;
    height:45px;
    margin-top:4%;
    cursor:pointer;
    // width:100%;
    
    &:hover {
        background-color:#F2F2F2;
    }

`

export const Logout = styled.div`
    display:flex;
    align-items:center;
    // justify-content:center;
    height:45px;
    cursor:pointer;
    margin-bottom:4%;
    &:hover {
            background-color:#F2F2F2;
        }

`

export default styled