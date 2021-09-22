import { combineReducers } from "redux";
import account from './account';
import grader from './grader';
import planner from './planner';

const reducers = combineReducers({
    account,
    grader,
    planner
});

export default reducers;