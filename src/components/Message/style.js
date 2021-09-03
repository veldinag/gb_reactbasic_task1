import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  msgBox: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: "200px",
    backgroundColor: theme.palette.background.default
  }
}))

export default useStyles