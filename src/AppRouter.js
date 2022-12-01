import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";

function Copyright(){
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {"㈜ "}
            재민테크, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class AppRouter extends React.Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/login" element={ <Login /> }>
                            </Route>
                            <Route path="/signup" element={ <SignUp /> }>
                            </Route>
                            <Route path="/" element={ <App /> }>
                            </Route>
                        </Routes>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Router>
            </div>
        );
    }
}

export default AppRouter;