import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SideBar from './SideBar';
import Content from './Content';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1
	},
}));

export default function Planner() {
	const classes = useStyles();
	const loggedIn = useSelector(state => state.account.loggedIn);
	if(!loggedIn){
		return <Redirect push to="/plannerLogin" />
	}
	return (		
		<div className={classes.root}>
			<SideBar />
			<Content />
		</div>
	);
}
