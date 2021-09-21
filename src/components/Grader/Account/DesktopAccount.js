import React, {useState} from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

import { useSelector } from 'react-redux';

import { Redirect } from 'react-router';

import { useFormik } from 'formik';
import * as yup from 'yup';
import DeleteAccountConfirmation from './DeleteAccountConfirmation';

import DesktopEditAccount from './DesktopEditAccount';

const User = {
    name: '',
    email: '',
    password: '',
    company: '',
    token: '',
    projects: []
}

export default function DesktopAccount(props){
    let loggedIn = useSelector((state)=>state.account.loggedIn);
    let user = useSelector((state)=>state.account.user) || User;
    let [edit, setEdit] = useState(false);
    //Dialog Actions
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
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
            .oneOf([yup.ref('password'), null], 'Passwords must match')
        });
    const formik = useFormik({
        initialValues: {
            ...user,
            confirmPassword: user.password
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setEdit(false);
            console.log(JSON.stringify(values, null, 2));
        },
    });
    //------------------------
    if(!loggedIn){
        return <Redirect push to="/login" />
    }
    return (
        <form onSubmit={formik.handleSubmit} className="w-11/12 h-5/6 md:border rounded-3xl overflow-auto bg-white">
            <Grid container direction="column" className="self-center md:p-16 p-4">
                <Grid item className="flex gap-6 justify-between items-center">
                    <Typography variant="h6" color="primary">ACCOUNT DETAILS</Typography>
                    <div className="flex gap-3 justify-between">
                        <DeleteAccountConfirmation open={open} handleClose={handleClose} />
                        <Button variant="contained" size="small" 
                            color={edit ? 'default' : 'secondary'}
                            onClick={(e)=>{
                                if(edit){
                                    e.preventDefault();
                                    setEdit(false);
                                    formik.resetForm();
                                }
                                else {
                                    handleClickOpen(e);
                                }
                            }}
                                startIcon={!edit && <DeleteIcon htmlColor="white" />}
                        >
                            {edit ? 'Cancel' : 'Delete'}
                        </Button>
                        {
                            <Button color="primary" variant="contained" size="small"
                                type={edit ? 'submit' : 'button'}
                                onClick={(e)=>{
                                    if(!edit){
                                        e.preventDefault();
                                        setEdit(!edit);
                                    }
                                }}
                                startIcon={!edit && <EditIcon htmlColor="white" />}
                            >
                                
                                {edit ? 'Save' : 'Edit'}
                            </Button>
                        }
                    </div>
                </Grid>
                <Grid item>
                    {
                        edit 
                        ?
                        <DesktopEditAccount formik={formik} />
                        :
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow key="0">
                                        <TableCell className="border-r border-gray-600">Email Address</TableCell>
                                        <TableCell className="border-b border-gray-600 w-2/3">{user.email}</TableCell>
                                    </TableRow>
                                    <TableRow key="1">
                                        <TableCell className="border-r border-gray-600">Password</TableCell>
                                        <TableCell className="border-b border-gray-600  w-5/6">{user.password}</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell className="border-r border-gray-600">Phone Number</TableCell>
                                        <TableCell className="border-b border-gray-600  w-5/6">{user.phone}</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell className="border-r border-b-0 border-gray-600 h-8">{''}</TableCell>
                                        <TableCell className="border-b-0 w-5/6">{''}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Grid>
            </Grid>
        </form>
    )
}