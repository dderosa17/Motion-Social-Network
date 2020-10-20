import React from 'react';
import { connect } from 'react-redux';
import Style from './style'

import IMGCREATEPOST from '../../images/images/users/jennifer.png';
import SENDBUTTON from '../../images/images/svgs/send_button.svg';




class ContentPostPage extends React.Component {
    // constructor(props) {
    //     super(props)
    // }


    componentDidMount() {

        let config = {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAzMTg5Nzc5LCJqdGkiOiJjNWNjYjhjOTlkMDM0OTJiOGY4ZGVjNDcwYjI5NzAxZSIsInVzZXJfaWQiOjE2fQ.fWPW8BULXvqJ6wb8kyVZsxdpuof9z5eJMps4nohf_NE",
                "Content-Type": "application/json"
            }

        }

        fetch("https://motion.propulsion-home.ch/backend/api/social/posts/", config)
            .then(respone => respone.json())
            .then(data => {

                this.props.dispatch({ type: "GET_POSTS", payload: data })
            })
    }

    render() {
        console.log("state : ", this.state);


        return (

            <Style.mainContainerPost>
                <Style.containerPosts>

                    <Style.createPost>
                        <Style.imgCreatePost src={IMGCREATEPOST}>
                        </Style.imgCreatePost>
                        <Style.addPostField type="text" placeholder="What’s on your mind, Jennifer?" onFocus={(e) => this.togglePopup()}></Style.addPostField>
                        <Style.divSendPost>
                            <Style.sendButton src={SENDBUTTON}></Style.sendButton>
                        </Style.divSendPost>
                    </Style.createPost>

                    {
                        this.props.posts.map(elem => {

                            return <Style.postRightSideUp >
                                <Style.mainContentPersonalInfo>
                                    <Style.contentAvatar>
                                        <img style={{ borderRadius: "100%", width: "2.5rem", height: "2.5rem" }} src={elem.user.avatar ? elem.user.avatar : "https://image.flaticon.com/icons/png/512/149/149071.png"} alt="profile" />
                                    </Style.contentAvatar>
                                    <Style.contentNameUserName>
                                        <div><b>{elem.user.first_name} {elem.user.last_name} </b></div>
                                        <div style={{ opacity: "0.4" }}>{elem.created}</div>
                                    </Style.contentNameUserName>
                                    <div style={{ marginLeft: "auto" }}>
                                        <i className="fa fa-ellipsis-v"></i>
                                    </div>
                                </Style.mainContentPersonalInfo>
                                <div style={{ display: "flex", padding: "1rem" }}>{elem.content}</div>
                                <Style.contentShareLike>
                                    <i style={{ opacity: "0.3" }} class="fas fa-heart"></i>
                                    <div style={{ opacity: "0.5", marginLeft: "3%" }}>Like</div>
                                    <i style={{ opacity: "0.3", marginLeft: "5%" }} class="fas fa-share"></i>
                                    <div style={{ marginLeft: "2%", opacity: ".5" }}>Share</div>
                                    <div style={{ marginLeft: "auto", opacity: "0.5" }}>0 like</div>
                                </Style.contentShareLike>

                            </Style.postRightSideUp>

                        })

                    }
                    {/* <Style.postRightSideDown></Style.postRightSideDown> */}

                </Style.containerPosts>
            </Style.mainContainerPost >
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("in the posts state: ", state);
    console.log("my test", state.posts)
    return {
        token: state.token,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ContentPostPage)