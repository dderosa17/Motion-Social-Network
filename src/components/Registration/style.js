import styled from 'styled-components';

const MainContainerRegistration = styled.section`
    position:absolute;
    display:flex;
    flex-direction: column;
    z-index:2;
    height:45%;
    width:32%;
    border-radius:4px;
    // border:2px solid rgba(128, 128, 128, 0.295);
    border: solid 2px black;
    background-color:white;
    // margin-bottom:400px;
    margin-left:2%;

`

const ContentWriteWelcome = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    height:20%;
    width:100%;
    // border:2px solid green;

`

const WriteWelocome = styled.text`
    font-size:35px;
    font-family: 'Nunito', sans-serif;
`

const ContainerDataRegistration = styled.div`
    display:flex;
    // flex-direction:column;
    height:100%;
    widht:100%;
    // border:2px solid yellow;
`
const ContentLeftSide = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:70%;
    // border:2px solid black;
`
const ContentRightSide = styled.div`
    display:flex;
    flex-direction:column;
    // justify-content:center;
    height:100%;
    width:30%;
    border-radius:2px;
    // border:2px solid black;
    background-color:rgba(150, 102, 222, 0.918);
`

const ContentLogo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:auto;
    width:100%;
    // border:2px solid yellow;
`
const ContentTextMotion = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:45%;
    height:auto;
    width:100%;
    // border:2px solid yellow;
`

const ImageMotionRegistration = styled.img`
    width:70px;
    height:70px;
`
const TextMotionRegistration = styled.p`
    font-size:30px;
`

const ContentFirstLastName = styled.div`
    display:flex;
    justify-content:space-evenly;
    height:25%;
    width:100%;
    // border:gray solid 2px;
    align-items:center;
`

const FistName = styled.input`
    border-radius:5px;
    width:160px;
    height:25px;
    outline:none;
    border:1px solid rgba(100, 100, 100, 0.400);
`

const LastName = styled.input`
    border-radius:5px;
    width:160px;
    height:25px;
    outline:none;
    border:1px solid rgba(100, 100, 100, 0.400);
`


const ContentEmail = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:25%;
    width:100%;
    // border:2px solid green;
`

const Email = styled.input`
    width:300px;
    height:25px;
    outline:none;
    border-radius:5px;
    border:1px solid rgba(100, 100, 100, 0.400);
`

const ContentPassword = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:25%;
    width:100%;
    // border:2px solid blue;
`

const Password = styled.input`
    border-radius:5px;
    width:160px;
    height:25px;
    outline:none;
    border:1px solid rgba(100, 100, 100, 0.400);    
`

const ConfirmPassword = styled.input`
    border-radius:5px;
    width:160px;
    height:25px;
    outline:none;
    border:1px solid rgba(100, 100, 100, 0.400);    
`

const ContentSendButton = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:25%;
    width:100%;
    // border:2px solid black;
`

const ButtonSubmitRegidtration = styled.input`
    width:180px;
    height:35px;
    cursor:pointer;
    border-radius:30px;
    outline:none;
    border:transparent;
    background-color:rgb(165, 118, 251);
    &:hover{
        background-color:rgb(137, 73, 247);
    }
`

export default {
    MainContainerRegistration, ContentWriteWelcome, WriteWelocome, ContainerDataRegistration,
    ContentFirstLastName, FistName, LastName, ContentEmail, Email, ContentPassword, Password,
    ConfirmPassword, ContentSendButton, ButtonSubmitRegidtration, ContentLeftSide, ContentRightSide,
    ImageMotionRegistration, TextMotionRegistration, ContentLogo, ContentTextMotion,
}