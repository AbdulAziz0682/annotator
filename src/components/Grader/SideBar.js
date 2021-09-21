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

import { setCurrentTab, toggleDrawer } from '../../redux/actions/graderActions';

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
				<ListItem button key="1" style={{backgroundColor: currentTab === 'otherVoices' ? activeColor : ''}} onClick={()=>dispatch(setCurrentTab('otherVoices'))} >
					<ListItemIcon><img src={otherVoicesIcon} alt="other voices" className="w-6" /></ListItemIcon>
					<ListItemText primary="Other Voices" />
				</ListItem>
				<ListItem button key="myVoice" style={{backgroundColor: currentTab === 'myVoice' ? activeColor : ''}} onClick={()=>dispatch(setCurrentTab('myVoice'))}>
					<ListItemIcon><img src={accountIcon} alt="my Voice" className="w-6" /></ListItemIcon>
					<ListItemText primary="My Voice" />
				</ListItem>
				<ListItem button key="metrics" style={{backgroundColor: currentTab === 'metrics' ? activeColor : ''}} onClick={()=>dispatch(setCurrentTab('metrics'))}>
					<ListItemIcon><img src={metricsIcon} alt="metrics" className="w-6" /></ListItemIcon>
					<ListItemText primary="Metrics" />
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
