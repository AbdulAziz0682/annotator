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

import accountIcon from '../../assets/account.png';
import otherVoicesIcon from '../../assets/otherVoices.svg';
import metricsIcon from '../../assets/metrics.svg';

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
	const open = useSelector((state)=>state.grader.drawerOpen);
	const dispatch = useDispatch();
	const {currentTab} = useSelector((state)=>state.grader);
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
				<ListItem button key="otherVoices" onClick={()=>dispatch(setCurrentTab('otherVoices'))} >
					<div className={`py-1 px-2 rounded flex overflow-hidden ${!open ? 'w-10' : 'w-full'}`} style={{backgroundColor: currentTab === 'otherVoices' ? activeColor : ''}} >
						<ListItemIcon><img src={otherVoicesIcon} alt="other voices" className="w-6" /></ListItemIcon>
						<ListItemText primary="Other Voices" />
					</div>
				</ListItem>
				<ListItem button key="myVoice" onClick={()=>dispatch(setCurrentTab('myVoice'))}>
					<div  className={`py-1 px-2 rounded flex overflow-hidden ${!open ? 'w-10' : 'w-full'}`} style={{backgroundColor: currentTab === 'myVoice' ? activeColor : ''}} >
						<ListItemIcon><img src={accountIcon} alt="my Voice" className="w-5 h-6" /></ListItemIcon>
						<ListItemText primary="My Voice" />
					</div>
				</ListItem>
				<ListItem button key="metrics" onClick={()=>dispatch(setCurrentTab('metrics'))}>
					<div  className={`py-1 px-2 rounded flex overflow-hidden ${!open ? 'w-10' : 'w-full'}`} style={{backgroundColor: currentTab === 'metrics' ? activeColor : ''}} >
						<ListItemIcon><img src={metricsIcon} alt="metrics" className="w-6" /></ListItemIcon>
						<ListItemText primary="Metrics" />
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
