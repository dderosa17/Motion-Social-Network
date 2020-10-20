import React from 'react';

const GET_TOKEN = "GET_TOKEN";
const GET_POSTS = "GET_POSTS";
const GET_FRIENDS = "GET_FRIENDS";

const initialState = {
    token: null,
    posts: [],
    friends: [],
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

        default:
            return state;
    }

}

export default motionReducer