import {Paper, Typography} from "@material-ui/core";
import './Message.css';
import useStyles from "./style";
import {useSelector} from "react-redux";
import {nameSelector} from "../../store/profile/selectors";

const Message = (props) => {
  const classes = useStyles();
  const name = useSelector(nameSelector);

  return (
    <div className={props.message.style}>
      <Paper className={classes.msgBox}>
        <Typography
          display="block"
          variant="caption"
          color="secondary">
          {"Date: " + props.message.date}
        </Typography>
        <Typography
          display="block"
          variant="caption"
          color="secondary">
          {"Author: " + name}
        </Typography>

        <Typography
          display="block"
          variant="body1"
          align="center">
          {props.message.message}
        </Typography>
      </Paper>
    </div>
  )
}

export default Message