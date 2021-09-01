import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    chatsList: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        height: 500,
    },
    chat: {
        padding: theme.spacing(1),
        height: 500,
        overflowY: "auto"
    }
}))