import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from "react-redux";

import OtherVoices from "./OtherVoices";
import MyVoice from './MyVoice';
import Metrics from './Metrics';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.mixins.toolbar.minHeight/2-15,
        height: "calc(100vh - 57px)",
        [theme.breakpoints.down('sm')]:{
            zIndex: theme.zIndex.drawer - 300,
            position: 'absolute',
            marginLeft: theme.spacing(9)+1, //Width of collapsed sidebar
        },
        [theme.breakpoints.up('md')]:{
            maxWidth: "calc(100% - 250px)" //250px for drawer width
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
        </div>
    )
}