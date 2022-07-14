import React from "react";
import Player from "./Player";


interface Props {}

const PlayerList: React.FC<Props> = () => {
    return (
        <div className="flex gap-3 flex-row flex-wrap justify-center max-w-2xl mx-auto">
            {[...new Array(6)].map((_, index) => (
                <Player />
            ))}
        </div>
    );
};

export default PlayerList;
