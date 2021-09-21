import React from 'react';
import { Button, Grid, InputAdornment, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { Link } from 'react-router-dom';

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

import logo from '../../assets/afluence.png';
import account from '../../assets/account.png';
import key from '../../assets/key.svg';
export default function MobileLogin({formik}){

    return (
        <Grid container alignItems="center" direction="column">
            <Grid item className="w-80 flex items-center p-6">
                <img src={logo} alt="logo" style={{width: 100}}/>
                <Typography variant="h4" color="primary" style={{fontFamily: "'Montserrat', sans-serif"}}>annotator</Typography>
            </Grid>
            <Grid container alignItems="center" direction="column" className="mt-24 mb-16">
                <Grid item className="w-80">
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        variant="standard"
                        placeholder="Email"
                        size="small"
                        className="flex-col-reverse"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment postition="start">
                                    <img src={account} alt="account icon" />
                                </InputAdornment>
                            ),
                            endAdornment:(
                                (formik.touched.email && Boolean(formik.errors.email)) &&
                                <InputAdornment position="end">
                                    <ReportProblemOutlinedIcon color="secondary" className="w-5" />
                                </InputAdornment>
                            ),
                            className: "p-2 bg-gray-100 rounded-lg",
                            disableUnderline: true
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
                        placeholder="Password"
                        size="small"
                        className="flex-col-reverse"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment postition="start">
                                    <img src={key} alt="password key" />
                                </InputAdornment>
                            ),
                            endAdornment:(
                                (formik.touched.password && Boolean(formik.errors.password)) &&
                                <InputAdornment position="end">
                                    <ReportProblemOutlinedIcon color="secondary" className="w-5" />
                                </InputAdornment>
                            ),
                            className: "p-2 bg-gray-100 rounded-lg",
                            disableUnderline: true
                        }}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
            </Grid>
            <Grid item xs={5} className="flex flex-col items-center">
                <Button variant="contained" color="primary" type="submit" fullWidth className="p-2 text-lg">Log in</Button>
                <div className="w-80 flex justify-center items-center text-xs mt-2">
                    <span>Don't have an account?</span>
                    <Link to="/register" className="font-bold uppercase mx-1">Sign up here</Link>
                </div>
            </Grid>
        </Grid>
    )
}