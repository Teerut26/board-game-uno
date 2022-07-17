import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { PlayerInterface } from "../interfaces/GameInterface";
interface Props {
    player: PlayerInterface
}

const Btn = styled.button`${tw`cursor-pointer select-none`}`;

const Player: React.FC<Props> = ({player}) => {
    return (
        <div className="badge badge-info badge-lg">
            <Btn>
                <CloseIcon />
            </Btn>
            <div>{player.name}</div>
        </div>
    );
};

export default Player;
