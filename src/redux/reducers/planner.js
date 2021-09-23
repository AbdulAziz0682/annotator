import _ from 'lodash';
import { SET_CURRENT_TAB, TOGGLE_DRAWER } from "../actions/plannerTypes";

const initialState = {
    drawerOpen: false,
    currentTab: {name: 'jobs', data: null},
    jobs: [
        {id: 'Job ID 1', developer: 'dev_01@gmail.com', project: 'new vcmd', percentComplete: 20, accuracy: '0.B', date: new Date(), grader: 'email_address_1@gmail.com'},
        {id: 'Job ID 2', developer: 'dev_02@gmail.com', project: 'new vdlg', percentComplete: 0, accuracy: '0.B', date: new Date(), grader: 'email_address_2@gmail.com'},
        {id: 'Job ID 3', developer: 'dev_03@gmail.com', project: 'new vdlg', percentComplete: 60, accuracy: '0.B', date: new Date(), grader: 'email_address_3@gmail.com'},
    ],
    graders: [
        {email: 'email_addres_1@gmail.com', jobId: 'Job ID 1', heard: true, transcript: 'a boy', matched: true, aScore: '0.B', today: 12, month: 'B'},
        {email: 'email_addres_2@gmail.com', jobId: 'Job ID 2', heard: true, transcript: 'a boy', matched: true, aScore: '0.B', today: 12, month: 'B'},
        {email: 'email_addres_3@gmail.com', jobId: 'Job ID 3', heard: true, transcript: 'a boy', matched: true, aScore: '0.B', today: 12, month: 'B'}
    ]
}

function toggleDrawer(state){
    let newState = _.cloneDeep(state);
    newState.drawerOpen = !state.drawerOpen;
    return newState;
}

function setTab(state, action){
    let newState = _.cloneDeep(state);
    newState.currentTab = action.payload.tab;
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