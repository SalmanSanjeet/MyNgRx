import * as fromAction from '../actions';
import * as AppAction from '../actions/user-action';
import { User } from "src/app/models/user";

export interface UserReducerState{
    loading: boolean;
    loaded: boolean;
    error: boolean;
    users: User[];
}

const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    error: false,
    users: []
}

export function UserReducer(state = initialState, action: fromAction.Actions):UserReducerState{
    switch(action.type){
        case AppAction.USER_LIST_REQUEST:
            {
                return {...state, loading: true}
            }
        case AppAction.USER_LIST_ERROR:
            {
                return {...state, error: true, loading: false}
            }
        case AppAction.USER_LIST_SUCCESS:{
            const updatedUser = state.users.concat(action.payload.data);
            return {...state, loading: false, loaded: true, users: updatedUser, error: false}
        }
        default:{
            return state; 
        }
    }
}

export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getUsers = (state: UserReducerState) => state.users;
export const getError = (state: UserReducerState) => state.error;
