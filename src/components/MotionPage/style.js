import styled from 'styled-components'

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

export const MotionText = styled.span`
    margin-left:5%;
    font-size:22px;
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
    margin-left:2%;
    cursor:pointer;
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

`

export const Menu = styled.img`
    margin-left:10%;
    cursor:pointer;

`
// here starts the second navbar

export const SecondNav = styled.nav`
    display:flex;
    align-items:center;
    height:80px;
    width:100%;
    border:1px solid black;
    background-color:#F2F2F2;
    border-color: transparent transparent #C5CAC9 transparent;

`

export const SectionSearchField = styled.section`
    display:flex;
    align-items:center;
    // border: 2px solid red;
    width:75%;
    height:100%;
       
       
        
`
export const SectionButtons = styled.section`
    display:flex;
    align-items:center;
    width:25%;
    height:100%;
    // border: solid 2px blue;

`

export const SearchIcon = styled.img`
    margin-left:12%;
    

`

export const SearchField = styled.input`
    margin-left:1%;
    // border:solid red 2px;
    margin-top:1.5%;
  
`

export const LikedButton = styled.button`
    // border: solid 2px black;
    border:none;
    outline:none;
    background-color:#F2F2F2;
    cursor:pointer;

`

export const FriendsButton = styled.button`
    // border: solid 2px black;
    border:none;
    outline:none;
    background-color:#F2F2F2;
    margin-left:5%;
    cursor:pointer;

`

export const FollowButton = styled.button`
    // border: solid 2px black;
    border:none;
    outline:none;
    background-color:#F2F2F2;
    margin-left:5%;
    cursor:pointer;

`



export const ContainerAllItems = styled.section`
    height:100%;
    width:100%;
    // border: 2px solid red;
    background-color:#F2F2F2;
`

export default styled