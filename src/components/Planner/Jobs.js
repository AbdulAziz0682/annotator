import { Grid, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import infoIcon from '../../assets/info.svg';

import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/actions/plannerActions";

export default function Jobs(){
    const {jobs} = useSelector(state => state.planner);
    const dispatch = useDispatch();
    return (
        <Grid container direction="column" className="p-2 md:p-6 self-start">
            <Grid item>
                <Typography color="primary" className="font-bold text-2xl">Jobs</Typography>
            </Grid>
            <Grid item container className="mt-12 gap-2 flex-col lg:gap-60 md:flex-row">
                <Grid item className="flex-grow flex gap-2 items-center">
                    <div className="flex-grow flex bg-gray-100 px-2 rounded-lg gap-1 divide-x">
                        <InputBase className="flex-grow w-20" placeholder="Type" />
                        <select className="bg-gray-100 w-12 md:w-auto rounded-r-lg">
                            <option value="id">Job ID</option>
                            <option value="developer">Developer</option>
                            <option value="project">Project</option>
                        </select>
                    </div>
                    <span className="bg-pink-100 py-1 px-3 rounded-lg">
                        <Search />
                    </span>
                </Grid>
                <Grid item className="flex-grow flex gap-2 items-center">
                    <div className="flex-grow flex bg-gray-100 px-2 rounded-lg gap-1 divide-x">
                        <select className="bg-gray-100 w-12 md:w-auto rounded-l-lg">
                            <option value="equal">Equal</option>
                            <option value="greaterThan">Greater than</option>
                            <option value="lessThan">Less Than</option>
                        </select>
                        <InputBase className="flex-grow w-20 px-2" placeholder="Type" />
                        <select className="bg-gray-100 w-12 md:w-auto rounded-r-lg">
                            <option value="complete">Complete</option>
                            <option value="remaining">Remaining</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <span className="bg-pink-100 py-1 px-3 rounded-lg">
                        <Search />
                    </span>
                </Grid>
            </Grid>
            <Grid item className="mt-4">
                <TableContainer component={Paper} className="w-64 md:w-auto">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="border-black">Job ID</TableCell>
                                <TableCell className="border-black">Developer</TableCell>
                                <TableCell className="border-black">Project</TableCell>
                                <TableCell className="border-black">
                                    <span className="flex">
                                        Complete
                                        <img src={infoIcon} alt="info" className="w-4" />
                                    </span>
                                </TableCell>
                                <TableCell className="border-black">
                                    <span className="flex">
                                        Accuracy
                                        <img src={infoIcon} alt="info" className="w-4" />
                                    </span>
                                </TableCell>
                                <TableCell className="border-black">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            jobs.map((job, index) => <>
                                <TableRow hover key={index} onClick={()=>dispatch(setCurrentTab({name: 'job', data: job}))}>
                                    <TableCell>{job.id}</TableCell>
                                    <TableCell>{job.developer}</TableCell>
                                    <TableCell>{job.project}</TableCell>
                                    <TableCell>{job.percentComplete+"%"}</TableCell>
                                    <TableCell>{job.accuracy}</TableCell>
                                    <TableCell>{job.date.toDateString()}</TableCell>
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