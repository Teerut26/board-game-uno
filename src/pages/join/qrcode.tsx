import React, { useEffect, useRef } from "react";
import QrScanner from "qr-scanner";

interface Props {}

const QrCodeScan: React.FC<Props> = () => {
    const videoEm = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const qrScanner = new QrScanner(videoEm.current!, (result) =>
            handleScan(result),
            {
                highlightScanRegion: true,
            }
        );
        qrScanner.start();
        return () => {
            qrScanner.stop();
            qrScanner.destroy();
        };
    }, []);

    const handleScan = (result: any) => {
        console.log("decoded qr code:", result);
    };

    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-3 p-3">
            <div className="flex flex-col">
                <div className="max-w-[20rem]">
                    <video ref={videoEm}></video>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default QrCodeScan;
