import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Box, Collapse } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ExpandIcon from '../ExpandIcon';
import ChevronIcon from '../ChevronIcon';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import accountIcon from '../../assets/account.png';
import billingIcon from '../../assets/billing.svg';
import otherVoicesIcon from '../../assets/otherVoices.svg';
import dialogFlowIcon from '../../assets/dialogFlow.svg';
import metricsIcon from '../../assets/metrics.svg';
import statesIcon from '../../assets/states.svg';
import { addTab, toggleDrawer } from '../../redux/actions/currentProjectActions';

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
	width: theme.spacing(7) + 1,
	[theme.breakpoints.up('sm')]: {
	  width: theme.spacing(9) + 1,
	},
  },
  toolbar: {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	marginTop: theme.mixins.toolbar.minHeight+1,
  },
  listContent: {
	flexGrow: 1,
	marginTop: theme.spacing(3),
  },
}));

export default function SideBar() {
	const classes = useStyles();
	let open = useSelector((state)=>state.currentProject.drawerOpen);
	let dispatch = useDispatch();
	let [statesExpanded, setStatesExpanded] = useState(false);
	let [commandsExpanded, setCommandsExpanded] = useState(false);
	let [actionsExpanded, setActionsExpanded] = useState(false);
	let {currentTab, tabs} = useSelector((state)=>state.currentProject);
	let {states, commands, actions} = useSelector((state)=>state.currentProject);

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
		<div id="drawerbar" className={`order-last flex items-end border-t  ${open ? 'justify-end' : 'justify-center'}`}>
		  <IconButton onClick={()=>dispatch(toggleDrawer())}>
			<ChevronIcon color="primary" expanded={open} />
		  </IconButton>
		</div>
		<List className={classes.content}>
			<ListItem button key="1" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'dialog flow' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'dialog Flow', type: 'dialogFlow'}))} >
			  <ListItemIcon><img src={otherVoicesIcon} alt="dialogFlow" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Other Voices" />
			</ListItem>
			<ListItem button key="myVoice" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'billing' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'Billing', type:'billing'}))}>
			  <ListItemIcon><img src={accountIcon} alt="billing" className="w-6" /></ListItemIcon>
			  <ListItemText primary="My Voice" />
			</ListItem>
			<ListItem button key="metrics" style={{backgroundColor: tabs[currentTab]?.title.toLowerCase() === 'metrics' ? activeColor : ''}} onClick={()=>dispatch(addTab({title: 'Metrics', type:'metrics'}))}>
			  <ListItemIcon><img src={metricsIcon} alt="metrics" className="w-6" /></ListItemIcon>
			  <ListItemText primary="Metrics" />
			</ListItem>
		</List>
		<div className="flex-grow"></div>
	  </Drawer>
	</>
  );
}
