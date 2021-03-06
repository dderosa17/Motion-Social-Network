import styled from 'styled-components'
import FIRSTIMG from '../../images/images/feedPics/image1.png';
import SECONDIMG from '../../images/images/feedPics/image2.png';
import THIRDIMG from '../../images/images/feedPics/image3.png';
import FOURTHIMG from '../../images/images/feedPics/image4.png';



const mainContainerPost = styled.main`
    display:flex;
    justify-content:center;
    width:100vw;
    height:auto;
    // border:solid 2px black;
    background-color:#F2F2F2;
`

const containerPosts = styled.section`
    display:flex;
    flex-wrap: wrap;
    height:100%;
    width:65%;
    // border: solid yellow 2px;
`

const contLeftSide = styled.section`
    width:50%;
    height:100%;
    // border: solid 2px red;
    
`
const contRightSide = styled.section`
    width:50%;
    height:100%;
    // border: solid 2px red;
    
`

const createPost = styled.div`
    display:flex;
    align-items: center;
    // margin-right:1%;
    margin-left:5%;
    height:130px;
    width: 38%;
    margin-top:5.5%;
    // border: solid 2px blue;
    background-color:white;
    border-radius:5px;

`

const imgCreatePost = styled.img`
    width:10%;
    margin-left:4%;

`
const addPostField = styled.input`
        border:none;
        outline:none;
        margin-left:5%;
        margin-top:5%;

`

const sendButton = styled.img`
    margin-top:15%;
    margin-left:15%;
`

const divButtonPost = styled.button`
    width:45px;
    height:45px;
    border-radius:80px;
    background-color:#6E91F6;
    margin-left:25%;
    text-align:center;
    outline:none;
    cursor:pointer;
    border:none;
    // border:1px solid black;
    &:hover{ 
        background-color:#6C6CF3;
    }
    
`


const mainContentPersonalInfo = styled.div`
    display:flex;
    padding:1rem;
    align-items:center;

`

const contentAvatar = styled.div`

`
const contentNameUserName = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
`


const contentShareLike = styled.div`
    display:flex;
    padding:1rem;
`

const postRightSideUp = styled.section`
    height:auto;
    // border: solid 2px green;
    margin-top:3.5%;
    margin-left:5%;
    height:auto;
    width:38%;
    background-color:white;
    border-radius:8px;
`

const popUpDiv = styled.div`
    position:absolute;
    width:450px;
    height:200px;
    // border:solid 2px black;
    background-color:white;

`
export default {
    mainContainerPost, containerPosts,
    contLeftSide, contRightSide, createPost,
    imgCreatePost, addPostField, divButtonPost,
    sendButton, postRightSideUp,
    popUpDiv, mainContentPersonalInfo, contentAvatar,
    contentNameUserName, contentShareLike
}