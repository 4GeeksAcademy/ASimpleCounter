//import react into the bundle
import React from "react";
import App from "./component/App";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components


ReactDOM.render(<App />, document.querySelector("#app"));


    





