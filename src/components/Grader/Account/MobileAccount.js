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

import MobileEditAccount from './MobileEditAccount';

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
        <form onSubmit={formik.handleSubmit} className="w-full self-center border rounded-3xl overflow-auto bg-white">
            <Grid container direction="column" className="self-center p-4">
                <Grid item className="flex gap-6 justify-between items-center mb-8">
                    <Typography variant="h6" color="primary">{edit ? 'EDIT ACCOUNT DETAILS' : 'ACCOUNT DETAILS'}</Typography>
                </Grid>
                <Grid item>
                    {
                        edit 
                        ?
                        <MobileEditAccount formik={formik} />
                        :
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col" key="0">
                                <span className="">Email Address</span>
                                <span className="border-b border-black w-10/12">{user.email}</span>
                            </div>
                            <div className="flex flex-col" key="1">
                                <span className="">Password</span>
                                <span className="border-b border-black w-10/12">{user.password}</span>
                            </div>
                            <div className="flex flex-col" key="2">
                                <span className="">Phone Number</span>
                                <span className="border-b border-black w-10/12">{user.phone}</span>
                            </div>
                        </div>
                    }
                </Grid>
                <Grid item className="flex gap-3 justify-around w-full mt-24">
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
                </Grid>
            </Grid>
            <DeleteAccountConfirmation open={open} handleClose={handleClose} />
        </form>
    )
}