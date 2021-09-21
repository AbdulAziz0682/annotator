import { combineReducers } from "redux";
import account from './account';
import grader from './grader';

const reducers = combineReducers({
    account,
    grader
});

export default reducers;