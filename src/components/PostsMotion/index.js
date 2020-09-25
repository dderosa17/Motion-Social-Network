import React from 'react';
import { connect } from 'react-redux';
import Style from './style'

import IMGCREATEPOST from '../../images/images/users/jennifer.png';
import SENDBUTTON from '../../images/images/svgs/send_button.svg';



class Posts extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log("in da props test :", this.props)
        return (

            <Style.mainContainerPost>
                <Style.containerPosts>
                    <Style.contLeftSide>
                        <Style.createPost>
                            <Style.imgCreatePost src={IMGCREATEPOST}>
                            </Style.imgCreatePost>
                            <Style.addPostField type="text" placeholder="What’s on your mind, Jennifer?"></Style.addPostField>
                            <Style.divSendPost>
                                <Style.sendButton src={SENDBUTTON}></Style.sendButton>
                            </Style.divSendPost>
                        </Style.createPost>
                        <Style.postLeftSide>
                            <Style.fisrtBlock>
                            </Style.fisrtBlock>
                            <Style.seconBlock>
                            </Style.seconBlock>
                            <Style.thirdBlock>
                            </Style.thirdBlock>
                            <Style.fourthBlock>
                            </Style.fourthBlock>


                            {/* {
                                this.props.posts.map(elem => {
                                    // console.log(elem);
                                    return <span>{}</span>
                                })
                            } */}
                        </Style.postLeftSide>
                    </Style.contLeftSide>
                    <Style.contRightSide>
                        <Style.postRightSideUp>
                        </Style.postRightSideUp>
                        <Style.postRightSideDown></Style.postRightSideDown>
                    </Style.contRightSide>
                </Style.containerPosts>
            </Style.mainContainerPost>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("in the posts state: ", state);

    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts)