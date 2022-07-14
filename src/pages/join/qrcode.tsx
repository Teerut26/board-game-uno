import React, { useEffect, useRef, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import LoginIcon from "@mui/icons-material/Login";
import QrScanner from "qr-scanner";

interface Props {}

const QrCodeScan: React.FC<Props> = () => {
    const videoEm = useRef<HTMLVideoElement>(null);
    const [keyVideoElement, setkeyVideoElement] = useState<number>(0);
    const [QrCodeContent, setQrCodeContent] = useState<string | undefined>();

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

    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-3 p-3">
            <div className="flex flex-col">
                {QrCodeContent ? (
                    <div className="flex flex-col gap-2 items-center justify-center">
                        {QrCodeContent}
                        <div className="btn gap-2">
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
