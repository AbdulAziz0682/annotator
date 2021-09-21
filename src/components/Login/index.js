import React from 'react';
import { Grid } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Redirect } from 'react-router';
import { login } from '../../redux/actions/accountActions';

import dummyUser from './dummyUser';
import DesktopLogin from './DesktopLogin';
import MobileLogin from './MobileLogin';

export default function Login(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    let dispatch = useDispatch();
    //Form requirements
    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your Password')
            .min(8, 'Enter at least 8 characters')
            .required('Password is required'),
        }
    )
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            dispatch(login(dummyUser));
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    if(loggedIn){
        return <Redirect push to="/account" />
    }
    return (
        <Grid container item>
            <form onSubmit={formik.handleSubmit} className="w-full flex items-center justify-center">
                <Hidden smDown>
                    <DesktopLogin formik={formik} />
                </Hidden>
                <Hidden mdUp>
                    <MobileLogin formik={formik} />
                </Hidden>
            </form>
        </Grid>
    )
}