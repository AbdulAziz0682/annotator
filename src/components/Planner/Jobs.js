import { Grid, InputBase, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { useSelector } from "react-redux";

export default function Jobs(){
    const {jobs} = useSelector(state => state.planner);
    return (
        <Grid container direction="column" className="p-2 md:p-6 self-start">
            <Grid item>
                <Typography color="primary" className="font-bold text-2xl">Jobs</Typography>
            </Grid>
            <Grid item container className="mt-12 md:gap-60 gap-2">
                <Grid item className="flex-grow flex gap-2 items-center">
                    <div className="flex-grow flex bg-gray-100 px-2 rounded-lg gap-1 divide-x">
                        <InputBase className="flex-grow w-20" placeholder="Type" />
                        <select className="bg-gray-100 rounded-r-lg">
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
                        <select className="bg-gray-100 rounded-l-lg">
                            <option value="equal">Equal</option>
                            <option value="greaterThan">Greater than</option>
                            <option value="lessThan">Less Than</option>
                        </select>
                        <InputBase className="flex-grow w-20" placeholder="Type" />
                        <select className="bg-gray-100 rounded-r-lg">
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
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="border-black">Job ID</TableCell>
                            <TableCell className="border-black">Developer</TableCell>
                            <TableCell className="border-black">Project</TableCell>
                            <TableCell className="border-black">Complete</TableCell>
                            <TableCell className="border-black">Accuracy</TableCell>
                            <TableCell className="border-black">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        jobs.map((job, index) => <>
                            <TableRow hover key={index}>
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
            </Grid>
        </Grid>
    )
}