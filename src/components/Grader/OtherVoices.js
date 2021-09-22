import { useState } from "react";
import { Grid, makeStyles, Slider, Button } from "@material-ui/core";
import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined';

import companyIcon from '../../assets/company.svg';

const useStyles = makeStyles({
    activeRail: {
        backgroundColor: 'white'
    },
    rail: {
        backgroundColor: 'gray'
    }
})

export default function OtherVoices(props){
    const classes = useStyles();
    let [open, setOpen] = useState(false);
    return (
        <Grid container direction="column" className="h-full">
            <Grid item>
                <div className="flex gap-3 flex-grow h-7 md:h-9 border-b border-black pb-1">
                    <div className="flex-grow flex items-center gap-3 px-1 md:p-2 rounded-lg bg-gray-500">
                        <PlayArrowOutlined htmlColor="white" size="small" />
                        <Slider value={33} size="small" className="flex-grow" classes={{rail: classes.activeRail}} />
                    </div>
                    <Button size="small" variant="contained" color="default" onClick={()=>setOpen(!open)}>
                        <img src={companyIcon} alt="voice details" className="h-5 md:h-6" />
                    </Button>
                </div>
            </Grid>
            <Grid item className={`${open ? 'block' : 'hidden'} pt-5 flex flex-col gap-3 md:gap-6`}>
                <div className="flex gap-6 md:gap-9 px-2 py-1 items-center">
                    <div className="w-4 h-4 border border-black"> </div>
                    <div className="flex-grow bg-gray-200 rounded-lg h-6 md:h-8 flex items-center px-1 md:p-2">
                        None
                    </div>
                </div>
                <div className="flex gap-6 md:gap-9 px-2 py-1 items-center">
                    <div className="w-4 h-4 border border-black"> </div>
                    <div className="flex-grow bg-gray-200 rounded-lg h-6 md:h-8 flex items-center px-1 md:p-2">
                        <PlayArrowOutlined size="small" />
                        <Slider value={33} size="small" className="flex-grow" classes={{rail: classes.rail}} />
                    </div>
                </div>
                <div className="flex gap-6 md:gap-9 px-2 py-1 items-center">
                    <div className="w-4 h-4 border border-black bg-gray-500"> </div>
                    <div className="flex-grow bg-gray-500 rounded-lg h-6 md:h-8 flex items-center px-1 md:p-2">
                        <PlayArrowOutlined size="small" htmlColor="white" />
                        <Slider value={33} size="small" className="flex-grow" classes={{rail: classes.activeRail}} />
                    </div>
                </div>
                <div className="flex gap-6 md:gap-9 px-2 py-1 items-center">
                    <div className="w-4 h-4 border border-black"> </div>
                    <div className="flex-grow bg-gray-200 rounded-lg h-6 md:h-8 flex items-center px-1 md:p-2">
                        <PlayArrowOutlined size="small" />
                        <Slider value={33} size="small" className="flex-grow" classes={{rail: classes.rail}} />
                    </div>
                </div>
            </Grid>
            <Grid item className={`flex-grow flex items-end pb-16 ${open ? 'block' : 'hidden'}`}>
                <div className="flex-grow flex justify-evenly gap-3">
                    <Button variant="contained" size='small'>Save</Button>
                    <Button variant="contained" color="primary" size="small">Cancel</Button>
                </div>
            </Grid>
        </Grid>
    )
}