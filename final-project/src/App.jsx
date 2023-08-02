import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRoutes from "./Routes"
import '../src/App.css'

export default function App() {   
    return (
        <Router>
                <PageRoutes />    
        </Router>
    )
}