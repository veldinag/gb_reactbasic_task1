import React from "react"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {Container, Paper, Tab, Tabs} from "@material-ui/core";

import Home from "./views/Home";
import Chats from "./views/Chats"
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import {store} from "./store";
import {useStyles} from "./style";

import {HOME, CHATS, PROFILE} from "./constants";

import './App.css'
import 'typeface-roboto'

function App() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Provider store={store}>
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
                            <Tab label="Home" to={HOME} component={Link}/>
                            <Tab label="Chats" to={CHATS} component={Link}/>
                            <Tab label="Profile" to={PROFILE} component={Link}/>
                        </Tabs>
                    </Paper>
                    <Switch>
                        <Route exact path={HOME}><Home/></Route>
                        <Route path={CHATS + "/:chatId?"}><Chats/></Route>
                        <Route path={PROFILE}><Profile/></Route>
                        <Route path="*"><NotFound/></Route>
                    </Switch>
                </ Container>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
