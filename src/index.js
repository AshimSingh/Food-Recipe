import React from "react";
import ReactDom from "react-dom"
import App from "./app";
import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
const Myapp=()=>{
    return(
        <>
            <App/>
        </>
    )
}
ReactDom.render(<Myapp></Myapp>,document.getElementById('root'))