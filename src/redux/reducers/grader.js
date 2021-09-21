import _ from 'lodash';
import { SET_CURRENT_TAB, TOGGLE_DRAWER } from "../actions/graderTypes";

const initialState = {
    drawerOpen: false,
    metrics: [
        {name: 'Classification Accuracy(QA)', value: 'X'},
        {name: 'Classification Accuracy(Live)', value: 'X'},
    ],
    currentTab: 'otherVoices'
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

const grader = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_DRAWER: return toggleDrawer(state);
        case SET_CURRENT_TAB: return setTab(state, action);
        default: return state;
    }
}

export default grader;