import './App.css'
import React from "react"
import 'typeface-roboto'
import Chats from "./components/Chats"
import {Container, makeStyles, Paper, Tab, Tabs} from "@material-ui/core";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(1)
    },
}))

function App() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BrowserRouter>
            <Container maxWidth="md">
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Home" to="/" component={Link}/>
                        <Tab label="Chats" to="/chats" component={Link}/>
                        <Tab label="Profile" to="/profile" component={Link}/>
                    </Tabs>
                </Paper>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/chats/:chatId?"><Chats/></Route>
                    <Route path="/profile"><Profile/></Route>
                    <Route path="*"><NotFound /></Route>
                </Switch>
            </ Container>
        </BrowserRouter>
    )
}

export default App;
