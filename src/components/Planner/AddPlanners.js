import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";

import { Add } from "@material-ui/icons";

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';

import { useSelector, useDispatch } from "react-redux";

const customColor = 'rgba(228, 212, 248, 1)';

export default function AddPlanners(){
    const {planners} = useSelector(state => state.planner);
    const dispatch = useDispatch();
    return (
        <Grid container direction="column" className="p-2 md:p-6 self-start">
            <Grid item>
                <Typography color="primary" className="font-bold text-2xl">All planners</Typography>
            </Grid>
            <Grid item className="flex justify-end mt-12">
                <Button variant="default" size="small" style={{backgroundColor: customColor}} startIcon={<Add />} onClick={()=>dispatch()}>Add New Planner</Button>
            </Grid>
            <Grid item className="mt-4">
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
                                <TableCell className="flex gap-6"><img src={deleteIcon} alt="delete planner" /> <img src={editIcon} alt="edit planner" /></TableCell>
                            </TableRow>
                        </>)
                    }
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}