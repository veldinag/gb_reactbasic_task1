import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
        paddingRight: theme.spacing(1),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    authorization: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    }
}))