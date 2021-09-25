import { Grid, InputBase, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, Paper } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import infoIcon from '../../assets/info.svg';

import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/actions/plannerActions";

export default function Graders(){
    const {graders} = useSelector(state => state.planner);
    const dispatch = useDispatch();
    return (
        <Grid container direction="column" className="p-2 md:p-6 self-start">
            <Grid item>
                <Typography color="primary" className="font-bold text-2xl">Graders</Typography>
            </Grid>
            <Grid item container className="mt-12 gap-2 flex-col lg:gap-60 md:flex-row">
                <Grid item className="flex-grow flex gap-2 items-center">
                    <div className="flex-grow flex bg-gray-100 px-2 rounded-lg gap-1 divide-x items-center">
                        <InputBase className="flex-grow w-20" placeholder="Type" />
                        <span className="rounded-r-lg pl-2">
                            <Search />
                        </span>
                    </div>
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
                            <option value="today">today</option>
                            <option value="yesterday">yesterday</option>
                            <option value="thisMonth">this month</option>
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
                                <TableCell className="border-black">Email</TableCell>
                                <TableCell className="border-black">
                                    <span className="flex">
                                        a-score
                                        <img src={infoIcon} alt="info" className="w-4" />
                                    </span>
                                </TableCell>
                                <TableCell className="border-black">
                                    <span className="flex">
                                        today
                                        <img src={infoIcon} alt="info" className="w-4" />
                                    </span>
                                </TableCell>
                                <TableCell className="border-black">
                                    <span className="flex">
                                        month
                                        <img src={infoIcon} alt="info" className="w-4" />
                                    </span>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            graders.map((grader, index) => <>
                                <TableRow hover key={index} onClick={()=>dispatch(setCurrentTab({name: 'grader', data: grader}))}>
                                    <TableCell>{grader.email}</TableCell>
                                    <TableCell>{grader.aScore}</TableCell>
                                    <TableCell>{grader.today}</TableCell>
                                    <TableCell>{grader.month}</TableCell>
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