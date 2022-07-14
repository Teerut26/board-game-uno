import { createTheme, TextField, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
    typography: {
        fontFamily: "Prompt, sans-serif",
    },
    palette:{
        primary: {
            main: "#FBBD23",
        },
        mode:"dark"
    },
    shape:{
        borderRadius:20
    }
});

interface Props {}

const Text: React.FC<Props> = () => {
    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-3 p-3">
            <div className="flex flex-col gap-3">
                <ThemeProvider theme={theme}>
                    <TextField label="รหัสห้อง" variant="outlined" />
                </ThemeProvider>
                <button className="btn btn-primary rounded-[20px]">เข้าห้อง</button>
            </div>
        </div>
    );
};

export default Text;
