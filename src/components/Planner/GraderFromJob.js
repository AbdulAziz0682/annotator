import { useState } from "react";

import { Button, Grid, InputBase, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";

import { Search, ArrowBack, PlayArrow } from "@material-ui/icons";

import infoIcon from '../../assets/info.svg';

import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/actions/plannerActions";

export default function GraderFromJob({job}){
    const {graders} = useSelector(state => state.planner);
    const grader = graders.find(grader => grader.email === job.grader);
    const dispatch = useDispatch();
    let [voiceTypes, setVoiceTypes] = useState('usingOtherVoices');
    return (
        <Grid container direction="column" className="p-2 md:p-6 self-start">
            <Grid item>
                <Typography color="primary" className="font-bold text-2xl">Email: <span className="font-normal">{grader.email}</span></Typography>
            </Grid>
            <Grid item className="flex justify-end">
                <Button variant="contained" color="primary" size="small" startIcon={<ArrowBack />} onClick={()=>dispatch(setCurrentTab({name: 'job', data: job}))}>Back</Button>
            </Grid>
            <Grid item className="flex justify-end mt-12">
                <select value={voiceTypes} onChange={(e)=>setVoiceTypes(e.target.value)} className="p-2 bg-gray-100 rounded-lg">
                    <option value="usingOtherVoices">Using other voices</option>
                    <option value="usingOwnVoices">Using own voices</option>
                </select>
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
                        <span className="bg-gray-100 rounded-r-lg">
                            a-score
                        </span>
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
                            <TableCell className="border-black">Transcript</TableCell>
                            <TableCell className="border-black">
                                <span className="flex">
                                    Heard
                                    <img src={infoIcon} alt="info" className="w-4" />
                                </span>
                            </TableCell>
                            <TableCell className="border-black">
                                <span className="flex">
                                    Matched
                                    <img src={infoIcon} alt="info" className="w-4" />
                                </span>
                            </TableCell>
                            <TableCell className="border-black">
                                <span className="flex">
                                    a-score
                                    <img src={infoIcon} alt="info" className="w-4" />
                                </span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        grader[voiceTypes].map((voiceType, index) => <>
                            <TableRow hover key={index} onClick={()=>{}}>
                                <TableCell>{voiceType.jobId}</TableCell>
                                <TableCell>{voiceType.transcript}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" size="small"><PlayArrow htmlColor="white" /></Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" size="small"><PlayArrow htmlColor="white" /></Button>
                                </TableCell>
                                <TableCell>{voiceType.aScore}</TableCell>
                            </TableRow>
                        </>)
                    }
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}