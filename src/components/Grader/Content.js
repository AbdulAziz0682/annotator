import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.mixins.toolbar.minHeight/2-15,
        flexGrow: 1,
        height: "calc(100vh - 57px)",
    },
}))

export default function Content(props){
    let classes = useStyles();
    return (
    <div className={clsx({[classes.root]:true})}>
        
    </div>
    )
}