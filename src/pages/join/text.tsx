import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { onValue, ref, set } from "firebase/database";
import React, { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";
import { database } from "../../config/firebase";
import { PlayerInterface } from "../../interfaces/GameInterface";

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

interface Props {}

const Text: React.FC<Props> = () => {
    const [RoomCode, setRoomCode] = useState<string>("");
    
    const [username, setUsername] = useLocalStorage<{
        username: string;
        isUsername: boolean;
    }>("@username", {
        username: "",
        isUsername: false,
    });

    const JoinRoom = async () => {
        if (RoomCode.length <= 0) {
            return;
        }

        const playerUUID = uuidv4();

        set(ref(database, "/rooms/" + RoomCode + "/players/" + playerUUID), {
            id: playerUUID,
            name: username.username,
        } as PlayerInterface);
    };

    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-3 p-3">
            <div className="flex flex-col gap-3">
                <ThemeProvider theme={theme}>
                    <TextField
                        onChange={(e) => setRoomCode(e.target.value)}
                        label="รหัสห้อง"
                        variant="outlined"
                    />
                </ThemeProvider>
                <button
                    onClick={() => JoinRoom()}
                    className="btn btn-primary rounded-[20px]"
                >
                    เข้าห้อง
                </button>
            </div>
        </div>
    );
};

export default Text;
