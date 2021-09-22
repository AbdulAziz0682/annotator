import { Grid, Typography } from "@material-ui/core";

export default function Metrics(props){
    return (
        <Grid container alignItems="center" className="self-start">
            <Grid item xs={12}>
                <Typography variant="h6" align="center" className="underline">Ulterances Graded</Typography>
            </Grid>
            <Grid item xs={12} className="mt-6">
                <div className="flex flex-col w-full items-center">
                    <div className="flex">
                        <span className="w-28 text-xs md:text-base md:p-10 md:w-60 flex items-center"></span>
                        <span className="w-20 text-xs md:text-base py-5 md:p-10 md:w-48 flex items-center justify-center">Today</span>
                        <span className="w-20 text-xs md:text-base py-5 md:p-10 md:w-48 flex items-center justify-center">Month Avg</span>
                    </div>
                    <div className="flex">
                        <span className="w-28 text-xs md:text-base md:p-10 md:w-60 flex items-center">Using other voices</span>
                        <span className="w-20 p-3 md:p-10 md:w-48 border text-base font-bold md:rounded-tl-3xl flex items-center justify-center">20</span>
                        <span className="w-20 p-3 md:p-10 md:w-48 border text-base font-bold md:rounded-tr-3xl flex items-center justify-center">15</span>
                    </div>
                    <div className="flex">
                        <span className="w-28 text-xs md:text-base md:p-10 md:w-60 flex items-center">Using other voices</span>
                        <span className="w-20 p-3 md:p-10 md:w-48 border text-base font-bold md:rounded-bl-3xl flex items-center justify-center">20</span>
                        <span className="w-20 p-3 md:p-10 md:w-48 border text-base font-bold md:rounded-br-3xl flex items-center justify-center">15</span>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}