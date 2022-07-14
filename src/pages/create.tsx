import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PlayerList from "../components/PlayerList";
import GamesIcon from '@mui/icons-material/Games';
interface Props {}

const Create: React.FC<Props> = () => {
    let { id } = useParams();
    const [qrCodeImageData, setqrCodeImageData] = useState<
        string | undefined
    >();

    useMemo(async () => {
        let imageData = await QRCode.toDataURL(id!);
        setqrCodeImageData(imageData);
    }, [id]);

    const copyToClipboard = (content: string) => {
        navigator.clipboard.writeText(content);
    };

    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-[3rem] p-3">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
                <img className="rounded-xl" src={qrCodeImageData} alt="" />
                <div className="flex flex-col gap-2">
                    <div className="form-control">
                        <label className="input-group">
                            <input
                                type="text"
                                value={id}
                                disabled={true}
                                className="input input-bordered"
                            />
                            <button
                                onClick={() => copyToClipboard(id!)}
                                className="btn"
                            >
                                <ContentCopyIcon />
                            </button>
                        </label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="text-lg">Player</div>
                        <div className="badge badge-md">0/6</div>
                    </div>

                    <button
                        onClick={() => copyToClipboard(id!)}
                        className="btn btn-primary gap-2 items-center"
                    >
                       <GamesIcon />
                        Start Game
                    </button>
                </div>
            </div>
            <div className="overflow-y-auto w-full h-fit">
                <PlayerList />
            </div>
        </div>
    );
};

export default Create;
