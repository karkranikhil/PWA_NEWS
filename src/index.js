import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import customAHS from './customAHS';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//customAHS()
// var firebaseConfig = {
//     apiKey: "AIzaSyA8u4T_zojq24q9KDLwOqMfILIgh-BL_og",
//     authDomain: "pwa-news-app-36b48.firebaseapp.com",
//     databaseURL: "https://pwa-news-app-36b48.firebaseio.com",
//     projectId: "pwa-news-app-36b48",
//     storageBucket: "pwa-news-app-36b48.appspot.com",
//     messagingSenderId: "164981792445",
//     appId: "1:164981792445:web:0ec4e1b76a8b684b"
//   }