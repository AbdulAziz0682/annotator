import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, Grid, TextField, InputAdornment } from '@material-ui/core';

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

import account from '../../assets/account.png';
import smartPhone from '../../assets/smartphone.svg';
import key from '../../assets/key.svg';
import confirm from '../../assets/confirm.svg';

import { useFormik } from 'formik';
import * as yup from 'yup';

const inputIconSize = 18;

export default function EditPlanner(props) {
    let {open, handleClose, planner} = props;
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
        phone: yup
            .number('Enter phone number')
            .required('Phone is required'),
        confirmPassword: yup
            .string('Enter confirm password')
            .required('Enter confirm password')
            .oneOf([yup.ref('password'), null], 'Passwords must match')
        });
    const formik = useFormik({
        initialValues: {
            ...planner,
            confirmPassword: planner.password
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="sm:p-8 p-2"
        >
            <form onSubmit={formik.handleSubmit} >
            <Typography component={DialogTitle} variant="h4" align="center" color="primary">Edit Planner</Typography>
            <DialogContent className="flex flex-col gap-3 w-84 md:w-132 sm:m-3">
                <Grid container alignItems="center" direction="column" className="my-6" spacing={2}>
                    <Grid item className="w-full my-1">
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            variant="standard"
                            placeholder="Email"
                            size="small"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment postition="start">
                                        <img className="mr-1" src={account} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="account icon" />
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
                            type="number"
                            id="phone"
                            name="phone"
                            variant="standard"
                            placeholder="Phone"
                            size="small"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment postition="start">
                                        <img style={{maxWidth: inputIconSize+5, minHeight: inputIconSize+5}} src={smartPhone} alt="smartPhone icon" />
                                    </InputAdornment>
                                ),
                                endAdornment:(
                                    (formik.touched.phone && Boolean(formik.errors.phone)) &&
                                    <InputAdornment position="end">
                                        <ReportProblemOutlinedIcon color="secondary" className="w-5" />
                                    </InputAdornment>
                                ),
                            }}
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </Grid>
                    <Grid item className="w-full my-1">
                        <TextField
                            fullWidth
                            type="password"
                            id="password"
                            name="password"
                            variant="standard"
                            placeholder="Password"
                            size="small"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment postition="start">
                                        <img className="mr-1" src={key} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="password key" />
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
                            placeholder="Confirm Password"
                            size="small"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment postition="start">
                                        <img className="mr-1" src={confirm} style={{maxWidth: inputIconSize, minHeight: inputIconSize}} alt="confirmPassword key" />
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
            </DialogContent>
            <DialogActions className="flex gap-3 justify-evenly mb-10">
                <Button onClick={handleClose} variant="contained">
                    Cancel
                </Button>
                <Button variant="contained" type="submit" color="primary">
                    Edit
                </Button>
            </DialogActions>
            </form>
        </Dialog>
    );
}
