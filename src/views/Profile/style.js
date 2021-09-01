import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 600,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    heading: {
        marginTop: theme.spacing(22),
    },
    inputForm: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2)
    }
}))

export default useStyles