import styled from 'styled-components'
import FIRSTIMG from '../../images/images/feedPics/image1.png';
import SECONDIMG from '../../images/images/feedPics/image2.png';
import THIRDIMG from '../../images/images/feedPics/image3.png';
import FOURTHIMG from '../../images/images/feedPics/image4.png';

// import Styled from 'styled-components'

const mainContainerPost = styled.main`
    display:flex;
    justify-content:center;
    width:100vw;
    height:100%;
    // border:solid 2px black;
    background-color:#F2F2F2;
`

const containerPosts = styled.section`
    display:flex;
    height:100%;
    width:75%;
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
    margin-right:3%;
    height:15%;
    margin-top:8%;
    // border: solid 2px blue;
    background-color:white;

`

const imgCreatePost = styled.img`
    width:10%;
    margin-left:4%;

`
const addPostField = styled.input`
        
        margin-left:5%;
        margin-top:5%;

`

const sendButton = styled.img`
    cursor:pointer;
    margin-top:35%;
    margin-left:8%;
`

const divSendPost = styled.div`
    width:60px;
    height:60px;
    border-radius:80px;
    background-color:#6E91F6;
    margin-left:24%;
    text-align:center;
    &:hover ${sendButton}{ 
        border-color:black;
    }
    
`

const postLeftSide = styled.section`
    display:flex;
    flex-wrap:wrap;
    height:75%;
    // border:solid 2px blue;
    margin-right:3%;
    margin-top:5%;
    background-color:white;
`

// creating the block inside the postLeftSide

const fisrtBlock = styled.div`
    margin-top:25%;
    height:33%;
    width:40%;
    border-radius:5px;
    // border:2px solid black;
    margin-left:7.8%;
    background-image:url(${FIRSTIMG});
    background-size:cover;
    background-position: center;

    `


const seconBlock = styled.div`
    margin-top:25%;
    height:33%;
    width:40%;
    border-radius:5px;
    // border:2px solid black;
    margin-left:3%;
    background-image:url(${SECONDIMG});
    background-size:cover;
    

`

const thirdBlock = styled.div`
    margin-top:-11%;
    height:33%;
    width:40%;
    border-radius:5px;
    // border:2px solid black;
    margin-left:7.8%;
    background-image:url(${THIRDIMG});
    background-size:cover;
    background-position: center;

`

const fourthBlock = styled.div`
    margin-top:-11%;
    height:33%;
    width:40%;
    border-radius:5px;
    // border:2px solid black;
    margin-left:3%;
    background-image:url(${FOURTHIMG});
    background-size:cover;
    background-position: center;
 
`



const postRightSideUp = styled.section`
    height:35%;
    // border: solid 2px green;
    margin-top:8%;
    margin-left:3%;
    background-color:white;
`

const postRightSideDown = styled.section`
    height:55%;
    // border:2px solid gray;
    margin-left:3%;
    margin-top:5%;
    background-color:white;

`

export default {
    mainContainerPost, containerPosts,
    contLeftSide, contRightSide, createPost,
    imgCreatePost, addPostField, divSendPost,
    sendButton, postLeftSide, postRightSideUp,
    postRightSideDown, fisrtBlock, seconBlock,
    thirdBlock, fourthBlock,
}