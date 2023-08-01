import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRoutes from "./Routes"
import Header from './components/Header'

export default function App() {   
    return (
        <Router>
            <div>
                <Header />
                <PageRoutes />  
            </div>
        </Router>
    )
}