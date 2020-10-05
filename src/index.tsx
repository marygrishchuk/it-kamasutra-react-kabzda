import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let a = {
    name: "Dimych",
    age: 10,
    address: {
        city: "Minsk",
        country: "Belarus"
    }
}

let users = [
    {
        name: "Dimych",
        age: 10,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Viktor",
        age: 13,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    }
]