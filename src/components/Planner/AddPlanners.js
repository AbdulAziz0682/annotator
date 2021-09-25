import {useState} from 'react';

import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, Paper } from "@material-ui/core";

import { Add } from "@material-ui/icons";

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';

import { useSelector } from "react-redux";

import NewPlannerDialog from './NewPlannerDialog';
import EditPlanner from './EditPlanner';

const customColor = 'rgba(228, 212, 248, 1)';

export default function AddPlanners(){
    const {planners} = useSelector(state => state.planner);
    let [open, setOpen] = useState(false);
    function handleClose(){
        setOpen(false);
    }
    let [editPlannerOpen, setEditPlannerOpen] = useState(false);
    return (
        <Grid container direction="column" className="p-2 md:p-6 self-start">
            <Grid item>
                <Typography color="primary" className="font-bold text-2xl">All planners</Typography>
            </Grid>
            <Grid item className="flex justify-end mt-12">
                <Button size="small" style={{backgroundColor: customColor}} startIcon={<Add />} onClick={()=>setOpen(true)}>Add New Planner</Button>
                <NewPlannerDialog open={open} handleClose={handleClose} />
            </Grid>
            <Grid item className="mt-4">
                <TableContainer component={Paper} className="w-64 md:w-auto">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="border-black">Email</TableCell>
                                <TableCell className="border-black">Phone number</TableCell>
                                <TableCell className="border-black">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            planners.map((planner, index) => <>
                                <TableRow hover key={index}>
                                    <TableCell>{planner.email}</TableCell>
                                    <TableCell>{planner.phone}</TableCell>
                                    <TableCell className="flex gap-6">
                                        <img src={deleteIcon} alt="delete planner" /> 
                                        <img onClick={()=>setEditPlannerOpen(true)} src={editIcon} alt="edit planner" />
                                        <EditPlanner open={editPlannerOpen} handleClose={()=>setEditPlannerOpen(false)} planner={planner} />
                                    </TableCell>
                                </TableRow>
                            </>)
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}