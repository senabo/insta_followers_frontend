import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Alert from "./components/Alert";
import SignInPage from "./pages/signIn";

function App() {
    const darkTheme = createTheme({
        palette:{
            mode: 'dark'
        },
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Alert />
            <SignInPage />
        </ThemeProvider>

);
}

export default App;
