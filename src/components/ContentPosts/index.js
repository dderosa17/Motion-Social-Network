import React from 'react';
import { connect } from 'react-redux';
import Style from './style'

import IMGCREATEPOST from '../../images/images/users/jennifer.png';
import SENDBUTTON from '../../images/images/svgs/send_button.svg';
import { object } from 'prop-types';




class ContentPostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contentPost: "",
            deletePost: false,
        }
    }

    sendNewPost = () => {

        const config = {
            method: "POST",
            body: JSON.stringify({ "id": 16, "email": "davidederosa17@gmail.com", "first_name": "davide", "last_name": "derosa", "username": "dderosa", "job": "ceo", "avatar": null, "banner": null, "location": "", "about_me": "", "things_user_likes": [], "logged_in_user_is_following": false, "logged_in_user_is_friends": false, "logged_in_user_is_rejected": false, "logged_in_user_received_fr": false, "logged_in_user_sent_fr": false, "amount_of_posts": 0, "amount_of_likes": 0, "amount_of_friends": 0, "amount_of_followers": 1, "amount_following": 0, "content": object.content = this.state.contentPost }),
            headers: {
                Authorization: `Bearer ${this.props.token}`,
                "Content-Type": "application/json"
            }
        }


        fetch("https://motion.propulsion-home.ch/backend/api/social/posts/", config)
            .then(respone => respone.json())
            .then(data => {

                this.props.dispatch({ type: "ADD_POST", payload: data })
            })

    }


    handleNewPost = (event) => {
        this.setState({
            contentPost: event.target.value,
        })
    }

    handleDelePost = () => {
        this.setState({
            deletePost: !this.state.deletePost,
        })
    }

    componentDidMount() {

        let config = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.props.token}`,
                "Content-Type": "application/json"
            }
        }

        fetch("https://motion.propulsion-home.ch/backend/api/social/posts/", config)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("social posts error");
                }
            })
            .then(data => {

                this.props.dispatch({ type: "GET_POSTS", payload: data })
            })
            .catch(error => {

                console.log("in my error", error);

            })
    }

    render() {
        // console.log("state : ", this.state);

        console.log(this.props.posts)
        return (

            <Style.mainContainerPost>
                <Style.containerPosts>

                    <Style.createPost>
                        <Style.imgCreatePost src={IMGCREATEPOST}>
                        </Style.imgCreatePost>
                        <Style.addPostField type="text" placeholder="What’s on your mind?" onChange={this.handleNewPost}></Style.addPostField>
                        <Style.divButtonPost onClick={this.sendNewPost}>
                            <Style.sendButton src={SENDBUTTON}></Style.sendButton>
                        </Style.divButtonPost>
                    </Style.createPost>

                    {

                        this.props.posts && this.props.posts.length > 0 &&
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
                                        {this.state.deletePost ?
                                            <div style={{ width: "auto", backgroundColor: "white", position: "absolute", marginBottom: "220px", borderRadius: "30px", marginLeft: "1%" }}>
                                                <button style={{ cursor: "pointer" }}><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                            : null

                                        }
                                        <i className="fa fa-ellipsis-v" style={{ cursor: "pointer" }} onClick={this.handleDelePost}></i>
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
    console.log("my test token", state.token)
    return {
        token: state.token,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ContentPostPage)