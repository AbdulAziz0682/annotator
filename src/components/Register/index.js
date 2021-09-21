import { Grid } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useSelector } from 'react-redux';

import { Redirect } from 'react-router';
import DesktopRegister from './DesktopRegister';
import MobileRegister from './MobileRegister';

export default function Register(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    //Form requirements
    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        phone: yup
            .number('Enter phone number')
            .min(11, 'Enter at least 11 characters')
            .max(11, 'Enter 11 characters in total')
            .required('Phone is required'),
        password: yup
            .string('Enter your Password')
            .min(8, 'Enter at least 8 characters')
            .required('Password is required'),
        confirmPassword: yup
            .string('Enter confirm password')
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Enter confirm password')
        });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            company: '',
            hearAboutUs: '',
            isAccepting: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    if(loggedIn){
        return <Redirect push to="/home" />
    }
    return (
        <Grid item container>
            <form onSubmit={formik.handleSubmit} className="w-full flex items-center justify-center">
            <Hidden smDown>
                <DesktopRegister formik={formik} />
            </Hidden>
            <Hidden mdUp>
                <MobileRegister formik={formik} />
            </Hidden>
            </form>
        </Grid>
    )
}