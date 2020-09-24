import React from 'react';

const GET_TOKEN = "GET_TOKEN";
const GET_POSTS = "GET_POSTS";

const initialState = {
    token: [],
    posts: [],
}

export const motionReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_TOKEN":
            console.log("cool ", action.payload)
            return { ...state, token: [...state.token, action.payload] }
            break;
        case "GET_POSTS":
            console.log("here in the posts ", action.payload)
            return { ...state, posts: [...state.token, action.payload] }
            break;

        default:
            return state;
    }

}

export default motionReducer