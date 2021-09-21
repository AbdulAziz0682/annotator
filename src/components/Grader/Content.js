import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

import { useSelector } from "react-redux";

import OtherVoices from "./OtherVoices";
import MyVoice from './MyVoice';
import Metrics from './Metrics';
import MobileAccount from './Account/MobileAccount';
import DesktopAccount from './Account/DesktopAccount';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.mixins.toolbar.minHeight/2-15,
        height: "calc(100vh - 57px)",
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            zIndex: theme.zIndex.drawer - 300,
            position: 'absolute',
            marginLeft: theme.spacing(9)+1, //Width of collapsed sidebar
            width: `calc(100% - ${theme.spacing(9)+1}px)`
        },
        [theme.breakpoints.up('md')]:{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
}))

export default function Content(props){
    const classes = useStyles();
    const {currentTab} = useSelector(state => state.grader);
    return (
        <div className={classes.root}>
            {
                currentTab === 'otherVoices' && <OtherVoices />
            }
            {
                currentTab === 'myVoice' && <MyVoice />
            }
            {
                currentTab === 'metrics' && <Metrics />
            }
            {
                currentTab === 'account' && <>
                    <Hidden smDown>
                        <DesktopAccount />
                    </Hidden>
                    <Hidden mdUp>
                        <MobileAccount />
                    </Hidden>
                </>
            }
        </div>
    )
}