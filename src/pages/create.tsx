import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PlayerList from "../components/PlayerList";
import GamesIcon from "@mui/icons-material/Games";
import { onValue, ref, set } from "firebase/database";
import { database } from "../config/firebase";
import { GameInterface } from "../interfaces/GameInterface";
import _ from "lodash";
interface Props {}

const Create: React.FC<Props> = () => {
    let { id } = useParams();

    const [GameData, setGameData] = useState<GameInterface | undefined>();

    const [qrCodeImageData, setqrCodeImageData] = useState<
        string | undefined
    >();

    const createRoom = async (id: string | undefined) => {
        if (!id) return;
        const dataExist = await checkRoomExist(id);
        if (!dataExist) {
            set(ref(database, `/rooms/${id}`), {
                id,
                players: [],
            } as GameInterface);
        }
    };

    const checkRoomExist = (id: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            onValue(ref(database, "/rooms/" + id), (snapshot) => {
                if (snapshot.exists()) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    const copyToClipboard = (content: string) => {
        navigator.clipboard.writeText(content);
    };

    const initalizeQrCode = async () => {
        createRoom(id);
        let imageData = await QRCode.toDataURL(id!);
        setqrCodeImageData(imageData);
    };

    useEffect(() => {
        initalizeQrCode();
    }, []);

    useEffect(() => {
        const roomRef = ref(database, "/rooms/" + id);
        onValue(roomRef, (snapshot) => {
            const data = snapshot.val();
            if (!snapshot.exists()) return;
            data.players = _.values(data.players);

            if (data) {
                setGameData(data);
            }
        });
    }, []);

    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-[3rem] p-3">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
                <img className="rounded-xl" src={qrCodeImageData} alt="" />
                <div className="flex flex-col gap-2">
                    <div className="form-control">
                        <label className="input-group">
                            <input
                                type="text"
                                value={GameData?.id}
                                disabled={true}
                                className="input input-bordered"
                            />
                            <button
                                onClick={() => copyToClipboard(GameData?.id!)}
                                className="btn"
                            >
                                <ContentCopyIcon />
                            </button>
                        </label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="text-lg">Player</div>
                        <div className="badge badge-md">
                            {GameData?.players ? GameData?.players.length : "0"}
                            /6
                        </div>
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
                {GameData?.players ? (
                    <PlayerList players={GameData?.players} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Create;
