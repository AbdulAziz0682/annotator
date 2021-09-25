import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

import { useSelector } from "react-redux";

import MobileAccount from './Account/MobileAccount';
import DesktopAccount from './Account/DesktopAccount';
import Jobs from './Jobs';
import Job from './Job';
import GraderFromJob from './GraderFromJob';
import Graders from './Graders';
import Grader from './Grader';
import AddPlanners from './AddPlanners';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.mixins.toolbar.minHeight/2-15,
        maxHeight: "calc(100vh - 57px)",
        overflow: 'auto',
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
    const {currentTab} = useSelector(state => state.planner);
    return (
        <div className={classes.root}>
            {
                currentTab.name === 'jobs' && <Jobs />
            }
            {
                currentTab.name === 'job' && <Job job={currentTab.data} />
            }
            {
                currentTab.name === 'graderFromJob' && <GraderFromJob job={currentTab.data} />
            }
            {
                currentTab.name === 'graders' && <Graders />
            }
            {
                currentTab.name === 'grader' && <Grader grader={currentTab.data} />
            }
            {
                currentTab.name === 'addPlanners' && <AddPlanners />
            }
            {
                currentTab.name === 'account' && <>
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