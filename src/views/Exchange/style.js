import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 600,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        paddingBottom: theme.spacing(4),
        borderBottom: "1px solid black",
    },
    item: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: "1px solid black",
    },
    btn: {
        marginTop: theme.spacing(3),
    }
}))

export default useStyles