import React from 'react';
import styled from '../Profile/style';
import Style from './style';
import LOGO from '../../images/images/logo_white.png';

class Registration extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <h1>Ok</h1>

            // <Style.MainContainerRegistration>
            //     <Style.ContentWriteWelcome>
            //         <Style.WriteWelocome>Welcome to Motion Regitration</Style.WriteWelocome>
            //     </Style.ContentWriteWelcome>
            //     <Style.ContainerDataRegistration>
            //         <Style.ContentLeftSide>
            //             <Style.ContentFirstLastName>
            //                 <Style.FistName type="text" placeholder="First Name"></Style.FistName>
            //                 <Style.LastName type="text" placeholder="Last Name"></Style.LastName>
            //             </Style.ContentFirstLastName>
            //             <Style.ContentEmail>
            //                 <Style.Email type="email" placeholder="Email"></Style.Email>
            //             </Style.ContentEmail>
            //             <Style.ContentPassword>
            //                 <Style.Password type="password" placeholder="Password"></Style.Password>
            //                 <Style.ConfirmPassword type="password" placeholder="Confirm Password"></Style.ConfirmPassword>
            //             </Style.ContentPassword>
            //             <Style.ContentSendButton>
            //                 <Style.ButtonSubmitRegidtration type="button" value="Send"></Style.ButtonSubmitRegidtration>
            //             </Style.ContentSendButton>
            //         </Style.ContentLeftSide>
            //         <Style.ContentRightSide>
            //             <Style.ContentTextMotion>
            //                 <Style.TextMotionRegistration>Motion</Style.TextMotionRegistration>
            //             </Style.ContentTextMotion>
            //             <Style.ContentLogo>
            //                 <Style.ImageMotionRegistration src={LOGO}></Style.ImageMotionRegistration>
            //             </Style.ContentLogo>
            //         </Style.ContentRightSide>
            //     </Style.ContainerDataRegistration>
            // </Style.MainContainerRegistration>
        )
    }
}


export default Registration