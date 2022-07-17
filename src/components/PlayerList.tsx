import React from "react";
import { PlayerInterface } from "../interfaces/GameInterface";
import Player from "./Player";

interface Props {
    players: PlayerInterface[];
}

const PlayerList: React.FC<Props> = ({ players }) => {
    return (
        <div className="flex gap-3 flex-row flex-wrap justify-center max-w-2xl mx-auto">
            {players.map((player, index) => (
                <Player key={index} player={player} />
            ))}
        </div>
    );
};

export default PlayerList;
