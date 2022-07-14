import React from "react";
import { QrReader } from "react-qr-reader";

interface Props {}

const QrCodeScan: React.FC<Props> = () => {
    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-3 p-3">
            <div className="flex flex-col">
                <div className="max-w-[20rem]">
                    <QrReader
                        onResult={(result, error) => {
                            console.log(result);
                        }}
                        videoStyle={{ width: "100%" }}
                        constraints={{}}
                    />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default QrCodeScan;
