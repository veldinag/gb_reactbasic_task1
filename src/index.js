import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals'
//import './index.css';
import {store} from "./store"
import App from './App'
import 'typeface-roboto'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
