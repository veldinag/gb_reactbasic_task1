import {makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    msgBox: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: 300,
        backgroundColor: theme.palette.background.default
    }
}))


const Message = (props) => {
    const classes = useStyles()

    return (
        <Paper className={classes.msgBox}>
            <Typography display="block" variant="caption" color="secondary">Оставлено: {props.msg.date}</Typography>
            <Typography display="block" variant="body1" align="center">{props.msg.text}</Typography>
            <Typography display="block" variant="caption" align="right" color="primary">Автор: {props.msg.author}</Typography>

        </Paper>
    )
}

export default Message;