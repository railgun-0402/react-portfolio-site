import { requestStates } from '../constants';

// ４つの状態を変化させるアクションを定義
export const actionTypes = {
    initial: 'INITIAL',
    fetch: 'FETCHING',
    success: 'FETCH_SUCCESS',
    error: 'FETCH_ERROR'
}

export const initialState = {
    languageList: [],
    requestState: requestStates.idle,
}

export const skillReducer = (
    state, action
) => {
    switch (action.type) {
        case actionTypes.initial: {
            return {
                languageList: [],
                requestState: requestStates.initial
            }
        }
        // データ取得中
        case actionTypes.fetch: {
            return {
                ...state,
                requestState: requestStates.loading
            }
        }
        // データ取得成功
        case actionTypes.success: {
            return {
                languageList: action.payload.languageList,
                requestState: requestStates.success
            }
        }
        case actionTypes.error: {
            return {
                languageList: [],
                requestState: requestStates.error
              }
        }
        default: {
          throw new Error();
        }
    }
};