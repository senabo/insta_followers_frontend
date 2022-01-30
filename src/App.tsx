// @ts-nocheck

import React from 'react';
import InstagramLoginButton from "./components/InstagramLogin";
import {createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import CenterBox from "./ui/CenterBox";

function App() {
    const darkTheme = createTheme({
        palette:{
            mode: 'dark'
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <CenterBox minHeight="50vh">
                <Typography variant="h3" alighn="center">Instagram Followers Balance</Typography>
            </CenterBox>
            <CenterBox>
                <InstagramLoginButton />
            </CenterBox>
        </ThemeProvider>

);
}

export default App;
