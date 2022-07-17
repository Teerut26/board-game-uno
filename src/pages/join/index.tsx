import styled from "@emotion/styled";
import React, { useEffect } from "react";
import QrCodeIcon from "@mui/icons-material/QrCode";
import TitleIcon from "@mui/icons-material/Title";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { createTheme, TextField, ThemeProvider } from "@mui/material";

interface Props {}

const Button = styled.button`
    ${tw`btn btn-lg btn-primary rounded-full`}
`;

const theme = createTheme({
    typography: {
        fontFamily: "Prompt, sans-serif",
    },
    palette: {
        primary: {
            main: "#FBBD23",
        },
        mode: "dark",
    },
    shape: {
        borderRadius: 20,
    },
});

const Join: React.FC<Props> = () => {
    const [username, setUsername] = useLocalStorage<{
        username: string;
        isUsername: boolean;
    }>("@username", {
        username: "",
        isUsername: false,
    });
    const navigate = useNavigate();

    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-3 p-3">
            {username.isUsername ? (
                <div className="flex flex-col gap-3">
                    <Button
                        onClick={() => navigate(`qrcode`)}
                        className="gap-2"
                    >
                        <QrCodeIcon fontSize="large" />
                        แสกน QR code
                    </Button>
                    <Button onClick={() => navigate(`text`)} className="gap-2">
                        <TitleIcon fontSize="large" />
                        กรอกรหัสห้อง
                    </Button>
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-3">
                        <ThemeProvider theme={theme}>
                            <TextField
                                onChange={(e) =>
                                    setUsername((pre) => ({
                                        ...pre,
                                        username: e.target.value,
                                    }))
                                }
                                label="ชื่อผู้เล่น"
                                variant="outlined"
                            />
                        </ThemeProvider>
                        <button
                            onClick={() =>
                                setUsername((pre) => ({
                                    ...pre,
                                    isUsername: true,
                                }))
                            }
                            className="btn btn-primary gap-2 items-center rounded-xl"
                        >
                            ตกลง
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Join;
