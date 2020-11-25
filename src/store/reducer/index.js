import React from 'react';

const GET_TOKEN = "GET_TOKEN";
const GET_POSTS = "GET_POSTS";
const GET_FRIENDS = "GET_FRIENDS";
const GET_MY_PROFILE = "GET_MY_PROFILE";
const ADD_POST = "ADD_POST";

const initialState = {
    token: null,
    posts: [],
    friends: [],
    myProfile: [],
}


export const motionReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TOKEN:
            console.log("cool ", action.payload)
            return { ...state, token: action.payload }

        case GET_POSTS:
            console.log("here in the posts ", action.payload)
            return { ...state, posts: action.payload }

        case GET_FRIENDS:
            console.log("here in my friends ", action.payload)
            return { ...state, friends: action.payload }

        case GET_MY_PROFILE:
            console.log("here in my profile ", action.payload)
            return { ...state, myProfile: action.payload }

        case ADD_POST:
            console.log("here new post ", action.payload)
            return { ...state, posts: [action.payload, ...state.posts] }


        default:
            return state;
    }

}

export default motionReducer