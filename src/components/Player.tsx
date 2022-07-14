import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import tw from "twin.macro";
interface Props {}

const Btn = styled.button`${tw`cursor-pointer select-none`}`;

const Player: React.FC<Props> = () => {
    return (
        <div className="badge badge-info badge-lg">
            <Btn>
                <CloseIcon />
            </Btn>
            <div>sdfsdf</div>
        </div>
    );
};

export default Player;
