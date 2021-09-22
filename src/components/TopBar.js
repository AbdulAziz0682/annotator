import { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../assets/afluence.png';
import bell from '../assets/bell.svg';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { logout } from "../redux/actions/accountActions";
import { setCurrentTab } from "../redux/actions/graderActions";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.mixins.toolbar.minHeight
    },
    appBarZIndex: {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      margin: 0,
      width: 35,
      padding: 0
    },
    title: {
      flexGrow: 1,
      marginLeft: 10,
      fontSize: 26
    },
    paper: {
        backgroundColor: 'white',
        borderInline: '1px solid #d9dce2',
        borderBlock: '1px solid #d9dce2',
        borderRadius: '0.5rem',
        fontFamily: "'Montserrat', sans-serif",
    }
  }));

export default function TopBar(props){
    const classes = useStyles();
    let dispatch = useDispatch();
    const {accountType} = useSelector(state => state.account.user);
    console.log(accountType);
    let [anchor, setAnchor] = useState(null);
    function handleMenuClick(event){
        setAnchor(event.currentTarget);
    }
    function handleMenuClose(){
        setAnchor(null);
    }
    function handleAccountClick(){
        dispatch(setCurrentTab('account'));
        handleMenuClose();
    }
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBarZIndex + ' border-gray border-b shadow-none bg-current'}>
                <Toolbar className="items-center">
                    <IconButton edge="start" className={classes.logo} color="primary" aria-label="menu">
                        <img src={logo} alt="afluence logo"/>
                    </IconButton>
                    <Typography variant="h6" color="primary" className={classes.title} style={{fontFamily: "'Montserrat', sans-serif"}}>{"Annotator" }</Typography>
                    {accountType !== 'planner' && <img src={bell} alt="bell icon" style={{width: '16px'}} />}
                    <IconButton onClick={handleMenuClick} color="primary">
                        <MoreVert />
                    </IconButton>                    
                    <Menu open={Boolean(anchor)} 
                        elevation={0}
                        anchorEl={anchor}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        onClose={handleMenuClose}
                        classes={{paper: classes.paper}}
                    >
                        <MenuItem key="2" onClick={handleAccountClick}><span style={{fontFamily: "'Montserrat', sans-serif"}} className="pr-24 pb-2 border-b border-gray-300">Account</span></MenuItem>
                        <MenuItem key="3" component={Link} to={`${accountType === 'planner' ? '/plannerLogin' : '/login'}`} onClick={(e)=>{dispatch(logout()); handleMenuClose(e)}}><span style={{fontFamily: "'Montserrat', sans-serif"}} className="pr-24">Logout</span></MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}