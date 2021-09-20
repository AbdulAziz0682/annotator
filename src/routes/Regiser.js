import React from 'react';
import { Button, FormHelperText, Grid, InputLabel, Typography, InputAdornment, Paper, makeStyles, Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';
import { Hidden } from '@material-ui/core';

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

import logo from '../assets/afluence.png';
import registerBackground from '../assets/registerBackground.png';
import account from '../assets/account.png';
import key from '../assets/key.svg';
import confirm from '../assets/confirm.svg';
import companyicon from '../assets/company.svg';
import smile from '../assets/smile.svg';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Redirect } from 'react-router';

const useStyles = makeStyles(theme => ({
    checkIcon: {
        maxHeight: 14,
        minWidth: 14
    }
}))

const inputIconSize = 20;
export default function Register(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    const classes = useStyles();
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
        company: yup
            .string('Enter your Company name')
            .min(4, 'Enter at least 4 characters')
            .required('Company is required'),
        hearAboutUs: yup
            .string()
            .min(4, 'Enter at least 4 characters')
            .required('Please tell us some thing'),
        isAccepting: yup
            .boolean()
            .oneOf([true, null], 'You have to accept terms')
            .required('Please accept the terms'),
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
                <div className="flex-grow flex flex-col items-center">
                    <Grid container component={Paper} elevation={6} id="md" direction="row" className="border md:w-5/6 lg:w-204 self-center rounded-3xl">
                        <Grid item xs={6} className="flex flex-col justify-center items-center p-5 bg-gray-100 rounded-l-3xl">
                            <div className="flex flex-row items-center mt-9">
                                <img src={logo} alt="afluence logo" style={{width: 70}}/>
                                <Typography color="primary" className="font-extrabold text-4xl ml-2" style={{fontFamily: "'Montserrat', sans-serif"}}>annotator</Typography>
                            </div>
                            <img src={registerBackground} alt="register background" style={{width: 250}} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="column" alignItems="center" justifyContent="center" className="p-6">
                                <Grid item className="flex flex-col items-center w-full">
                                    <Typography color="primary" className="font-black uppercase text-2xl">Create your account</Typography>
                                    <hr className="border-b border-black w-11/12" />
                                    <hr className="border-b border-black w-10/12 my-1" />
                                    <hr className="border-b border-black w-9/12" />
                                </Grid>
                                <Grid container alignItems="center" direction="column" className="my-6">
                                    <Grid item className="w-full my-1">
                                        <TextField
                                            fullWidth
                                            id="email"
                                            name="email"
                                            variant="standard"
                                            label="Email"
                                            size="small"
                                            InputProps={{
                                                startAdornment:(
                                                    <InputAdornment postition="start">
                                                        <img src={account} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="account icon" />
                                                    </InputAdornment>
                                                ),
                                                endAdornment:(
                                                    (formik.touched.email && Boolean(formik.errors.email)) &&
                                                    <InputAdornment position="end">
                                                        <ReportProblemOutlinedIcon color="secondary" />
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                        />
                                    </Grid>
                                    <Grid item className="w-full my-1">
                                        <TextField
                                            fullWidth
                                            type="password"
                                            id="password"
                                            name="password"
                                            variant="standard"
                                            label="Password"
                                            size="small"
                                            InputProps={{
                                                startAdornment:(
                                                    <InputAdornment postition="start">
                                                        <img src={key} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="password key" />
                                                    </InputAdornment>
                                                ),
                                                endAdornment:(
                                                    (formik.touched.password && Boolean(formik.errors.password)) &&
                                                    <InputAdornment position="end">
                                                        <ReportProblemOutlinedIcon color="secondary" />
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                        />
                                    </Grid>
                                    <Grid item className="w-full my-1">
                                        <TextField
                                            fullWidth
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            variant="standard"
                                            label="Confirm Password"
                                            size="small"
                                            InputProps={{
                                                startAdornment:(
                                                    <InputAdornment postition="start">
                                                        <img src={confirm} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="confirmPassword key" />
                                                    </InputAdornment>
                                                ),
                                                endAdornment:(
                                                    (formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)) &&
                                                    <InputAdornment position="end">
                                                        <ReportProblemOutlinedIcon color="secondary" />
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={formik.values.confirmPassword}
                                            onChange={formik.handleChange}
                                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} className="flex flex-col items-center">
                                    <Button variant="contained" color="primary" type="submit" fullWidth>Create your Account</Button>
                                    <div className="w-80 flex justify-center items-center text-xs mt-2">
                                        <span>Already have an account?</span>
                                        <Link to="/login" className="font-bold mx-1">LOGIN</Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Hidden>
            <Hidden mdUp>
                <Grid container spacing={2} alignItems="center" direction="column" className="self-center">
                    <Grid item className="w-80 flex items-center p-6">
                        <img src={logo} alt="logo" style={{width: 100}}/>
                        <Typography variant="h4" color="primary" style={{fontFamily: "'Montserrat', sans-serif"}}>annotator</Typography>
                    </Grid>
                    <Grid item className="w-full">
                        <Grid container alignItems="center" direction="column" className="my-1" spacing={2}>
                            <Grid item className="w-80">
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    variant="standard"
                                    label="Email"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <img src={account}  style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="account icon" />
                                            </InputAdornment>
                                        ),
                                        endAdornment:(
                                            (formik.touched.email && Boolean(formik.errors.email)) &&
                                            <InputAdornment position="end">
                                                <ReportProblemOutlinedIcon color="secondary" />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item className="w-80">
                                <TextField
                                    fullWidth
                                    type="password"
                                    id="password"
                                    name="password"
                                    variant="standard"
                                    label="Password"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <img src={key} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="password key" />
                                            </InputAdornment>
                                        ),
                                        endAdornment:(
                                            (formik.touched.password && Boolean(formik.errors.password)) &&
                                            <InputAdornment position="end">
                                                <ReportProblemOutlinedIcon color="secondary" />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item className="w-80">
                                <TextField
                                    fullWidth
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    variant="standard"
                                    label="Confirm Password"
                                    size="small"
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment postition="start">
                                                <img src={confirm} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="confirmPassword key" />
                                            </InputAdornment>
                                        ),
                                        endAdornment:(
                                            (formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)) &&
                                            <InputAdornment position="end">
                                                <ReportProblemOutlinedIcon color="secondary" />
                                            </InputAdornment>
                                        )
                                    }}
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} className="flex flex-col items-center">
                        <Button variant="contained" color="primary" type="submit" fullWidth>Create your Account</Button>
                        <div className="w-80 flex justify-center items-center text-xs mt-2">
                            <span>Already have an account?</span>
                            <Link to="/login" className="font-bold mx-1">LOGIN</Link>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>
            </form>
        </Grid>
    )
}