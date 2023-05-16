import { NewsAPI } from 'api/NewsAPI';
import { Dispatch } from 'redux';

import { Istore } from "./types";

import { getErrorMessage } from "utils/getErrorMessage";

export const setNewsAction = (list: Istore['list'] ) => {
    return {
        type: 'news/setNews',
        payload: list,
    }
};

export const setErrorNewsAction = (error: Istore['error'] ) => {
    return {
        type: 'news/setErrorNews',
        payload: error,
    }
};

export const loadPosts = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await NewsAPI.getAll();
        dispatch(setNewsAction(data));
    } catch (error) {
        dispatch(setErrorNewsAction(getErrorMessage(error)))
    }
};