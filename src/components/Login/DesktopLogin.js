import React from 'react';
import { Button, Grid, InputAdornment, Paper, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

import logo from '../../assets/afluence.png';
import registerBackground from '../../assets/registerBackground.png';
import account from '../../assets/account.png';
import key from '../../assets/key.svg';

import { Link } from 'react-router-dom';

export default function DesktopLogin({formik}){

    return(
        <Grid container component={Paper} elevation={6} id="md" direction="row" className="border md:w-5/6 lg:w-156 self-center rounded-3xl mt-3">
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
                        <Typography color="primary" className="font-black uppercase text-2xl">Welcome Back !</Typography>
                        <hr className="border-b border-black w-11/12" />
                        <hr className="border-b border-black w-10/12 my-1" />
                        <hr className="border-b border-black w-9/12" />
                    </Grid>
                    <Grid container alignItems="center" direction="column" className="my-24">
                        <Grid item className="w-full my-2">
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
                                            <img src={account} alt="account icon" />
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
                        <Grid item className="w-full my-2">
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
                                            <img src={key} alt="password key" />
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
                    </Grid>
                    <Grid item xs={8} className="flex flex-col items-center">
                        <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
                        <div className="w-80 flex justify-center items-center text-xs mt-2">
                            <span>Don't have an account?</span>
                            <Link to="/register" className="font-bold uppercase mx-1">Sign up</Link>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}