import { SET_CURRENT_TAB, TOGGLE_DRAWER } from "./plannerTypes";

export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER,
    }
}

export const setCurrentTab = (tab) => {
    return {
        type: SET_CURRENT_TAB,
        payload: {
            tab
        }
    }
}