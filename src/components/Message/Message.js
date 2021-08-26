import {makeStyles, Paper, Typography} from "@material-ui/core"
import './Message.css'

const useStyles = makeStyles((theme) => ({
    msgBox: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        minWidth: "200px",
        backgroundColor: theme.palette.background.default
    }
}))

const Message = (props) => {
    const classes = useStyles()

    return (
        <div className={props.msg.type}>
            <Paper className={classes.msgBox}>
                <Typography display="block" variant="caption" color="secondary">{props.msg.date}</Typography>
                <Typography display="block" variant="body1" align="center">{props.msg.text}</Typography>
            </Paper>
        </div>
    )
}

export default Message;