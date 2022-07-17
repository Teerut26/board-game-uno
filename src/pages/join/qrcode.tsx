import React, { useEffect, useRef, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import LoginIcon from "@mui/icons-material/Login";
import QrScanner from "qr-scanner";
import { v4 as uuidv4 } from "uuid";
import { set, ref } from "firebase/database";
import { database } from "../../config/firebase";
import { useLocalStorage } from "usehooks-ts";
import { PlayerInterface } from "../../interfaces/GameInterface";

interface Props {}

const QrCodeScan: React.FC<Props> = () => {
    const videoEm = useRef<HTMLVideoElement>(null);
    const [keyVideoElement, setkeyVideoElement] = useState<number>(0);
    const [QrCodeContent, setQrCodeContent] = useState<string | undefined>();

    const [username, setUsername] = useLocalStorage<{
        username: string;
        isUsername: boolean;
    }>("@username", {
        username: "",
        isUsername: false,
    });

    useEffect(() => {
        const qrScanner = new QrScanner(
            videoEm.current!,
            (result) => handleScan(result),
            {
                // highlightScanRegion: true,
            }
        );
        qrScanner.start();
        return () => {
            qrScanner.destroy();
        };
    }, [keyVideoElement]);

    const handleScan = (result: QrScanner.ScanResult) => {
        if (!QrCodeContent) {
            setQrCodeContent(result.data);
        }
    };

    const JoinRoom = async (RoomCode:string) => {
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
            <div className="flex flex-col">
                {QrCodeContent ? (
                    <div className="flex flex-col gap-2 items-center justify-center">
                        {QrCodeContent}
                        <div onClick={()=>JoinRoom(QrCodeContent)} className="btn gap-2">
                            <LoginIcon />
                            เข้าห้อง
                        </div>
                        <div
                            onClick={() => {
                                setQrCodeContent(undefined);
                                setkeyVideoElement((pre) => pre + 1);
                            }}
                            className="btn gap-2"
                        >
                            <RefreshIcon />
                            แสกนใหม่
                        </div>
                    </div>
                ) : (
                    <div className="max-w-[20rem] relative">
                        <video key={keyVideoElement} ref={videoEm}></video>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QrCodeScan;
