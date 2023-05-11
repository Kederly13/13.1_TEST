import { PostsApi } from "api";
import { Dispatch } from 'redux';

import { useDispatch, useSelector } from 'react-redux';
import { Istore } from "./types";

interface

import { getErrorMessage } from "utils/getErrorMessage";

export const setNewsAction = (list: Istore['list'] ) => {
    return {
        type: 'news/setNews',
        payload,
    }
}

export const loadPosts = () => async (dispatch: Dispatch) => {
    try {
        const response = await PostsApi.getAll();
        dispatch(response);
    } catch (error) {
        return getErrorMessage(error);
    }
}