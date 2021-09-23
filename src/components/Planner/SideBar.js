import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronIcon from '../ChevronIcon';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import jobsIcon from '../../assets/jobs.svg';
import gradersIcon from '../../assets/graders.svg';
import addPlannersIcon from '../../assets/addPlanners.svg';

import { setCurrentTab, toggleDrawer } from '../../redux/actions/plannerActions';

const drawerWidth = 240;
const activeColor = 'rgba(228, 212, 248, 1)';

const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
  },
  drawer: {
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	zIndex: theme.zIndex.drawer - 200,
  },
  drawerOpen: {
	width: drawerWidth,
	transition: theme.transitions.create('width', {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.enteringScreen,
	}),
	paddingTop: 80
  },
  drawerClose: {
	paddingTop: 80,
	transition: theme.transitions.create('width', {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: theme.spacing(9) + 1
  }
}));

export default function SideBar() {
	const classes = useStyles();
	const open = useSelector((state)=>state.planner.drawerOpen);
	const dispatch = useDispatch();
	const {currentTab} = useSelector((state)=>state.planner);
	return (
		<>
		<CssBaseline />
		<Drawer
			variant="permanent"
			id="drawer"
			className={clsx('mt-3',classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
			}}
		>
			<List className={classes.content}>
				<ListItem button key="jobs" onClick={()=>dispatch(setCurrentTab({name: 'jobs', data: null}))} >
					<div className={`py-1 px-2 rounded flex overflow-hidden ${!open ? 'w-10' : 'w-full'}`} style={{backgroundColor: (currentTab.name === 'jobs' || currentTab.name === 'job') ? activeColor : ''}} >
						<ListItemIcon><img src={jobsIcon} alt="jobs" className="w-6" /></ListItemIcon>
						<ListItemText primary="Jobs" />
					</div>
				</ListItem>
				<ListItem button key="graders" onClick={()=>dispatch(setCurrentTab({name: 'graders', data: null}))}>
					<div  className={`py-1 px-2 rounded flex overflow-hidden ${!open ? 'w-10' : 'w-full'}`} style={{backgroundColor: currentTab.name === 'graders' ? activeColor : ''}} >
						<ListItemIcon><img src={gradersIcon} alt="Graders" className="w-5 h-6" /></ListItemIcon>
						<ListItemText primary="Graders" />
					</div>
				</ListItem>
				<ListItem button key="addPlanners" onClick={()=>dispatch(setCurrentTab({name: 'addPlanners', data: null}))}>
					<div  className={`py-1 px-2 rounded flex overflow-hidden ${!open ? 'w-10' : 'w-full'}`} style={{backgroundColor: currentTab.name === 'addPlanners' ? activeColor : ''}} >
						<ListItemIcon><img src={addPlannersIcon} alt="add Planners" className="w-6" /></ListItemIcon>
						<ListItemText primary="Add Planners" />
					</div>
				</ListItem>
			</List>
			<div className="flex-grow"></div>
			<div id="drawerbar" className={`flex items-end border-t  ${open ? 'justify-end' : 'justify-center'}`}>
				<IconButton onClick={()=>dispatch(toggleDrawer())}>
					<ChevronIcon color="primary" expanded={open} />
				</IconButton>
			</div>
		</Drawer>
		</>
	);
}
