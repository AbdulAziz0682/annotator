import _ from 'lodash';
import { SET_CURRENT_TAB, TOGGLE_DRAWER } from "../actions/plannerTypes";

const initialState = {
    drawerOpen: false,
    currentTab: 'jobs',
    jobs: [
        {id: 'Job ID 1', developer: 'dev_01@gmail.com', project: 'new vcmd', percentComplete: 20, accuracy: '0.B', date: new Date()},
        {id: 'Job ID 2', developer: 'dev_02@gmail.com', project: 'new vdlg', percentComplete: 0, accuracy: '0.B', date: new Date()},
        {id: 'Job ID 3', developer: 'dev_03@gmail.com', project: 'new vdlg', percentComplete: 60, accuracy: '0.B', date: new Date()},
    ]
}

function toggleDrawer(state){
    let newState = _.cloneDeep(state);
    newState.drawerOpen = !state.drawerOpen;
    return newState;
}

function setTab(state, action){
    let newState = _.cloneDeep(state);
    newState.currentTab = action.payload.name;
    return newState;
}

const planner = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_DRAWER: return toggleDrawer(state);
        case SET_CURRENT_TAB: return setTab(state, action);
        default: return state;
    }
}

export default planner;