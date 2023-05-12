import { NewsAPI } from 'api/NewsAPI';
import { AnyAction, Dispatch } from 'redux';

import { useDispatch, useSelector } from 'react-redux';
import { Istore } from "./types";



import { getErrorMessage } from "utils/getErrorMessage";

export const setNewsAction = (list: Istore['list'] ) => {
    return {
        type: 'news/setNews',
        payload: list,
    }
}

export const loadPosts = () => async (dispatch: Dispatch) => {
    try {
        const response = await NewsAPI.getAll();

        if (typeof response === 'string') {
            return getErrorMessage(response);
          } else {
            dispatch(setNewsAction(response.data));
          }

    } catch (error) {
        return getErrorMessage(error);
    }
}