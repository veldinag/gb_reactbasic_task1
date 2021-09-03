import {Paper, Typography} from "@material-ui/core"
import './Message.css'
import useStyles from "./style"

const Message = ({date, message}) => {
    const classes = useStyles()

    return (
        <div className="fromMe">
            <Paper className={classes.msgBox}>
                <Typography display="block" variant="caption" color="secondary">{date}</Typography>
                <Typography display="block" variant="body1" align="center">{message}</Typography>
            </Paper>
        </div>
    )
}

export default Message